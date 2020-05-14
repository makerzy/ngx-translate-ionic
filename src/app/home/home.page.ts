import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Plugins } from "@capacitor/core";
const { Device } = Plugins;

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
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

  country = [
    { name: "US", value: "en", img: "assets/imgs/usImg.png" },
    { name: "France", value: "fr", img: "assets/imgs/frImg.png" },
    { name: "Spain", value: "en", img: "assets/imgs/esImg.png" },
  ];
  loadFlags() {
    setTimeout(() => {
      let radios = document.getElementsByClassName("alert-radio-label");
      for (let i = 0; i < radios.length; i++) {
        let elem = radios[i];
        elem.innerHTML = elem.innerHTML.concat(
          `<img style="width: 30px;height:16px;" src="${this.country[i].img}
            "/> 
          ${this.country[i].value.toUpperCase()}  
          ${this.country[i].name} `
        );
      }
    }, 200);
  }
}
