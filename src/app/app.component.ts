import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { TranslateService } from "@ngx-translate/core";
import { Plugins } from "@capacitor/core";
const { Device } = Plugins;

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  browserLang;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public translate: TranslateService
  ) {
    this.initializeApp();
    translate.addLangs(["en", "fr", "es"]);
    translate.setDefaultLang("en");
    Device.getLanguageCode()
      .then((lang) => {
        //returns Object
        console.log(lang);
        this.browserLang = lang.value.split("-")[0];
      })
      .then(() =>
        translate.use(
          this.browserLang && this.browserLang.match(/en|fr|es/)
            ? this.browserLang
            : "en"
        )
      );
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
