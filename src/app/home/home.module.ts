import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { HomePage } from "./home.page";

import { HomePageRoutingModule } from "./home-routing.module";
import { TranslateModule } from "@ngx-translate/core";
import { SelectorComponent } from "../components/selector/selector.component";
import { MaterialModule } from "../material.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    HomePageRoutingModule,
    MaterialModule,
  ],
  declarations: [HomePage, SelectorComponent],
  exports: [SelectorComponent],
})
export class HomePageModule {}
