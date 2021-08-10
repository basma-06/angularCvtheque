import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private http: HttpClient) { }

  //Consommation d'une API REST avec le service HttpClient d'Angular et la methode GET
  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (response) => {
        //en cas d'envoi de flux
      },
      (error) => {

      },
      () => {
        //cas complete
      }
    )
  }

}
