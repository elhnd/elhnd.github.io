import {Component, OnInit, inject} from '@angular/core';
import {AsyncPipe, JsonPipe} from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, HttpClientModule, RouterModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  name = 'Angular';

  httpClient = inject(HttpClient);

  ngOnInit(): void {
      this.httpClient.get('/models').subscribe((date)=>{console.log(date);
      })
  }

}
