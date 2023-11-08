import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, catchError, map, tap, throwError } from "rxjs";
import { ErrordialogueComponent } from "../errordialogue/errordialogue.component";
import { MatDialog } from "@angular/material/dialog";

@Injectable({
    providedIn: 'root'
})

export class HttphandlerService{
    currrentAuthResp : any = {};

    isAuthenticated :boolean = false;

    constructor(private http:HttpClient,private dialog: MatDialog){}


    apiurl: string = "https://leave-management-38570-default-rtdb.asia-southeast1.firebasedatabase.app/userdata.json";
    apiurlleave : string = "https://leave-management-38570-default-rtdb.asia-southeast1.firebasedatabase.app/userleavedata.json"


    postuser(userobj : any):Observable<any>{
        return this.http.post(this.apiurl,userobj,{
            // params : new HttpParams().set('auth',this.currrentAuthResp?.idToken)
        })
    }

    login() {
        this.isAuthenticated = true;
        localStorage.setItem('auth', 'true'); 
      }


   

      leavedata():boolean{
        return this.isAuthenticated;
      }
      isLoggedInUser(): boolean {
        return this.isAuthenticated;
      }
    


      checkAuthenticationStatus() {
        const storedAuth = localStorage.getItem('auth'); 
        this.isAuthenticated = !!storedAuth;
      }



//   isAuthenticatedUser(): boolean {
//     return this.isAuthenticated;
//   }

    isloggin(): boolean{
        return this.isAuthenticated;
    }

    signUpNewUser(credentials : any):Observable<any>{
        let payload = {
            email : credentials.username,
            password : credentials.password,
            returnSecureToken : true
        }
        return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC3ECn7k4VeGXwYhUMl4gMJ60s28dv3jz8',payload).pipe(tap((data :any)=>{
            console.log(data)
        }))
    }
    signInCurrentUser(credentials:any):Observable<any>{
        let payload = {
            email : credentials.username,
            password :credentials.password,
        }
        return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC3ECn7k4VeGXwYhUMl4gMJ60s28dv3jz8',payload).pipe(tap((data:any)=>{
            this.currrentAuthResp = data;
            console.log(data);
            this.openErrorDialog('  Login succesfully!', 'Welcome !')
        }),
        catchError((errD: any) => {
            this.openErrorDialog('Login Failed', 'Invalid credentials. Please try again.');
            // alert("Your email or password is incorrect.Please try again!!")
            return throwError(errD.message);
          })
        )
    }

    openErrorDialog(title: string, message: string): void {
        this.dialog.open(ErrordialogueComponent, {
          data: { title, message },
          width:'200px',
        });
      }


    getUsers():Observable<any>{
        let myParams = new HttpParams();
        myParams = myParams.append('auth',this.currrentAuthResp?.idToken)
       return this.http.get
       (this.apiurl,{
        headers : new HttpHeaders({
            'jwt' : 'ASDF',
        }),
        params : myParams ,
       }
       ).pipe(map((rawData : any)=>{
        console.log(rawData)
            let arr = [];
            for(let user in rawData){
                arr.push({...rawData[user],id : user})
            }
            return arr
        }),
        catchError((errD : any)=>{
            return throwError(errD.message)
        })
        )
    }

    getstaffdetails(obj : any):Observable<any>{
        return this.http.get(this.apiurl).pipe(map((rawData : any)=>{
            let arrr = [];
            for(let user in rawData){
                arrr.push({...rawData[user],id :user})
            }
            return arrr
        }))
    }

    postLeaveData(leaveObj : any):Observable<any>{
        return this.http.post(this.apiurlleave,leaveObj,{
            params : new HttpParams().set('auth',this.currrentAuthResp?.idToken)
        })
    }

    getLeaveDataOfStaff(userId1:any):Observable<any>{
        return this.http.get(this.apiurlleave).pipe(map((rawData:any)=>{
            let arr = [];
            for(let user in rawData){
                if(rawData[user].userId == userId1){
                arr.push({...rawData[user],id : user})
                }
            }
            return arr
        }))
        }

 dialongStaffrelSubj = new Subject();
 hoddetails = new Subject();

 getleavedataofhod(userid:any):Observable<any>{

    return this.http.get(this.apiurlleave).pipe(map((rawData:any)=>{
        let arr = [];
        for(let user in rawData){
            console.log(rawData[user].depart)
            if(rawData[user].depart == userid){
            arr.push({...rawData[user],id : user})
            }
        }
        return arr
    }))

 }

 patchUser(id:any,obj:any){
    return this.http.patch(`https://leave-management-38570-default-rtdb.asia-southeast1.firebasedatabase.app/userdata/${id}.json`,obj)
}


patchLeaveData(id:any,obj:any):Observable<any>{
    return this.http.patch(`https://leave-management-38570-default-rtdb.asia-southeast1.firebasedatabase.app/userleavedata/${id}.json`,obj)
}

gethodstaffdet(dept:any):Observable<any>{
    return this.http.get(this.apiurl).pipe(map((rawdata : any)=>{
        let arr = [];
        for(let user in rawdata){
            if(rawdata[user].department == dept){
                arr.push({...rawdata[user],id:user})
            }
        }
        return arr
    }))
}

deleteuser(id : any):Observable<any>{
    return this.http.delete(`https://leave-management-38570-default-rtdb.asia-southeast1.firebasedatabase.app/userdata/${id}.json`)
}





}