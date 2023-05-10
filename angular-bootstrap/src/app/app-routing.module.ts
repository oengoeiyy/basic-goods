import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'info', component: InfoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
