import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { HomeComponent } from './home/home/home.component';
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
import { ErrorComponent } from './error/error/error.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfilComponent,
    TableComponent,
    ResetpassComponent,
    UpdateuserinfoComponent,
    PermissionsComponent,
    AddcurrencyComponent,
    AddattachmentsComponent,
    AddprojectComponent,
    AddcostComponent,
    UpdateprojectComponent,
    UpdatecurrencyComponent,
    ErrorComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
