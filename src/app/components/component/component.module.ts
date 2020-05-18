import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SelectorComponent } from "../selector/selector.component";
import { MaterialModule } from "../../material.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [SelectorComponent],
  imports: [CommonModule, MaterialModule, TranslateModule],
  exports: [SelectorComponent],
})
export class ComponentModule {}
