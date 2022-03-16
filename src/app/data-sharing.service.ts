import { EventEmitter, Injectable, Output } from '@angular/core';
import { Korisnik } from 'src/Klase/korisnik';
import { KorisniciServiceService } from './korisnici-service.service';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  getLoggedInName: EventEmitter<string> = new EventEmitter<string>();
  ulogovanKorisnik!: Korisnik;

  constructor(private _korisnikService: KorisniciServiceService) {}

  login(email: string, password: string): Korisnik {
    let korisnik = this._korisnikService.getKorisnik(email, password);
    this.ulogovanKorisnik = korisnik;
    if (korisnik != null) this.getLoggedInName.next('login');
    return korisnik;
  }

  login2(k: Korisnik) {
    this.ulogovanKorisnik = k;
    this.getLoggedInName.next('login');
  }

  logout(): void {
    this.ulogovanKorisnik = null as any;
    this.getLoggedInName.next('logout');
  }

  getUlogovanKorisnik(): Korisnik {
    return this.ulogovanKorisnik;
  }
}
