import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne[];
  //Adresse de notre API loopback
  link ="http://localhost:3000/api/Personne";

  //On va consulter l'API loopback via le service HttpClient d'Angular
  constructor(private http: HttpClient) { 
    
    //@todo datas de test à retirer plus tard
    this.personnes = [
      new Personne(1, 'basma', 'achi', 37, 'fleur.jpg', 2, 'developper'),
      new Personne(2, 'solene', 'joly', 37, 'tim_logo.png', 2, 'Assistant developper'),
    ];
  }

  /* 
  * Methode HTTP GET qui va retourner un tableau de type Personne 
  * Observable qui retourne un tableau de Personne
  * @return array de type Personne
  */
  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne []>(this.link);    
  }

  /*
  * HTTP GET du service HttpClient 
  * Methode qui va recuperer une personne via son id
  * @param id
  * @return array de type Personne
  */  
  getPersonneById(id: number): Observable<Personne> {
    return this.http.get<Personne>(this.link + '/'+ id);
  }

  /* 
    * Methode HTTP POST du service HttpClient 
    * Ajout d'une personne dans la base de données via une API link
    * @param link URL de l'API
    * @param object de type Personne
    * @return Observable de type any
    */
  addPersonne(personne: Personne): Observable<any> {
    return this.http.post(this.link, personne);
  }

  /* 
    * Methode HTTP PUT du service HttpClient 
    * Modification d'une personne dans la base de données via une API link
    * @param link URL de l'API
    * @param object de type Personne
    * @return Observable de type any
    */
  updatePersonne(personne: Personne) {
    return this.http.put(this.link, personne);
  }

  /* 
    * Methode HTTP DELETE du service HttpClient 
    * Suppression d'une personne dans la base de données via une API link
    * @param string
    * @return Observable de type any
    */
  deletePersonne(id: number) {
    return this.http.delete(this.link + '/${id}');
  }

  /*
    * @todos pour le test à retirer plus tard
    */
  getFakePersonnes() {
    return this.personnes;
  }


}
