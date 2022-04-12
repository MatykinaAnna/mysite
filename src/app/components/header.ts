import { Component } from '@angular/core';

@Component({
  selector: 'header',
  template: `
      <div class="container">
          <div class="logo">
              <button (click)='goToHome()'></button>
          </div>
          <div class="menu">
              <div class='s1'></div>
              <div class='s2'></div>
              <div class='s3'></div>
              <div class='s4'></div>
          </div>
      </div>
  `,
  styles: [`
  button{
      background-color: none;
      border: none 
  }
  .container{
      display: flex;
      justify-content: space-between; 
      align-items: flex-end;
  }
  .logo>button{
    background: url('../../favicon.svg');
    width: 62px;
    height: 68px; 
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .menu{
      padding-bottom: 12px;
      display: none
  }
  .menu>div{
    height: 2px;
    width: 45px;
    background-color: #1E9980; 
    margin-bottom: 7px 
  }
  @media (max-width: 600px) {
    .logo>button{
        width: 32px;
        height: 38px;
    } 
    .menu>div{
        height: 1.5px;
        width: 25px;
        margin-bottom: 3px;
    }     
    }
  `]
})
export class Header {
    goToHome(){
        if (location.href != ''){
            location.href = ''
        }
    }
}
