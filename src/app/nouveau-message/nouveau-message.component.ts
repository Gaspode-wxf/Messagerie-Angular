import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {MessageUtilisateur} from "src/app/models/message-utilisateur";
import {GestionMessagesService} from "src/app/services/gestion-messages.service";

@Component({
  selector: 'app-nouveau-message',
  templateUrl: './nouveau-message.component.html',
  styleUrls: ['./nouveau-message.component.css']
})
export class NouveauMessageComponent implements OnInit {
   angularForm: FormGroup;


  constructor(private formBuilder : FormBuilder,
              private gestionMessages : GestionMessagesService) {
/*
    this.creerFormulaire();
*/
    this.angularForm = this.formBuilder.group(
      {pseudo:['', Validators.required],
        message:['', Validators.required]}
    );
  }

  ngOnInit(): void {
  }



  private creerFormulaire() {
    this.angularForm = this.formBuilder.group(
      {pseudo:['', Validators.required],
      message:['', Validators.required]}
    );}

  envoyer() {
    this.gestionMessages.ajouter(new MessageUtilisateur(this.angularForm.controls['pseudo'].value, this.angularForm.controls['message'].value, new Date()));
  }

}
