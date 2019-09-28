import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChatListComponent } from './home/chat-list/chat-list.component';
import { ChatBodyComponent } from './home/chat-body/chat-body.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';


// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';


var firebase = {
  apiKey: "AIzaSyDnmIbdFh61VQjnO1XKKTBDy_nNf_66APU",
  authDomain: "chat-app-mai.firebaseapp.com",
  projectId: "chat-app-mai",
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatListComponent,
    ChatBodyComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:1500,
      positionClass:'toast-top-right',
      preventDuplicates:false,
    }),
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 
 }
