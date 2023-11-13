import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuNavComponent } from './header/menu-nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { GalleriaModule } from 'primeng/galleria';
import { CardModule } from 'primeng/card';
import { PhotoService } from './servicios/photo-servic.service';
import { MegaMenuModule } from 'primeng/megamenu';
import { SplitButtonModule } from 'primeng/splitbutton';
import { HttpClientModule } from "@angular/common/http";
import { FieldsetModule } from 'primeng/fieldset';
import { AboutComponent } from './about/about.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RomaComponent } from './roma/roma.component';
import {DialogModule} from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginServiceService } from './login-service.service';



@NgModule({
  declarations: [
    AppComponent,
    MenuNavComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ReviewsComponent,
    RomaComponent,
    LoginComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GalleriaModule,
    CardModule,
    MegaMenuModule,
    SplitButtonModule,
    FieldsetModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    HttpClientModule



  ],
  providers: [
    PhotoService,
    LoginServiceService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
