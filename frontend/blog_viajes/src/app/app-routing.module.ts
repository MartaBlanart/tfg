import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AboutComponent } from './about/about.component';
import { RomaComponent } from './roma/roma.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ParisComponent } from './paris/paris.component';
import { MadridComponent } from './madrid/madrid.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component:HomeComponent},
  {path:'footer', component:FooterComponent},
  {path:'reseñas', component:ReviewsComponent},
  {path:'sobre-mi', component:AboutComponent},
  {path:'roma', component:RomaComponent},
  {path:'login', component:LoginComponent},
  {path:'paris', component:ParisComponent},
  {path:'madrid', component:MadridComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
