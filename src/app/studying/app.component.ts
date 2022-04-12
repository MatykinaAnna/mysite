import { Component } from '@angular/core';

@Component({
  selector: 'app-study',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppStudy {
    public reason_show: boolean

    constructor(){
      this.reason_show = false
    }

    go(href: string){
        window.open(location.href + '/' + href)
    }
    goToHref(href: string){
      window.open(href)
    }
    toReasonShow(){
      this.reason_show = !this.reason_show
    }
}
