import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private router: Router) {}

  formData = {
    username: '',
    email: '',
    password: '',
    agree: ''
  };

  redirectToLogin() {
    // Use the Angular router to navigate to the login component
    this.router.navigate(['/login']); // Replace 'login' with the actual path of your login component
    console.log("log check");
  }

  onSubmit() {
    console.log('Form submitted with data:', this.formData);
    // Add logic here to send the form data to your backend for processing
  }
}
