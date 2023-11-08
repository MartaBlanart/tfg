import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AboutComponent } from './about/about.component';
import { RomaComponent } from './roma/roma.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'reseñas', component:ReviewsComponent},
  {path:'sobre-mi', component:AboutComponent},
  {path:'roma', component:RomaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
