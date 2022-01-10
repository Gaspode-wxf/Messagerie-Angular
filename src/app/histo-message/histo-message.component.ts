import { Component, OnInit, OnDestroy } from '@angular/core';
import {MessageUtilisateur} from "src/app/models/message-utilisateur";
import {GestionMessagesService} from "src/app/services/gestion-messages.service";



@Component({
  selector: 'app-histo-message',
  templateUrl: './histo-message.component.html',
  styleUrls: ['./histo-message.component.css']
})
export class HistoMessageComponent implements OnInit, OnDestroy {

  histoMessages: MessageUtilisateur[] = []; /* = [new MessageUtilisateur("Gaspode","Coucou", new Date(1985,3,13)),
  new MessageUtilisateur("Ciri","J'ai les cheveux blancs",new Date(1985,12,4)),
  new MessageUtilisateur("Garance","Miaou des crêpes",new Date(1993,7,31))]*//* = [new MessageUtilisateur("Gaspode","Coucou", new Date(1985,3,13)),
    new MessageUtilisateur("Ciri","J'ai les cheveux blancs",new Date(1985,12,4)),
    new MessageUtilisateur("Garance","Miaou des crêpes",new Date(1993,7,31))]*/


  constructor(private gestionMessages : GestionMessagesService) { }

  ngOnInit(): void {
    this.gestionMessages.emmeteurMessages.subscribe((value)=>this.histoMessages = value);
  }

  ngOnDestroy(): void {
    this.gestionMessages.emmeteurMessages.unsubscribe();
  }

}
