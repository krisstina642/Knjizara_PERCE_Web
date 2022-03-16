import { Injectable } from '@angular/core';
import { Preporuka } from 'src/Klase/preporuka';

@Injectable({
  providedIn: 'root'
})
export class PreporukeServiceService {
  private availableid:number[]=[];
  private svePreporuke: Preporuka[] = [
    {
      id: 0,
      idKorisnik1:0,
      idKorisnik2:1,
      idKnjiga:0,
      komentar: "Procitaj ovu"
    },
    {
      id: 1,
      idKorisnik1:1,
      idKorisnik2:0,
      idKnjiga:0,
      komentar: "Ova je odlicna"
    },
    {
      id: 2,
      idKorisnik1:2,
      idKorisnik2:1,
      idKnjiga:0,
      komentar: "Odusevices se"
    },
    {
      id: 3,
      idKorisnik1:3,
      idKorisnik2:1,
      idKnjiga:0,
      komentar: "Citaj obavezno!"
    },
    {
      id: 4,
      idKorisnik1:2,
      idKorisnik2:0,
      idKnjiga:0,
      komentar: "Helooo"
    },
    {
      id: 5,
      idKorisnik1:1,
      idKorisnik2:0,
      idKnjiga:1,
      komentar: "Helooo"
    },
  ];

  constructor() { }

  getPrimljenePreporuke(idKorisnik:number):Preporuka[]{
      return this.svePreporuke.filter(elem=>elem.idKorisnik2==idKorisnik);
  }

  getPoslatePreporuke(idKorisnik:number, idknjige:number):Preporuka[]{
    return this.svePreporuke.filter(elem=>elem.idKorisnik1==idKorisnik && idknjige==elem.idKnjiga);
}

  deletePreporuka(preporuka:Preporuka){
    const index = this.svePreporuke.indexOf(preporuka, 0);
        if (index > -1) {
          this.availableid.push(preporuka.id);
          this.svePreporuke.splice(index, 1);
        }
  }

  addPreporuka(preporuka:Preporuka){
    if (this.availableid.length>0){
      let n=this.availableid.pop();
      if (n!=undefined) preporuka.id=n;
    }
    else preporuka.id=this.svePreporuke.length;
    this.svePreporuke.push(this.copyPreporuka(preporuka));
    console.log(this.svePreporuke);
    
  }

  copyPreporuka(preporuka:Preporuka):Preporuka{
    let p={
      id:preporuka.id,
      idKorisnik1:preporuka.idKorisnik1,
      idKorisnik2:preporuka.idKorisnik2,
      idKnjiga:preporuka.idKnjiga,
      komentar: preporuka.komentar
    }
    return p;
  }

}
