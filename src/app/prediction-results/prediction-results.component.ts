import { Component } from '@angular/core';
import { ImageService } from '../shared/image.service';
import { Prediction } from '../shared/prediction.model';

@Component({
  selector: 'app-prediction-results',
  templateUrl: './prediction-results.component.html',
})
export class PredictionResultsComponent {
  predictions: Prediction[] = [];

  constructor(private imageService: ImageService) {
    const formData = new FormData();
    // Add your form data here, for example:
    // formData.append('file', file);
    this.imageService.getPredictions(formData).subscribe((predictions) => {
      this.predictions = predictions;
    });
  }
}
