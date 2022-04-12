import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AppHome } from './home/app.component'
import { AppStudy } from './studying/app.component'
import { Header } from './components/header'
import { Footer } from './components/footer'

import { AppModulePhotoList } from './application/photo-list/app/app.module'
import { AppComponentPhotoList } from './application/photo-list/app/app.component'
import { AppComponentTicket } from './application/ticket/app/app.component'
import { AppModuleTicket } from './application/ticket/app/app.module'

const routes: Routes = [
  { path: '', component: AppHome},
  { path: 'studying', component: AppStudy},
  { path: 'studying/photo-list', component: AppComponentPhotoList},
  { path: 'studying/ticket', component: AppComponentTicket}
];


@NgModule({
  declarations: [
    AppComponent, 
    AppHome, AppStudy,
    Header, Footer
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppModulePhotoList,
    AppModuleTicket
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
