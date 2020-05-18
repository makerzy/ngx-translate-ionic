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
  constructor(public translate: TranslateService) {}
}
