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

import { FieldsetModule } from 'primeng/fieldset';
import { AboutComponent } from './about/about.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RomaComponent } from './roma/roma.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ReviewsComponent,
    RomaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GalleriaModule,
    CardModule,
    MegaMenuModule,
    SplitButtonModule,
    FieldsetModule



  ],
  providers: [
    PhotoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
