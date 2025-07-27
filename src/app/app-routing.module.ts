import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

import { BootstrapComponent } from './bootstrap/bootstrap.component';
const routes: Routes = [
     {
    path: "user/:id",
    component: UserDetailsComponent
  },
  {
  path: "users",
  component: UserListComponent
},
  {
    path: "angular-material",
    loadChildren: () => import("./angular-material/angular-material.module").then((m) => m.AngularMaterialModule),
  },
  {
    path: "",
    redirectTo: "/",
    pathMatch: "full",
  },
  {
    path: "bootstrap",
    component: BootstrapComponent,    

  },
  
  {
    path: "**",
    redirectTo: "/bootstrap"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
