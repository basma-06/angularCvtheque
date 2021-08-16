import { Component, OnInit, Input, Output } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { Movie } from 'src/app/Model/Movie';
import { EmbaucheService } from '../embauche.service';
import { Router, RouterModule, Routes } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/User';

/*
* Non utilisé à supprimer
*/

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {
  personnes: Personne[];
  user: User;
  link = "http://localhost:8000/";//backend Laravel en local

  //on recupére le service au niveau du constructeur
  constructor(
    private embaucheService: EmbaucheService,
    private router: Router,
    private http: HttpClient
    ) { }

  //on lui dit d'aller recupérer la liste des personnes de mon service 
  //Je me souscrit à mon Observable qui recupére la liste des personnes
  ngOnInit() {
    this.http.get<User>(this.link).subscribe(data => {
        console.log('laravelAngular',data);
        this.user = data;
      }
    );
    this.personnes = this.embaucheService.getEmbauches();
  }

  goToCV() {
    const link = ['cv'];
    this.router.navigate(link);
  }

}
