import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessageUtilisateur} from "src/app/models/message-utilisateur";
import {GestionMessagesService} from "src/app/services/gestion-messages.service";

@Component({
  selector: 'app-personnes-actives',
  templateUrl: './personnes-actives.component.html',
  styleUrls: ['./personnes-actives.component.css']
})
export class PersonnesActivesComponent implements OnInit, OnDestroy {

  histoMessages: MessageUtilisateur[] = [];
  constructor(private gestionMessages : GestionMessagesService) { }

  ngOnInit(): void {
    this.gestionMessages.emmeteurMessages.subscribe((value)=>this.histoMessages = value);
  }

  ngOnDestroy(): void {
    this.gestionMessages.emmeteurMessages.unsubscribe();

  }

}
