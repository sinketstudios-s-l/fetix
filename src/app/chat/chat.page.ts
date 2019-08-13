import { Component } from '@angular/core';
import { MdPage } from '../md/md.page';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage {

  constructor(public navCtrl: NavController) {

  }

  MdPage(){
    this.navCtrl.push(MdPage);
   }

}


