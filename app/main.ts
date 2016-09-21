import { Component, NgModule } from '@angular/core'; 

import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';



@Component({
  selector: 'ng-app',
  templateUrl: './app/main.html',
  styleUrls: ['./app/main.css']
})

class NgApp { 
  greet: string;
  
  constructor() {
    greet = "Он работает!";
  }
}



@NgModule({
  declarations: [ NgApp ],
  imports: [BrowserModule],
  bootstrap: [ NgApp ]
})
class NgAppModule { }

platformBrowserDynamic().bootstrapModule(NgAppModule);