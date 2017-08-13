import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { ProductSearchComponent } from './views/product-search/product-search.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductInfoCardComponent } from './components/product-info-card/product-info-card.component';
import { CartService } from './services/cart.service';
import { CheckoutComponent } from './views/checkout/checkout.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'checkout', component: CheckoutComponent},
  {path: 'home', component: ProductSearchComponent},
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
//  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductSearchComponent,
    CartComponent,
    ProductInfoCardComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
