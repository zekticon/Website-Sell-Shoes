import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlModule } from 'ngx-owl-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { BongdaComponent } from './bongda/bongda.component';
import { BongroComponent } from './bongro/bongro.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoepageComponent } from './shoepage/shoepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Search1Component } from './search1/search1.component';
import { PhukienBDComponent } from './phukien-bd/phukien-bd.component';
import { PhukienpageComponent } from './phukienpage/phukienpage.component';
import { Shoppingcart1Component } from './shoppingcart1/shoppingcart1.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BongdaComponent,
    BongroComponent,
    DangnhapComponent,
    TrangchuComponent,
    AboutusComponent,
    ContactComponent,
    FooterComponent,
    BannerComponent,
    SearchComponent,
    ShoppingCartComponent,
    ShoepageComponent,
    NotFoundComponent,
    Search1Component,
    PhukienBDComponent,
    PhukienpageComponent,
    Shoppingcart1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
    OwlModule,
    FormsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
