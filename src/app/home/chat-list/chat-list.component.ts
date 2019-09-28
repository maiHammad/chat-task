import { contactsData } from './../../sharedData/contactsdata.service';
import { Component } from '@angular/core';


@Component({
    selector: 'chat-list',
    templateUrl: 'chat-list.component.html',
    styleUrls: ['chat-list.component.scss']
})
export class ChatListComponent {
isactive:boolean=true;
filterdData:Array<any>= [];
allData:any=this._contactsData.pathAllContactsData();
    constructor(public _contactsData:contactsData){

     
    }
clickContactItem(contactid,event){
    var contacList=document.getElementsByClassName("list-group-item");
    [].forEach.call(contacList, function(el){
        el.classList.remove("active");
    })
    event.currentTarget.className+=" active";

    this._contactsData.loadContactChat(contactid)
    }
filtercontactsList(inputValue){
    this.filterdData=[];
    if(inputValue!==''){
   for(let i=0;i<this.allData.length;i++){
         if(this.allData[i].name.toLowerCase().includes(inputValue.toLowerCase())){
            if(!this.filterdData.includes(this.allData[i])){
                this.filterdData.push(this.allData[i])
            }
        }

       for(let x=0;x<this.allData[i].messages.length;x++){
            if(this.allData[i].messages[x].text.toLowerCase().includes(inputValue.toLowerCase())){
                if(!this.filterdData.includes(this.allData[i])){
                    this.filterdData.push(this.allData[i])
                }
            }
       
    } 
}
    this._contactsData.allData=this.filterdData;


}else{
    this._contactsData.allData=this._contactsData.pathAllContactsData();
}
}

}
