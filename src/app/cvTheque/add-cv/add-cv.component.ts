import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CvService } from '../cv.service';
import { HttpXsrfTokenExtractor} from '@angular/common/http';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
})
  
export class AddCvComponent implements OnInit {
  errorMessage = '';
  token = '';
  link = "http://127.0.0.1:8000/"; //old code, utiliser environement
  constructor(
    private cvService: CvService,
    private router: Router,
    private tokenService: HttpXsrfTokenExtractor
    ) { }

  ngOnInit(): void { 
    this.token = this.tokenService.getToken();
  }

  addPersonne() {
    //const token = this.tokenService.getToken();
    document.location.href = this.link + 'movies/create';
  }
}
