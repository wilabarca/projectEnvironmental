import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path:"", redirectTo: "home", pathMatch:"full" },
  { path: 'home', component: HomeComponent },
  { path: 'solutions', component: SolutionsComponent },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
