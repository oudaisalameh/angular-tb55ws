import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { PredictionResultsComponent } from './prediction-results/prediction-results.component';

@NgModule({
  declarations: [AppComponent, UploadFormComponent, PredictionResultsComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
