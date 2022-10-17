import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { BongdaComponent } from './bongda/bongda.component';
import { PhukienBDComponent } from './phukien-bd/phukien-bd.component';
import { PhukienpageComponent } from './phukienpage/phukienpage.component';
import { BongroComponent } from './bongro/bongro.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { BannerComponent } from './banner/banner.component';
import { ShoepageComponent } from './shoepage/shoepage.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { Shoppingcart1Component } from './shoppingcart1/shoppingcart1.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr');

const routes: Routes = [
  {path: '' , component:TrangchuComponent},
  {path: 'Trang chủ' , component:TrangchuComponent},
  {path: 'Bóng đá' , component:BongdaComponent},
  {path: 'Phụ kiện' , component:PhukienBDComponent},
  {path: 'Bóng rổ' , component:BongroComponent},
  {path: 'AboutUs' , component:AboutusComponent},
  {path: 'Contact' , component:ContactComponent},
  {path: 'Đăng nhập' , component:DangnhapComponent},
  {path: 'Banner' , component:BannerComponent},
  {path: 'search/:searchTerm',component:BongdaComponent },
  {path: 'search1/:searchTerm1',component:PhukienBDComponent },
  {path: 'tag/:tag',component:BongdaComponent },
  {path: 'shoe/:id',component:ShoepageComponent},
  {path: 'phukien/:id',component:PhukienpageComponent},
  {path: 'shopping-cart',component:ShoppingCartComponent},
  {path: 'shopping-cart1',component:Shoppingcart1Component},
  {path: 'not-found',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
