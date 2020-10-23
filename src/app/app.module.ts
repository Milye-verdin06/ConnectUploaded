import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    AppComponent,

    NopagefoundComponent],
  imports: [BrowserModule, AppRoutingModule, PagesModule, AuthModule,ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
