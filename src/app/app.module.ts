import { NgModule } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ResultComponent } from './result/result.component';
import { SearchComponent } from './result/search/search.component';
import { GifItemComponent } from './result/gif-item/gif-item.component';
import { PopUpComponent } from './result/gif-item/pop-up/pop-up.component';
import { PopUpCollectionComponent } from './my-collection/pop-up/pop-up-collection.component';
import { MyCollectionComponent } from './my-collection/my-collection.component';
import { UploadComponent } from './upload/upload.component';

import { SearchHttpService } from './shared/services/search-http.service';
import { LocalStorageService } from './shared/services/local-storage.service';
import { AuthService } from './shared/services/auth.service';
import { AuthGuard } from './shared/services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    SearchComponent,
    GifItemComponent,
    PopUpComponent,
    MyCollectionComponent,
    PopUpCollectionComponent,
    UploadComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    SearchHttpService,
    LocalStorageService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
