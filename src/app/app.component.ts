import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-vercel';

  constructor(private http: HttpClient) {}


  testApi() {
    this.http.get('api/handler').subscribe(data => {
      console.log(data);
    });
  }
}
