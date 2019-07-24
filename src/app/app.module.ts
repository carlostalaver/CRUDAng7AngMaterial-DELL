import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeterialModule } from './meterial/meterial.module';
import { ListCustomerComponent } from './components/list-customer/list-customer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//#region Importaciones para trabajar con fireBase
import { environment } from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
//#endregion

@NgModule({
  declarations: [
    AppComponent,
    ListCustomerComponent,
    ToolbarComponent,
    EditCustomerComponent
  ],
  imports: [
    BrowserModule,
    MeterialModule,
    BrowserAnimationsModule,
    AngularFirestoreModule, /* AngularFireBase*/
    AngularFireModule.initializeApp(environment.configFireBase) /* Le indico que tome la configuracion del FireBase */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
