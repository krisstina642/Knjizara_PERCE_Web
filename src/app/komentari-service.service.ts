import { Injectable } from '@angular/core';
import { Komentar } from 'src/Klase/komentar';
import { KnjigeServiceService } from './knjige-service.service';
import { KorisniciServiceService } from './korisnici-service.service';

@Injectable({
  providedIn: 'root'
})
export class KomentariServiceService {

  sviKomentari:Komentar[]=[

    {
        "id": 0,
        "idKnjige": 1,
        "idKorisnika": 1,
        "ocena": 5,
        "tekst" : "Odlicna knjiga"
    },
    {
        "id":1,
        "idKnjige": 2,
        "idKorisnika": 2,
        "ocena": 1,
        "tekst": "Superrr!!"
    },
    {
        "id":2,
        "idKnjige": 0,
        "idKorisnika": 1,
        "ocena": 2,
        "tekst": "Ovo morate procitati "
    },
    {
      "id":3,
      "idKnjige": 0,
      "idKorisnika": 2,
      "ocena": 3,
      "tekst": "Odusevljavajuce "
    },
    {
      "id": 4,
      "idKnjige": 0,
      "idKorisnika": 0,
      "ocena": 5,
      "tekst" : "Divno"
  },
  ];

  noviKomentar(idKnjige:number, idKorisnika:number):Komentar{
    return {
      id: this.sviKomentari.length,
      idKnjige: idKnjige,
      idKorisnika: idKorisnika,
      ocena: 0,
      tekst: ""
    };
  }

  constructor(private _knjigeService: KnjigeServiceService,
              private _korisniciService: KorisniciServiceService) { }

  getKomentariKnjige(idKnjige:number) : Komentar[]{
      return this.getKomentari().filter(data=> data.idKnjige==idKnjige && data.tekst!='')
  }

  getKomentariKnjigeKorisnik(idKnjige:number, idKorisnika:number): Komentar {
    let komentari=this.getKomentari().filter(elem=> elem.idKnjige==idKnjige && elem.idKorisnika==idKorisnika);
    if (komentari==null || komentari.length==0) {
      //console.log("ne postoji");
      
      return this.noviKomentar(idKnjige, idKorisnika);
    }
    //console.log("postoji");
    return komentari[0]
  }

  addKomentar(kom:Komentar){
    
      if (kom.id==this.sviKomentari.length){
          this.sviKomentari.push(kom);
      }
      else {
        this.sviKomentari[kom.id].tekst=kom.tekst;
      }
  }

  getKomentari() : Komentar[] {
    return this.sviKomentari;
  }
}
