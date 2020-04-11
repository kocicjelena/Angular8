import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
import { GoogleComponent } from './google.component';
import { BingComponent } from './bing.component';
import { MyserviceService } from './myservice.service';
import { HelpComponent } from './help.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleComponent,
    BingComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
         {
            path: 'Google',
            component: GoogleComponent
         },
         {
            path: 'Bing',
            component: BingComponent
         }
      ])
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
