import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { app2Config } from './app2/app2.config';
import { AppComponent } from './app/app.component';
import { ProvaComponent } from './app/prova/prova.component';
import {DirettiveComponent} from './app/direttiveComponent/direttive.component';
import {Direttive2Component} from './app/direttive2Component/direttive2.component';
import {NgStyleComponent} from './app/ng-style/ng-style.component';
import {PassaggioVariabili} from './app/passaggioVariabili/passaggioVariabili.component';
import {PipeComponent} from './app/pipe/pipe-component';
import {ServiziComponent} from './app/serviziComponent/servizi-component';

import { App2Component } from './app2/app2-component';

 
/* bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(DirettiveComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(Direttive2Component, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(NgStyleComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(PassaggioVariabili, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(PipeComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(ServiziComponent, appConfig)
  .catch((err) => console.error(err));
*/

bootstrapApplication(App2Component, app2Config)
  .catch((err) => console.error(err));

  