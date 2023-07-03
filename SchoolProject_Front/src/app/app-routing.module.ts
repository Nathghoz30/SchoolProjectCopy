import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CreerArticleComponent } from './creer-article/creer-article.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { VoirProfilComponent } from './voir-profil/voir-profil.component';
import { MesArticlesComponent } from './mes-articles/mes-articles.component';
import { MonArticleDetailComponent } from './mon-article-detail/mon-article-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DecoComponent } from './deco/deco.component';
import { ModifProfilComponent } from './modif-profil/modif-profil.component';
import { ModifArticleComponent } from './modif-article/modif-article.component';
import { ContactVendeurComponent } from './contact-vendeur/contact-vendeur.component';
// import { RechercheArticleComponent } from './recherche-article/recherche-article.component';
import { EnVenteComponent } from './en-vente/en-vente.component';
import { AchatArticleComponent } from './achat-article/achat-article.component';
// import { PaiementArticleComponent } from './paiement-article/paiement-article.component';
// import { MesCartesComponent } from './mes-cartes/mes-cartes.component';
// import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';*/
import { ContactComponent } from './contact/contact.component';
//import { AjoutCarteComponent } from './ajout-carte/ajout-carte.component'; 


const routes: Routes = [
{ path: 'inscription', component: InscriptionComponent},
{ path: 'connexion', component: ConnexionComponent},
{ path: 'accueil', component: AccueilComponent},
{ path: 'creerArticle', component: CreerArticleComponent},
{ path: 'DetailArticle', component: DetailArticleComponent},
{ path: 'VoirProfil', component: VoirProfilComponent},
{ path: 'MesArticles', component: MesArticlesComponent},
{ path: 'MonArticleDetail', component: MonArticleDetailComponent},
{ path: 'Messages', component: MessagesComponent},
{ path: 'Deco', component: DecoComponent},
{ path: 'ModifProfil', component: ModifProfilComponent},
{ path: 'ModifArticle', component: ModifArticleComponent},
{ path: 'ContactVendeur', component: ContactVendeurComponent},
// { path: 'RechercheArticle', component: RechercheArticleComponent},
{ path: 'EnVente', component: EnVenteComponent},
{ path: 'AchatArticle', component: AchatArticleComponent},
// { path: 'PaiementArticle', component: PaiementArticleComponent},
// { path: 'MesCartes', component: MesCartesComponent},
// { path: 'MentionsLegales', component: MentionsLegalesComponent},
{ path: 'Contact', component: ContactComponent},
//{ path: 'AjoutCarte', component: AjoutCarteComponent}, 








{ path: '', redirectTo: 'connexion', pathMatch: 'full' },
{ path: '**', redirectTo: 'connexion' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
