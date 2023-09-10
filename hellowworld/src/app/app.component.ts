import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  msg:string="hello";
  openaleart(){
   
  //  let a=10;
  //  let b=20;
  //  let c=a+b;
  //  alert(c);
   this.msg="hello9"
  }
}
