import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Layout } from './components/layout/layout';
import { Navbar } from './components/layout/navbar/navbar';
import { Main } from './components/layout/main/main';
import { Footer } from './components/layout/footer/footer';
import {provideHttpClient, withFetch} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {provideSweetAlert2} from '@sweetalert2/ngx-sweetalert2';
import {RouterModule} from '@angular/router';
import { Home } from './components/views/home/home';
import { Games } from './components/views/games/games';
import { Consoles } from './components/views/consoles/consoles';
import { NotFound } from './components/views/not-found/not-found';

@NgModule({
  declarations: [
    App,
    Layout,
    Navbar,
    Main,
    Footer,
    Home,
    Games,
    Consoles,
    NotFound
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),
    RouterModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideSweetAlert2({
      dismissOnDestroy: true
    })
  ],
  bootstrap: [App]
})
export class AppModule { }
