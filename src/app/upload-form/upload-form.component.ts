import { Component } from '@angular/core';
import { ImageService } from '../shared/image.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Prediction } from '../shared/ prediction.model';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
})
export class UploadFormComponent {
  selectedFile: File | null = null;
  preprocessingMessage: string = '';
  topPredictions: Prediction[] = [];

  constructor(private imageService: ImageService, private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadImage() {
    const fileInput = document.getElementById('image') as HTMLInputElement;
    fileInput.click();
  }

  onSubmit() {
    if (!this.selectedFile) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    // Display preprocessing message
    this.preprocessingMessage = 'Preprocessing the image...';

    const url = `${environment.apiUrl}/predict`; // Update the URL here

    this.http.post<Prediction[]>(url, formData).subscribe(
      (response: Prediction[]) => {
        console.log(response);
        // Clear preprocessing message
        this.preprocessingMessage = '';

        // Store top predictions
        this.topPredictions = response;
      },
      (error: HttpErrorResponse) => {
        console.error(error);
        // Clear preprocessing message
        this.preprocessingMessage = '';

        if (error.error instanceof Error) {
          // Client-side error
          console.error('An error occurred:', error.error.message);
        } else {
          // Backend error
          console.error(
            `Backend returned code ${error.status}, body was: ${error.error}`
          );
        }
      }
    );
  }
}
