import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicSpaceComponent } from './components/public-space/public-space.component';
import { RestrictedSpaceComponent } from './components/restricted-space/restricted-space.component';
import { AuthGuard } from './keycloakauth.guard';

const routes: Routes = [
  { path: '*', redirectTo: '/' },
  { path: 'public', component: PublicSpaceComponent },
  { path: 'restricted', component: RestrictedSpaceComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
