import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TextMaskModule } from 'angular2-text-mask';



//App stuff
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { ProductSearchComponent } from './views/product-search/product-search.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductInfoCardComponent } from './components/product-info-card/product-info-card.component';
import { CartService } from './services/cart.service';
import { AppSettingsService } from './services/app-settings.service';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { HomeComponent } from './views/home/home.component';
import { LocationComponent } from './views/location/location.component';
import { UniversalDeliveryComponent } from './views/universal-delivery/universal-delivery.component';
import { FaqComponent } from './views/faq/faq.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { CartTableComponent } from './components/cart-table/cart-table.component';
import { MaxCharLengthPipe } from './pipes/max-char-length.pipe';
import { WeClosedComponent } from './views/we-closed/we-closed.component';
import { WeClosedGuard } from './guards/we-closed.guard';
import { ComingSoonComponent } from './views/coming-soon/coming-soon.component';
import { ReviewComponent } from './views/review/review.component';

const appRoutes: Routes = [
  //  { path: 'login', component: LoginComponent },
  { path: 'checkout', component: CheckoutComponent,  canActivate: [WeClosedGuard]  },
  { path: 'home', component: HomeComponent, canActivate: [WeClosedGuard] },
  { path: 'location/:id', component: LocationComponent,  canActivate: [WeClosedGuard] },
  { path: 'universal-delivery', component: UniversalDeliveryComponent,  canActivate: [WeClosedGuard] },
  { path: 'about', component: AboutUsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'closed', component: WeClosedComponent },
  { path: 'coming-soon', component: ComingSoonComponent },
  { path: 'review', component: ReviewComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductSearchComponent,
    CartComponent,
    ProductInfoCardComponent,
    CheckoutComponent,
    HomeComponent,
    LocationComponent,
    UniversalDeliveryComponent,
    FaqComponent,
    AboutUsComponent,
    CartTableComponent,
    MaxCharLengthPipe,
    WeClosedComponent,
    ComingSoonComponent,
    ReviewComponent,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    TextMaskModule
  ],
  providers: [CartService, AppSettingsService, WeClosedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
