import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/*
import {LOCALE_ID} from "@angular/core";
*/

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PersonnesActivesComponent } from './personnes-actives/personnes-actives.component';
import { HistoMessageComponent } from './histo-message/histo-message.component';
import { NouveauMessageComponent } from './nouveau-message/nouveau-message.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NavigationComponent } from './navigation/navigation.component';
import { AccueilComponent } from './accueil/accueil.component';
import { VueMessagesComponent } from './vue-messages/vue-messages.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import {RouterModule, Routes} from "@angular/router";

const appRoutes : Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'vue-message', component: VueMessagesComponent},
  {path: 'authentification', component: AuthentificationComponent},
  {path: '', redirectTo: '/accueil', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonnesActivesComponent,
    HistoMessageComponent,
    NouveauMessageComponent,
    NavigationComponent,
    AccueilComponent,
    VueMessagesComponent,
    AuthentificationComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
  providers: [/*{provide:LOCALE_ID,useValue:'fr'}*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
