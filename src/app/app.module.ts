import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './composants/utilisateur/utilisateur.component';
import { CvContainerComponent } from './cvTheque/cv-container/cv-container.component';
import { CvListeComponent } from './cvTheque/cv-liste/cv-liste.component';
import { CvDetailComponent } from './cvTheque/cv-detail/cv-detail.component';
import { EmbaucheComponent } from './cvTheque/embauche/embauche.component';
import { ROUTING } from './app.routing';
import { HeaderComponent } from './cvTheque/header/header.component';
import { ErrorComponent } from './error/error.component';
import { AddCvComponent } from './cvTheque/add-cv/add-cv.component';
import { LoginComponent } from './login/login.component';
import { ObservableComponent } from './observable/observable.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './cvTheque/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    CvContainerComponent,
    CvListeComponent,
    CvDetailComponent,
    EmbaucheComponent,
    HeaderComponent,
    ErrorComponent,
    AddCvComponent,
    LoginComponent,
    ObservableComponent,
    HttpComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
