import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/Model/Personne';
import { EmbaucheService } from '../embauche.service';

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css']
})
export class CvDetailComponent implements OnInit {
  @Input() personne: Personne; //rend visible la variable au template (variable definie dans le template cv-container)
  constructor(
    private embaucheService: EmbaucheService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  //fonction pour embaucher
  embaucher() {
    this.embaucheService.embaucher(this.personne);
  }

  //fonction pour mettre à jour un cv
  updatePersonne(id: number) {
    const link = ['cv/updateCv', id];
    this.router.navigate(link);
  }

}
