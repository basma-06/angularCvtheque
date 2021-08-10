import { Injectable } from '@angular/core';

@Injectable({
  /** pour rendre le service visible */
  providedIn: 'root'
})
export class FirstService {

  constructor() { }
  logger(data) {
    console.log(data);
  }
}
