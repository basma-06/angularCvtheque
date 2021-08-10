import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
//Service avec toutes les fonctionnalité d'embauche de debauche
export class EmbaucheService {
  /* definition variable privée de type Personne tableau vide*/
  private personnes: Personne[];
  constructor() {
    this.personnes = []; 
  }

   //Creation des methodes
  getEmbauches(): Personne[] {
      return this.personnes;
  }

  //ne retourne rien (void)
  embaucher(personne: Personne): void {
     //si la personne existe dejà dans le tableau je ne le push pas à nouveau
     //verification de l'indice de l'objet à l'intérieur du tableau
    const index = this.personnes.indexOf(personne);
    if (index < 0) {
      this.personnes.push(personne);
    } else {
      alert('cette personne est dejà selectionée');
    }
  }

  //retire un candidat du tableau des embauchés 
  debaucher(personne): void {
    const index = this.personnes.indexOf(personne);
    if (index > 0) {
      this.personnes.splice(index, 1); //retire la ligne du tableau
    }
  }

}

