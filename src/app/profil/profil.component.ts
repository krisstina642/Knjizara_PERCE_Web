import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Button } from 'primeng/button';
import { Korisnik } from 'src/Klase/korisnik';
import { DataSharingService } from '../data-sharing.service';
import { KorisniciServiceService } from '../korisnici-service.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  public ulogovaniKorisnik!:Korisnik;
  public edit:boolean=false;
  public staraLozinka:string="";
  public novaLozinka:string="";
  public novaLozinka2:string="";
  public korisnickoImeZahtev:string="";
  public sviPrijatelji:Korisnik[]=[];
  public prijatelji:Korisnik[]=[];
  public sviPrijateljiPretraga:string="";
  public zahtevi:Korisnik[]=[];

  constructor(private modalService: NgbModal, private route: ActivatedRoute,  private _korisnikService: KorisniciServiceService,
    private router: Router, private dataSharingService: DataSharingService
    ) {
  }

  ngOnInit(): void {
         this.ulogovaniKorisnik=this.dataSharingService.getUlogovanKorisnik();
         this.sviPrijatelji=this._korisnikService.getPrijatelji(this.ulogovaniKorisnik);
         this.prijatelji=this.sviPrijatelji;
         this.zahtevi=this._korisnikService.getZahtevi(this.ulogovaniKorisnik);
  }

  public potvrdaPromena(i:boolean){
    if(i==true){
    if (this.novaLozinka!=this.novaLozinka2) {
      alert("lozinke se ne poklapaju");
      return;
    }
    else if (this.staraLozinka!=this.ulogovaniKorisnik.lozinka) {
      alert("unesite ispravnu staru lozinku");
      return;
    }
    else if (this.staraLozinka==this.novaLozinka) {
      alert("stara i nova lozinka moraju da se razlikuju");
      return;
    }
    this.ulogovaniKorisnik.lozinka=this.novaLozinka;
    let element: HTMLElement = document.getElementById("prom_loz") as HTMLElement;
    element.click(); 
    this.staraLozinka="";
    this.novaLozinka="";
    this.novaLozinka2="";
  }
    this.edit=false;
    this._korisnikService.azuriraj(this.ulogovaniKorisnik);
    
    setTimeout("alert('uspesno');", 1);
    
  }

  openScrollableContent(Content: any) {
    this.modalService.open(Content, { scrollable: true });
  }

  odjava(){
    //this.dataSharingService.isUserLoggedIn.next(false);
    this.dataSharingService.logout();
    localStorage.removeItem('korisnik');
    this.router.navigate(['/']);
    this.ulogovaniKorisnik=null as any;
  }

  dodajPrijatelja(){
    
    if (((this.sviPrijatelji.find((elem)=> elem.kor_ime==this.korisnickoImeZahtev))!=undefined)){
      
      alert("Korisnik je vec u listi prijatelja"); 
      return;
    }
      let k:Korisnik=this._korisnikService.getKorisnikFromKorisnickoIme(this.korisnickoImeZahtev);
      if (k==null){
        alert("Korisnik ne postoji");
        return;
      }
    
    alert("Zahtev je poslat");
    this._korisnikService.addZahtev(this.ulogovaniKorisnik.kor_ime,this.korisnickoImeZahtev);
  }

  handleSearch(){
    this.prijatelji=this.sviPrijatelji.filter((elem) => elem.ime.toLowerCase().includes(this.sviPrijateljiPretraga.toLowerCase()) || elem.kor_ime.toLowerCase().includes(this.sviPrijateljiPretraga.toLowerCase()))
  }

  obrisiPrijatelja(korisnik:Korisnik){
    if (confirm('Da li ste sigurni da želite da obrišete korisnika '+korisnik.ime +' iz prijatelja?')) {
      this._korisnikService.obrisiPrijateljstvo(korisnik,this.ulogovaniKorisnik);
    }
    this.sviPrijatelji=this._korisnikService.getPrijatelji(this.ulogovaniKorisnik);
    this.handleSearch();
  }

  obradiZahtev(korisnik:Korisnik, b:boolean){
    if(!b){
      if (confirm('Da li ste sigurni da želite da obrišete zahtev za prijateljstvo korisnika '+korisnik.ime +' ?')) {
        this._korisnikService.obrisiPrijateljstvo(korisnik,this.ulogovaniKorisnik);
      }
    }
    else {
      this._korisnikService.addPrijateljstvo(korisnik,this.ulogovaniKorisnik);
    }
    this.sviPrijatelji=this._korisnikService.getPrijatelji(this.ulogovaniKorisnik);
    this.zahtevi=this._korisnikService.getZahtevi(this.ulogovaniKorisnik);
    this.prijatelji=this.sviPrijatelji;
  }
    

}
