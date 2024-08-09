import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ErrorComponent } from './error/error/error.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { ProfilComponent } from './profile/profil/profil.component';
import { TableComponent } from './table/table/table.component';
import { ResetpassComponent } from './resetpass/resetpass/resetpass.component';
import { UpdateuserinfoComponent } from './updateuserinfo/updateuserinfo/updateuserinfo.component';
import { PermissionsComponent } from './permissions/permissions/permissions.component';
import { AddcurrencyComponent } from './addcurrency/addcurrency/addcurrency.component';
import { AddattachmentsComponent } from './addattachments/addattachments/addattachments.component';
import { AddprojectComponent } from './addproject/addproject/addproject.component';
import { AddcostComponent } from './addcost/addcost/addcost.component';
import { UpdateprojectComponent } from './updateproject/updateproject/updateproject.component';
import { UpdatecurrencyComponent } from './updatecurrency/updatecurrency/updatecurrency.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'profile',component:ProfilComponent},
  {path:'table',component:TableComponent},
  {path:'resetpassword',component:ResetpassComponent},
  {path:'updateuserinfo',component:UpdateuserinfoComponent},
  {path:'permissions',component:PermissionsComponent},
  {path:'addcurrency',component:AddcurrencyComponent},
  {path:'addattachments',component:AddattachmentsComponent},
  {path:'addproject',component:AddprojectComponent},
  {path:'addcost',component:AddcostComponent},
  {path:'updateproject',component:UpdateprojectComponent},
  {path:'updatecurrency',component:UpdatecurrencyComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
