import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { EmbaucheService } from '../embauche.service';
import { Router, RouterModule, Routes } from "@angular/router";

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {
  personnes: Personne[];

  //on recupére le service au niveau du constructeur
  constructor(
    private embaucheService: EmbaucheService,
    private router: Router
    ) { }

  //on lui dit d'aller recupérer ces personnes de mon service 
  ngOnInit() {
    this.personnes = this.embaucheService.getEmbauches();
  }

  goToCV() {
    const link = ['cv'];
    this.router.navigate(link);
  }

}
