import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { HomePage } from "./home.page";

import { HomePageRoutingModule } from "./home-routing.module";
import { TranslateModule } from "@ngx-translate/core";

import { MaterialModule } from "../material.module";
import { ComponentModule } from "../components/component/component.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    HomePageRoutingModule,
    MaterialModule,
    ComponentModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
