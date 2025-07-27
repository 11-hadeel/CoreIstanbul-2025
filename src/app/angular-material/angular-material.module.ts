import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { AngularMaterialRoutingModule } from "./angular-material-routing.module"
import { SharedModule } from "../shared/shared.module"
import { FormsModule } from "@angular/forms"

// Import all components
import { AngularMaterialLayoutComponent } from "./angular-material-layout/angular-material-layout.component"

@NgModule({
  declarations: [
    AngularMaterialLayoutComponent,

  ],
  imports: [CommonModule, AngularMaterialRoutingModule, SharedModule, FormsModule],
})
export class AngularMaterialModule {}
