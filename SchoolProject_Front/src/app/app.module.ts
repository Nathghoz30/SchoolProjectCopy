import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* import { InscriptionComponent } from './inscription/inscription.component';
import { AccueilComponent } from './accueil/accueil.component'; */
import { ConnexionComponent } from './connexion/connexion.component';
/* import { CreerArticleComponent } from './creer-article/creer-article.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { VoirProfilComponent } from './voir-profil/voir-profil.component';
import { MesArticlesComponent } from './mes-articles/mes-articles.component';
import { MonArticleDetailComponent } from './mon-article-detail/mon-article-detail.component'; */
import { AuthService } from './auth.service';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { ContactComponent } from './contact/contact.component';
import { VoirProfilComponent } from './voir-profil/voir-profil.component';
import { ModifProfilComponent } from './modif-profil/modif-profil.component';
import { MessagesComponent } from './messages/messages.component';
import { CreerArticleComponent } from './creer-article/creer-article.component';
import { MesArticlesComponent } from './mes-articles/mes-articles.component';
import { EnVenteComponent } from './en-vente/en-vente.component';
import { MonArticleDetailComponent } from './mon-article-detail/mon-article-detail.component';
import { ModifArticleComponent } from './modif-article/modif-article.component';
import { AchatArticleComponent } from './achat-article/achat-article.component';
import { DecoComponent } from './deco/deco.component';
import { ContactVendeurComponent } from './contact-vendeur/contact-vendeur.component';
import { InscriptionComponent } from './inscription/inscription.component';
/* import { MessagesComponent } from './messages/messages.component';
import { DecoComponent } from './deco/deco.component';
import { ModifProfilComponent } from './modif-profil/modif-profil.component';
import { ModifArticleComponent } from './modif-article/modif-article.component';
import { ContactVendeurComponent } from './contact-vendeur/contact-vendeur.component';
import { RechercheArticleComponent } from './recherche-article/recherche-article.component';
import { EnVenteComponent } from './en-vente/en-vente.component';
import { AchatArticleComponent } from './achat-article/achat-article.component';
import { PaiementArticleComponent } from './paiement-article/paiement-article.component';
import { MesCartesComponent } from './mes-cartes/mes-cartes.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { ContactComponent } from './contact/contact.component';
import { AjoutCarteComponent } from './ajout-carte/ajout-carte.component'; */

@NgModule({
  declarations: [
    AppComponent,
    /* InscriptionComponent,
    AccueilComponent, */
    ConnexionComponent,
    AccueilComponent,
    DetailArticleComponent,
    ContactComponent,
    VoirProfilComponent,
    ModifProfilComponent,
    MessagesComponent,
    CreerArticleComponent,
    MesArticlesComponent,
    EnVenteComponent,
    MonArticleDetailComponent,
    ModifArticleComponent,
    AchatArticleComponent,
    DecoComponent,
    ContactVendeurComponent,
    InscriptionComponent,
    /*
    CreerArticleComponent,
    DetailArticleComponent,
    VoirProfilComponent,
    MesArticlesComponent,
    MonArticleDetailComponent,
    MessagesComponent,
    DecoComponent,
    ModifProfilComponent,
    ModifArticleComponent,
    ContactVendeurComponent,
    RechercheArticleComponent,
    EnVenteComponent,
    AchatArticleComponent,
    PaiementArticleComponent,
    MesCartesComponent,
    MentionsLegalesComponent,
    ContactComponent,
    AjoutCarteComponent */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
