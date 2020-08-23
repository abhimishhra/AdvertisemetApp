import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthGaurdService } from './authguard.guard';
const routes: Routes = [
  { path: '', component:HomeComponent,canActivate:[AuthGaurdService] },
  { path: 'admin', component: AdminComponent,canActivate:[AuthGaurdService]},
  { path: 'login', component:LoginComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
