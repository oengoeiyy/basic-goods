import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  user : any;
  constructor(private http: HttpClient) {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      this.user = JSON.parse(currentUser);
    }
    //console.log('user',this.user)
  }



  login(username: string, password: string) {
    const loginData = {
      username: username,
      password: password
    };

    this.http.post('/api/auth/login', loginData).subscribe(
      (response) => {
        localStorage.setItem('currentUser', JSON.stringify(response));
        console.log(response);
        // Redirect the user to the dashboard or the page they were trying to access before logging in.
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
