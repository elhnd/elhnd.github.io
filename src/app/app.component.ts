import {Component, OnInit, inject} from '@angular/core';
import {AsyncPipe, JsonPipe} from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, HttpClientModule],
  template: `
    <h1>Hello from {{ name }}!</h1>
  `,
})
export class AppComponent implements OnInit{
  name = 'Angular';

  httpClient = inject(HttpClient);

  ngOnInit(): void {
      this.httpClient.get('/models').subscribe((date)=>{console.log(date);
      })
  }

}
