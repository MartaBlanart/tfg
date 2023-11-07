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
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GalleriaModule,
    CardModule,
    MenubarModule



  ],
  providers: [
    PhotoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
