import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-ui-github-actions';
  data = [];

  apiUrl = 'weatherforecast';

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('assets/config.json').subscribe((data: any) => {
      this.httpClient.get(`${data.apiRootUrl}/${this.apiUrl}`).subscribe((result: any[]) => {
        this.data = result;
      });
    });
  }
}
