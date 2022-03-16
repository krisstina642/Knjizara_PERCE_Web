import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Knjiga } from 'src/Klase/knjiga';
import { Korisnik } from 'src/Klase/korisnik';
import { KorisniciServiceService } from './korisnici-service.service';
import { KnjigeServiceService } from './knjige-service.service';
import { DataSharingService } from './data-sharing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'KnjizaraPerce';
  public pretraga: string = '';
  public pkorisnik_kor_ime = '';
  public pkorisnik_lozinka = '';
  public ponovljena_lozinka = '';
  public ulogovanKorisnik: Korisnik = null as any;
  counter: number = 0;

  public omoti: string[] = [
    '/assets/image/knjiga6.png',
    '/assets/image/knjiga7.png',
    '/assets/image/knjiga8.png',
    '/assets/image/knjiga9.png',
  ];

  public omotiOdabir = 0;
  public novaKnjiga!: Knjiga;

  public rkorisnik!:Korisnik;

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private _korisniciServis: KorisniciServiceService,
    private _knjigeService: KnjigeServiceService,
    private dataSharingService: DataSharingService
  ) {

    this.napraviKnjigu();
    this.initRKorisnik();
  }

  korisnikLogovanje(name: string) {
    if (name == 'logout') {
      this.ulogovanKorisnik = null as any;
    }
  }

  ngOnInit(): void {
    this.dataSharingService.getLoggedInName.subscribe((name) =>
      this.korisnikLogovanje(name)
    );
  }

  openScrollableContent(Content: any) {
    this.modalService.open(Content, { scrollable: true });
  }

  handleSearch() {
    localStorage.setItem('pretraga', this.pretraga);
    this.router.navigate(['/pretraga/', this.pretraga]);
  }

  prikazProfila() {
    this.router.navigate(['/profil/', this.ulogovanKorisnik.id]);
  }

  prikazPreporuka() {
    this.router.navigate(['/preporuke']);
  }
  pocetna() {
    this.router.navigate(['/']);
  }

  registracija(tip: number) {
    if (this.rkorisnik.drzava=="" || this.rkorisnik.ime=="" || this.rkorisnik.prezime==""
    || this.rkorisnik.grad=="" || this.rkorisnik.kor_ime=="" || this.rkorisnik.telefon=="" || this.rkorisnik.prezime=="" || this.rkorisnik.ulica==""
    || this.rkorisnik.broj=="" || this.rkorisnik.lozinka=="" || this.rkorisnik.prezime=="" || this.ponovljena_lozinka==""){
      alert("Sva polja moraju biti popunjena");
      return;
    }
    else if( this.ponovljena_lozinka != this.rkorisnik.lozinka){
      alert("Lozinke se ne poklapaju");
      return;
    }
    this.rkorisnik.tip = tip;
    this.ulogovanKorisnik=this._korisniciServis.addKorisnik(this.rkorisnik);
    this.dataSharingService.login2(this.ulogovanKorisnik);
    localStorage.setItem('korisnik', JSON.stringify(this.ulogovanKorisnik));
    let element: HTMLElement = document.getElementById("close_button") as HTMLElement;
    element.click(); 
    alert("Korisnik je uspesno kreiran");
    this.initRKorisnik();
    console.log(this.ulogovanKorisnik);
    
  }

  prijava() {
    
    this.ulogovanKorisnik= this.dataSharingService.login(this.pkorisnik_kor_ime, this.pkorisnik_lozinka);
    localStorage.setItem('korisnik', JSON.stringify(this.ulogovanKorisnik));

    if (this.ulogovanKorisnik == null)
      alert('Neispravna kombinacija korisnickog imena-lozinke');
  }

  dodajKnjigu() {
    if (this.novaKnjiga.naziv=="" || this.novaKnjiga.autor=="" || this.novaKnjiga.opis==""){
      alert("Sva polja moraju biti popunjena");
      return;
    }
    this.novaKnjiga.slika = this.omoti[this.omotiOdabir];
    this._knjigeService.addKnjiga(this.novaKnjiga);
    this.napraviKnjigu;
    alert("Knjiga je uspesno dodata");
  }

  napraviKnjigu() {
    this.novaKnjiga = {
      id: 0,
      naziv: '',
      autor: '',
      cena: 0,
      opis: '',
      slika: '',
      ocena: 0,
      godina: 1900,
      broj_strana: 0,
      promocija: 0,
    };
  }

  initRKorisnik(){
    this.rkorisnik = {
      id: 0,
      ime: '',
      prezime: '',
      kor_ime: '',
      telefon: '',
      drzava: '',
      grad: '',
      ulica: '',
      broj: '',
      lozinka: '',
      tip: 0,
    };
  }
}
