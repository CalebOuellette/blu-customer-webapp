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
import { CheckoutComponent } from './views/checkout/checkout.component';
import { HomeComponent } from './views/home/home.component';
import { LocationComponent } from './views/location/location.component';
import { UniversalDeliveryComponent } from './views/universal-delivery/universal-delivery.component';


const appRoutes: Routes = [
  //  { path: 'login', component: LoginComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'location/:id', component: LocationComponent},
  { path: 'universal-delivery', component: UniversalDeliveryComponent},
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
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
