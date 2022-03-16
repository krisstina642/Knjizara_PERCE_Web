import { Injectable } from '@angular/core';
import { Korisnik } from 'src/Klase/korisnik';
import { Preporuka } from 'src/Klase/preporuka';
import { Prijateljstvo } from 'src/Klase/prijateljstvo';
import { PreporukeServiceService } from './preporuke-service.service';

@Injectable({
  providedIn: 'root',
})
export class KorisniciServiceService {
  private sviKorisnici: Korisnik[] = [
    {
      id: 0,
      ime: 'Pera',
      prezime: 'Peric',
      kor_ime: 'pera',
      telefon: '0631234567',
      drzava: 'Srbija',
      grad: 'Beograd',
      ulica: 'Bulevar kralja Aleksandra',
      broj: '45a',
      lozinka: 'pera123',
      tip: 0,
    },
    {
      id: 1,
      ime: 'Mika',
      prezime: 'Mikic',
      kor_ime: 'mika',
      telefon: '0631234567',
      drzava: 'Srbija',
      grad: 'Beograd',
      ulica: 'Bulevar kralja Aleksandra',
      broj: 'bb',
      lozinka: 'mika123',
      tip: 0,
    },
    {
      id: 2,
      ime: 'Zika',
      prezime: 'Zikic',
      kor_ime: 'zika',
      telefon: '0631234567',
      drzava: 'Srbija',
      grad: 'Beograd',
      ulica: 'Bulevar kralja Aleksandra',
      broj: '1',
      lozinka: 'zika123',
      tip: 1,
    },
    {
      id: 3,
      ime: 'Maja',
      prezime: 'Maric',
      kor_ime: 'maja',
      telefon: '0631234567',
      drzava: 'Srbija',
      grad: 'Beograd',
      ulica: 'Bulevar kralja Aleksandra',
      broj: '1',
      lozinka: 'maja123',
      tip: 0,
    },
    {
      id: 4,
      ime: 'Aleksandra',
      prezime: 'Aleksandrovic',
      kor_ime: 'aleksandra',
      telefon: '0631234567',
      drzava: 'Srbija',
      grad: 'Beograd',
      ulica: 'Bulevar kralja Aleksandra',
      broj: '1',
      lozinka: 'aleksandra123',
      tip: 0,
    },
    {
      id: 5,
      ime: 'Aleksandra',
      prezime: 'Aleksic',
      kor_ime: 'aleksandraAleksic',
      telefon: '0631234567',
      drzava: 'Srbija',
      grad: 'Beograd',
      ulica: 'Bulevar kralja Aleksandra',
      broj: '1',
      lozinka: 'aleksandra123',
      tip: 0,
    },
  ];

  private prijateljstva: Prijateljstvo[] = [
    // 0-zahtev 1-prijatelji
    {
      id: 0,
      idKorisnik1: 1,
      idKorisnik2: 2,
      status: 1,
    },
    {
      id: 1,
      idKorisnik1: 0,
      idKorisnik2: 2,
      status: 1,
    },
    {
      id: 2,
      idKorisnik1: 0,
      idKorisnik2: 3,
      status: 1,
    },
    {
      id: 3,
      idKorisnik1: 0,
      idKorisnik2: 4,
      status: 1,
    },
    {
      id: 4,
      idKorisnik1: 0,
      idKorisnik2: 5,
      status: 1,
    },
    {
      id: 5,
      idKorisnik1: 1,
      idKorisnik2: 0,
      status: 0,
    },
  ];

  constructor(private _preporukeService: PreporukeServiceService) {}

  getKorisnikIme(idKorisnik: number): string {
    if (this.getKorisnici().filter((elem) => idKorisnik == elem.id)[0] == null)
      return '';

    //console.log(this.getKorisnici().filter(elem=>idKorisnik==elem.id)[0].ime);
    return this.getKorisnici().filter((elem) => idKorisnik == elem.id)[0].ime;
  }
  getKorisnik(kor_ime: string, lozinka: string): Korisnik {
    let k: Korisnik = this.getKorisnici().filter(
      (elem) => elem.kor_ime == kor_ime && elem.lozinka == lozinka
    )[0];
    if (k == null) return null as any;
    return k;
  }

  getKorisnikFromId(id: number): Korisnik {
    return this.sviKorisnici.filter((elem) => elem.id == id)[0];
  }

  getKorisnikFromKorisnickoIme(kIme: string): Korisnik {
    return this.sviKorisnici.filter((elem) => elem.kor_ime == kIme)[0];
  }

