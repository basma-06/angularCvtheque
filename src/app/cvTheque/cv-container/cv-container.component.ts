import { Component, OnInit } from '@angular/core';
import { FirstService } from 'src/app/first.service';
import { Personne } from 'src/app/Model/Personne';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-cv-container',
  templateUrl: './cv-container.component.html',
  styleUrls: ['./cv-container.component.css']
})
export class CvContainerComponent implements OnInit {
  personnes: Personne[];
  selectedPersonne: Personne;//de type Personne
  /*
  * Injection du service dans le constructor
  * L'injecteur de dependance s'occupe d'instancier ce service 
  */
  constructor(private cvService: CvService) { }

  ngOnInit() {
    /*
    * Inscription à l'Observable crée dans le service cvService
    */
    this.cvService.getPersonnes().subscribe(
      //si on a une réponse qui est un tableau de personnes alors
      //on affecte cette reponse à this.personnes
      (personnes) => {this.personnes = personnes;}
    ),
    (error) => {
      alert('Probleme d\'acces à l\'API loopback, les données affichées sont facke');
      console.log(error);
      this.personnes = this.cvService.getFakePersonnes();
    }
  }

   selectPersonne(personne) {
    this.selectedPersonne = personne;
  }
}
