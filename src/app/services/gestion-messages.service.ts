import {EventEmitter, Injectable} from '@angular/core';
import {MessageUtilisateur} from "src/app/models/message-utilisateur";

@Injectable({
  providedIn: 'root'
})
export class GestionMessagesService {
  private messages: MessageUtilisateur[] = [];
  public emmeteurMessages: EventEmitter<MessageUtilisateur[]> = new EventEmitter<MessageUtilisateur[]>();
  constructor() { }

  private notifier(){
    this.emmeteurMessages.emit(this.messages.slice());
  }
  public ajouter(m: MessageUtilisateur):boolean{

    this.messages.push(m);
    this.notifier();
    return true;
  }

  public charger(){
    this.notifier();
  }
}
