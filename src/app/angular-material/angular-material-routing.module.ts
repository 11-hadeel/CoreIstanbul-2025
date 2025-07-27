import { NgModule } from "@angular/core"
import { RouterModule, type Routes } from "@angular/router"
import { AngularMaterialLayoutComponent } from "./angular-material-layout/angular-material-layout.component"
import { TypographyComponent } from "./typography/typography.component"
import { ButtonsComponent } from "./buttons/buttons.component"
import { ButtonTogglesComponent } from "./button-toggles/button-toggles.component"
import { IconsComponent } from "./icons/icons.component"
import { BadgesComponent } from "./badges/badges.component"
import { MenusComponent } from "./menus/menus.component"
import { PanelsComponent } from "./panels/panels.component"
import { TabsComponent } from "./tabs/tabs.component"
import { StepperComponent } from "./stepper/stepper.component"
import { DialogsComponent } from "./dialogs/dialogs.component"

const routes: Routes = [
  {
    path: "",
    component: AngularMaterialLayoutComponent,
    children: [
      
      { path: "typography", component: TypographyComponent },
      { path: "buttons", component: ButtonsComponent },
      { path: "button-toggles", component: ButtonTogglesComponent },
      { path: "icons", component: IconsComponent },
      { path: "badges", component: BadgesComponent },
      { path: "menus", component: MenusComponent },
      { path: "panels", component: PanelsComponent },
      { path: "tabs", component: TabsComponent },
      { path: "stepper", component: StepperComponent },
      { path: "dialogs", component: DialogsComponent },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularMaterialRoutingModule {}
