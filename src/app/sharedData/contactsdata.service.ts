import { TestBed } from '@angular/core/testing';

import data from './contactsData.json';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class contactsData{
  loadedContact:any;
  public innerWidth: any;
  allData:any=data.contactsList;
  constructor(public toastr: ToastrService) { }
  pathAllContactsData(){
    return data.contactsList;
  }

  loadContactChat(contactid){
    data.contactsList.filter((contact: any) => contact.id==contactid)[0].hasNewMsg=false;
    data.contactsList.filter((contact: any) => contact.id==contactid)[0].unreadCount=0;

   this.loadedContact=data.contactsList.filter((contact: any) => contact.id==contactid);
   this.innerWidth = window.innerWidth;
   if(this.innerWidth<700){
         document.getElementById("contListContain").classList.add("hide");
         document.getElementById("chatBoxCont").classList.remove("hide");
   }
  }
  getCurrentTiem(){
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    var currentTimeStr=hours+":"+minutes+" "+ ampm.toUpperCase()
    return currentTimeStr;
}

  updateUserMsg(contctId,newMsg){
    var currTime=this.getCurrentTiem();
    this.allData.filter(x => x.id == contctId)[0].hasMsg=true;
    this.allData.filter(x => x.id == contctId)[0].messages.push({"text":newMsg,"type":"sent","time":currTime})

}

reciveNewMsg(){   
  let currTime=this.getCurrentTiem();
  let targetElem=this.allData[Math.floor(Math.random()*this.allData.length)];
       const index: number = this.allData.indexOf(this.allData.filter(x => x.id == targetElem.id)[0]);
       document.getElementById("contactLi"+ targetElem.id).style.display= 'none';
       this.allData.splice(index, 1);
       this.allData.unshift(targetElem);
       this.allData.filter(x => x.id == targetElem.id)[0].hasNewMsg=true;
       this.allData.filter(x => x.id == targetElem.id)[0].unreadCount=targetElem.unreadCount+1;
       this.allData.filter(x => x.id == targetElem.id)[0].messages.push({"text":"hello .......","type":"recived","time":currTime})
       this.toastr.info('You have new Message from '+targetElem.name);
       setTimeout(() => {
        document.getElementById("contactLi"+ targetElem.id).style.display= 'block';
       }, 200);

}
muteChat(contactId){
  this.allData.filter(x => x.id == contactId)[0].muted=true;
  this.toastr.info('This chat has been muted');

}
removeChat(actionType,contactId){
  var targetElem=this.allData.filter(x => x.id == contactId)[0]

  const index: number = this.allData.indexOf(targetElem);

   this.allData.splice(index,1);
  if(actionType=='archive'){
    this.toastr.info('This chat has been archived');
  }else{
    this.toastr.info('This chat has been deleted');

  }
  this.loadedContact=[];
}
}
