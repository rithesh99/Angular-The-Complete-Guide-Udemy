import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.reducer';
import { AuthEffects } from './auth/store/auth.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ShoppingListModule,
    AuthModule,
    SharedModule,
    CoreModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([AuthEffects])
  ],
  bootstrap: [AppComponent],
  //NOTE: Angular version < 9
  // entryComponents: [
  //   AlertComponent
  // ]
})
export class AppModule {}
