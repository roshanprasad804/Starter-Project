import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) {}

  formData = {
    username: '',
    email: '',
    password: '',
    agree: ''
  };

  redirectToSignUp(event: Event) {
    // Prevent the default behavior of the anchor tag
    event.preventDefault();
  
    // Use the Angular router to navigate to the login component
    this.router.navigate(['/signup']); // Replace 'login' with the actual path of your login component
    console.log("log check");
  }

  onSubmit() {
    console.log('Form submitted with data:', this.formData);
    // Add logic here to send the form data to your backend for processing
  }

}
