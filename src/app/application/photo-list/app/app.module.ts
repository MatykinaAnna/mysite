import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponentPhotoList }   from './app.component';
import { AppModalWindow } from './app.modalWindow'
import { HttpClientModule }   from '@angular/common/http';

@NgModule({
    imports:      [ BrowserModule, HttpClientModule, FormsModule ],
    declarations: [ AppComponentPhotoList, AppModalWindow ],
    exports:    [ AppComponentPhotoList ]
})
export class AppModulePhotoList { }