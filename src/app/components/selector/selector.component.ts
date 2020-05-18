import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Spanish, USA, French } from "../../../assets/country.json";
import { Plugins } from "@capacitor/core";
const { Device } = Plugins;

@Component({
  selector: "app-selector",
  templateUrl: "./selector.component.html",
  styleUrls: ["./selector.component.scss"],
})
export class SelectorComponent implements OnInit {
  constructor(public translate: TranslateService) {}

  ngOnInit() {} //Follow add language array in the app.component.ts
  country = [USA, French, Spanish];
  loadFlags() {
    setTimeout(() => {
      let radios = document.getElementsByClassName("mat-option");
      for (let i = 0; i < radios.length; i++) {
        let elem = radios[i];
        //set empty value
        elem.innerHTML = "";
        //add new value
        elem.innerHTML = elem.innerHTML.concat(
          `<img style="width: 30px;height:16px;" src="${this.country[i].img}
            "/> &nbsp;&nbsp; ${this.country[i].value.toUpperCase()}&nbsp;
          ${this.country[i].name} `
        );
      }
    }, 200);
  }
}
