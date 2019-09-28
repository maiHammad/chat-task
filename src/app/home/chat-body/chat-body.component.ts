import { Component} from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { contactsData } from './../../sharedData/contactsdata.service';

@Component({
    selector: 'chat-body',
    templateUrl: 'chat-body.component.html',
    styleUrls: ['chat-body.component.scss']
})
export class ChatBodyComponent {
    constructor(public _contactsData:contactsData){
      

    }
    shotost(){
    }
    sendNewMsg(contctId){
       let inputValue = (<HTMLInputElement>document.getElementById('msgBox')).value;
        this._contactsData.updateUserMsg(contctId,inputValue);
        (<HTMLInputElement>document.getElementById('msgBox')).value="";
    }
    backToChatList(){
        document.getElementById("contListContain").classList.remove("hide");
        document.getElementById("chatBoxCont").classList.add("hide");

     }  
}
