import { Component } from '@angular/core';
import { App } from '@capacitor/app';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

// declare let cordova: any;
var inAppBrowserRef;


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private inBrowser: InAppBrowser) {
    inAppBrowserRef = this.inBrowser.create('http://uat.gizmosmart.io/utkarsh/igzymobile/public/home', '_self', 'location=no,zoom=no');
    inAppBrowserRef.on('exit').subscribe(()=>{
      navigator['app'].exitApp();
    });
   }

  public openWebView(): void {
    console.log('runned openwebview');
  }

  public showHelp():void{
    
  }

}
