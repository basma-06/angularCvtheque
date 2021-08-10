import { Component, OnInit, Input, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-cv-liste',
  templateUrl: './cv-liste.component.html',
  styleUrls: ['./cv-liste.component.css']
})
export class CvListeComponent implements OnInit {
/* @basma recupérer ici la liste des personnes initialement crée dans cv-container.component.ts */
//@Input = accéde à la class Personne.
@Input() personnes: Personne[]; 
@Output() selectedPersonne = new EventEmitter(); //rend la variable accessible au pére
constructor() { }

  ngOnInit(): void {
  }

  selectPersonne(personne) {
    //emettre un evenement et y injecter la personne selectionné
    this.selectedPersonne.emit(personne);
    console.log('ici', personne);
  }

}
