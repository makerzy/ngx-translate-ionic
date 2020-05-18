import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Plugins } from "@capacitor/core";
const { Device } = Plugins;

@Injectable({
  providedIn: "root",
})
export class I18nService {
  browserLang;
  constructor(public translate: TranslateService) {
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
}
