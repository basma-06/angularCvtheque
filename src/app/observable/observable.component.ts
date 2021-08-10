import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  //Definition de mon Observable qui va recevoir une chaine de type string
  monObservable: Observable<string>;
  mesImages = [
    'fleur.jpg', 
    'tim_logo.png'
  ];
  currentImage: string
  constructor() { }

  ngOnInit(): void {
    //Instanciation de mon Observable avec un flux continu d'images
    //A chaque 1500 millisecondes je vais aller lancer une des images
    this.monObservable = new Observable(
      (observer) => {
        let i = this.mesImages.length -1;
        setInterval(
          () => {
            //j'envoi un flux d'images
            observer.next(this.mesImages[i]);
            if ( i > 0 ) {
              i--;
            } else {
              i = this.mesImages.length -1;
            } 
          }
        ,1500);
      }
    );
    //je me suis inscrite à mon Observable et à chaque fois que tu vas m'envoyer un flux de donnée
    //je vais le recupérer et je vais l'affecter à ma variable currentImage
    this.monObservable.subscribe(
      //je recupére ce que m'envoi mon Observable
      //result = methode next
      (result) => {
        this.currentImage = result;
      }
    );
      
    }
  }
