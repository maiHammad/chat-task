import { Injectable } from  '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';
import { ToastrService } from 'ngx-toastr';
@Injectable({
    providedIn:  'root'
})
export  class  AuthService {
  user: User;
  constructor(public  afAuth:  AngularFireAuth, public  router:  Router,private toastr: ToastrService) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
      }
       
    })

   }
   
   async  login(email:  string, password:  string) {

    try {
        await  this.afAuth.auth.signInWithEmailAndPassword(email, password)
        localStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigate(['/home']);
    } catch (e) {
      localStorage.clear();
      localStorage.setItem('user', null);
        this.toastr.error(e.message);
    }
    }
  isLoggedIn(): boolean {
      const  user  =  JSON.parse(localStorage.getItem('user'));
      return  user  !==  null;
  }

}