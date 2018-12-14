
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public form = {
    email: null,
    password: null
  };

  constructor(private httpClient: HttpClient) { }

  ngOnInit() { }

  onSubmit() {
    console.log(this.form);
    this.httpClient.post('http://localhost:8000/api/auth/login', this.form)
      .subscribe((result) => {
        console.log(result);
      });
  }

}
