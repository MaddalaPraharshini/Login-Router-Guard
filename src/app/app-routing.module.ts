import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AllEmployeeComponent } from './employee/all-employee/all-employee.component';
import { CreateComponent } from './employee/create/create.component';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateComponent } from './employee/update/update.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '',redirectTo:'login',pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  {
    path: 'employee', component: EmployeeComponent, canActivate:[AuthGuard],
    children: [
      { path: 'add', component: CreateComponent },
      { path: 'all', component: AllEmployeeComponent },
      { path: 'update', component: UpdateComponent }]
  },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
