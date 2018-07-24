import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';

import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {AuthGuard} from './auth-guard.service';

import { AppComponent } from './app.component';
import { AcessoComponent } from './acesso/acesso.component';
import { BannerComponent } from './acesso/banner/banner.component';
import { LoginComponent } from './acesso/login/login.component';
import { CadastroComponent } from './acesso/cadastro/cadastro.component';
import { Auth } from './auth.service';
import { HomeComponent } from './home/home.component';
import { PublicacoesComponent } from './home/publicacoes/publicacoes.component';
import { NewPublicacaoComponent } from './home/new-publicacao/new-publicacao.component';
import {Bd} from './bd.service';

@NgModule({
  declarations: [
    AppComponent,
    AcessoComponent,
    BannerComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    PublicacoesComponent,
    NewPublicacaoComponent,
  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule.forRoot(ROUTES)
  ],
  providers: [Auth, AuthGuard, Bd],
  bootstrap: [AppComponent]
})
export class AppModule { }
