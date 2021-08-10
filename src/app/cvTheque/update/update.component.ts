import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/Model/Personne';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  personne: Personne = null;
  constructor(
    // pour recupérer le paramétre envoyé à travers la route
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) { }

   /*
   * Récupére le paramétre id passé par la route
   * Et demande au cvService de lui envoyer les données correspondant à cet id
   */ 
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.cvService.getPersonneById(params.id).subscribe(
          (personne) => {
            this.personne = personne;
          }
        )
      }
    );
  }

  updatePersonne() {
    this.cvService.updatePersonne(this.personne).subscribe(
      (response) => {
        const link = ['cv'];
        //affiche la page des cv
        this.router.navigate(link);
      }
    );
  }

}
