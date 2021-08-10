import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
})
  
export class AddCvComponent implements OnInit {
  errorMessage = '';
  constructor(
    private cvService: CvService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  /*
  * Inscription à l'Observable
  */
  addPersonne(formulaire: NgForm) {
    this.cvService.addPersonne(formulaire.value).subscribe(
      //si ajout de Personne avec succes redirection vers liste des cv
      (response) => {

      },
      (error) => {
        this.errorMessage = "Probleme de connexion au serveur";
        console.log(error);
      }
    );
    const link = ['cv'];
    this.cvService.addPersonne(formulaire.value);
    this.router.navigate(link);
    console.log(formulaire);
  }
}
