import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    UiModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    HttpClientModule
  ],
  providers: [
    {provide:"baseUrl",useValue:"https://localhost:7164/api",multi:true} //NOTE: BaseUrl'i merkezi bir yerden değiştiriyoruz, deploy ettiğimizde burdan değiştirmek yeterli olucaktır, aksi takdirde her yerde tek tek değiştirmemiz gerekecek.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
