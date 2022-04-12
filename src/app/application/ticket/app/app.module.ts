import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponentTicket }   from './app.component';
import { HttpClientModule }   from '@angular/common/http';
import { AppTicket } from './app.ticket';
import { FormsModule }   from '@angular/forms';

@NgModule({
    imports:      [ BrowserModule, HttpClientModule, FormsModule ],
    declarations: [ AppComponentTicket, AppTicket ],
    exports:    [ AppComponentTicket ]
})
export class AppModuleTicket { }