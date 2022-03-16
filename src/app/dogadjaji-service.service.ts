import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DogadjajiServiceService {

  constructor() { }

  getDogadjaji() {
    return [
      {
          "id":0,
          "slika": "/assets/image/image0.png",
          "opis" : "18.11. 2021. knjizara Perce slavi 5 godina postojanja. Kupovinom u našim radnjama na ovaj datum dobijate vaucer od 1000 dinara koji možete iskoristiti do kraja godine."
      },
      {
          "id":1,
          "slika": "/assets/image/image1.png",
          "opis": "S obzirom na predstojeće praznike pripremili smo vam dodatni popust od 30% na sav asortiman"
      },
      {
          "id":2,
          "slika": "/assets/image/image2.png",
          "opis": "Povodom predstojećeg sajma knjiga u porostoru knjizare 15.12. biće organizovano potpisivanje najnovijeg romana Mare Marić. Posetioci se mole da nose maske i postuju predvidjenu distancu. "
      },
  ];
  }
}
