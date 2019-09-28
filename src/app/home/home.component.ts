import { Component,HostListener } from '@angular/core';
import { Routes } from '@angular/router';
import { contactsData } from '../sharedData/contactsdata.service';
import { AuthService } from  '../auth/auth.service';
import { Router } from  "@angular/router";

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent {
    public innerWidth: any;

constructor(public _contactsData:contactsData,public  authService:  AuthService, public  router:  Router){
    setTimeout(()=>{ 
        this._contactsData.reciveNewMsg();
      },10000);
}
ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.onScreenResize()
    
if(!this.authService.isLoggedIn()){
    this.router.navigate(['/login']);
}
}
@HostListener('window:resize', ['$event'])
onResize(event) {
    this.onScreenResize()
  }
onScreenResize(){
    this.innerWidth = window.innerWidth;
    if(this.innerWidth<700){
      if(this._contactsData.loadedContact.length>0){
          document.getElementById("contListContain").classList.add("hide");
          document.getElementById("chatBoxCont").classList.remove("hide");

      }else{
        document.getElementById("contListContain").classList.remove("hide");
        document.getElementById("chatBoxCont").classList.add("hide");  
      }
    }else{
        document.getElementById("contListContain").classList.remove("hide");
        document.getElementById("chatBoxCont").classList.remove("hide");
    }
  }

}