  addKorisnik(korisnik: Korisnik):Korisnik {
    let k : Korisnik =this.copyKorisnik(korisnik);
    this.sviKorisnici.push(k);
    return k;
  }

  copyKorisnik(korisnik: Korisnik):Korisnik{
    return {
      id: this.sviKorisnici.length,
      ime: korisnik.ime,
      prezime: korisnik.prezime,
      kor_ime: korisnik.kor_ime,
      telefon: korisnik.telefon,
      drzava: korisnik.drzava,
      grad: korisnik.grad,
      ulica: korisnik.ulica,
      broj: korisnik.broj,
      lozinka: korisnik.lozinka,
      tip: korisnik.tip,
    };

  }

  getKorisnici() {
    return this.sviKorisnici;
  }

  getPrijatelji(korisnik: Korisnik): Korisnik[] {
    let kor: Korisnik[] = [];
    if(korisnik!=null){
    this.prijateljstva.forEach((element) => {
      if (element.status == 1) {
        if (element.idKorisnik1 == korisnik.id) {
          kor.push(this.getKorisnikFromId(element.idKorisnik2));
        } else if (element.idKorisnik2 == korisnik.id) {
          kor.push(this.getKorisnikFromId(element.idKorisnik1));
        }
      }
    });
  }
    return kor;
  }

  getPrijateljibezPreporuke(korisnik: Korisnik, idKnjige:number): Korisnik[] {
    let kor: Korisnik[] = [];
    this.prijateljstva.forEach((element) => {
      if (element.status == 1) {
        if (element.idKorisnik1 == korisnik.id) {
          kor.push(this.getKorisnikFromId(element.idKorisnik2));
        } else if (element.idKorisnik2 == korisnik.id) {
          kor.push(this.getKorisnikFromId(element.idKorisnik1));
        }
      }
    });

    let prep:Preporuka[]=this._preporukeService.getPoslatePreporuke(korisnik.id, idKnjige);
    prep.forEach(posPreporuka => {
      kor=kor.filter(elem=>elem.id!=posPreporuka.idKorisnik2)
      //console.log(posPreporuka.idKorisnik2);
      //console.log(kor);
    });
  
    return kor;
  }




  azuriraj(korisnik: Korisnik) {
    this.sviKorisnici[korisnik.id] = korisnik;
  }

  addZahtev(kor1: string, kor2: string) {
    let korisnik1: Korisnik = this.getKorisnikFromKorisnickoIme(kor1);
    let korisnik2: Korisnik = this.getKorisnikFromKorisnickoIme(kor2);
    this.prijateljstva.forEach((element) => {
      if (
        element.idKorisnik2 == korisnik1.id &&
        element.idKorisnik1 == korisnik2.id
      ) {
        element.status = 1;
        return;
      }
    });
    let p: Prijateljstvo = {
      id: this.prijateljstva.length,
      idKorisnik1: korisnik1.id,
      idKorisnik2: korisnik2.id,
      status: 0,
    };
    this.prijateljstva.push(p);
  }

  obrisiPrijateljstvo(korisnik1: Korisnik, korisnik2: Korisnik) {
    this.prijateljstva.forEach((element) => {
      if (
        (element.idKorisnik1 == korisnik1.id &&
          element.idKorisnik2 == korisnik2.id) ||
        (element.idKorisnik2 == korisnik1.id &&
          element.idKorisnik1 == korisnik2.id)
      ) {
        const index = this.prijateljstva.indexOf(element, 0);
        if (index > -1) {
          this.prijateljstva.splice(index, 1);
        }
      }
    });
  }

  getZahtevi(korisnik: Korisnik):Korisnik[] {
    let zahtevi:Korisnik[]=[];
    this.prijateljstva.forEach((element) => {
      if (
        element.idKorisnik2 == korisnik.id &&
          element.status==0 
      )  zahtevi.push(this.getKorisnikFromId(element.idKorisnik1));
    });
    return zahtevi;
  }

  addPrijateljstvo(korisnik1: Korisnik, korisnik2: Korisnik){
    this.prijateljstva.forEach((element) => {
      if (
        element.idKorisnik2 == korisnik2.id &&
        element.idKorisnik1 == korisnik1.id
      ) {
        element.status = 1;
      }     
    });

  }
  getKorisniciFromPreporuke(preporuke: Preporuka[]) : Korisnik[]{
    let korisnik:Korisnik[]=[];
    preporuke.forEach(element => {
      korisnik.push(this.sviKorisnici[element.idKorisnik1]);
    });
    return korisnik;
  }
}
