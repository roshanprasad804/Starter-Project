import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  formData = {
    username: '',
    email: '',
    password: '',
    agree: ''
  };

  onSubmit() {
    console.log('Form submitted with data:', this.formData);
    // Add logic here to send the form data to your backend for processing
  }
}
