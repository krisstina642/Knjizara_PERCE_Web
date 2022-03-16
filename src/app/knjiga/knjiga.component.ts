import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Knjiga } from 'src/Klase/knjiga';
import { Komentar } from 'src/Klase/komentar';
import { Korisnik } from 'src/Klase/korisnik';
import { Preporuka } from 'src/Klase/preporuka';
import { DataSharingService } from '../data-sharing.service';
import { KnjigeServiceService } from '../knjige-service.service';
import { KomentariServiceService } from '../komentari-service.service';
import { KorisniciServiceService } from '../korisnici-service.service';
import { PreporukeServiceService } from '../preporuke-service.service';

@Component({
  selector: 'app-knjiga',
  templateUrl: './knjiga.component.html',
  styleUrls: ['./knjiga.component.css'],
})
export class KnjigaComponent implements OnInit {

  public Knjiga: Knjiga;
  public Rating: number;
  public komentari: Komentar[] = [];
  public readonly: boolean = true;
  public ulogovaniKorisnik!: Korisnik;
  public komentarKorisnika!: Komentar;
  public prijatelji!: Korisnik[];
  public prijateljiCopy!: Korisnik[];
  public cekirani!: boolean[];
  public pretraga: string="";
  public komentarNaPreporuku: string="";

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private _knjigaService: KnjigeServiceService,
    private _komentariService: KomentariServiceService,
    private _korisnikService: KorisniciServiceService,
    private _dataSharingService: DataSharingService,
    private _preporukeService: PreporukeServiceService
  ) {
    
    let knjiga_id:number=0;
    if (this.route.snapshot.paramMap.get('id') != null) {
      let id = this.route.snapshot.paramMap.get('id');
      knjiga_id = id == null ? 0 : parseInt(id);
    }
    
    this.Knjiga = this._knjigaService.getKnjigafromId(knjiga_id)
    this.Rating = this.Knjiga.ocena;
    this.komentari = _komentariService.getKomentariKnjige(knjiga_id);
  }

  openScrollableContent(Content: any) {
    this.modalService.open(Content, { scrollable: true });
  }

  ngOnInit(): void {
    let knjiga_id:number=0;
    if (this.route.snapshot.paramMap.get('id') != null) {
      let id = this.route.snapshot.paramMap.get('id');
      knjiga_id = id == null ? 0 : parseInt(id);
    }
    
    this.Knjiga = this._knjigaService.getKnjigafromId(knjiga_id)
    this.Rating = this.Knjiga.ocena;
    this.komentari = this._komentariService.getKomentariKnjige(knjiga_id);

    this._dataSharingService.getLoggedInName.subscribe((name) =>
    this.update()
  );
   this.update();
   
  }

  update(){
   
    this.ulogovaniKorisnik = this._dataSharingService.getUlogovanKorisnik();
    if(this.ulogovaniKorisnik!=null) {
     
      this.komentarKorisnika =
        this._komentariService.getKomentariKnjigeKorisnik(
          this.Knjiga.id,
          this.ulogovaniKorisnik.id
        );
        this.prijatelji = this._korisnikService.getPrijateljibezPreporuke(this.ulogovaniKorisnik,this.Knjiga.id);
        this.prijateljiCopy=this.prijatelji;
        let boole:boolean[]=[];
        if (this.prijatelji.length>0){
        for (let i=0; i<this.prijatelji[this.prijatelji.length-1].id;i++){
          boole.push(false);
        }}
        this.cekirani=boole;
    }
  }

  getUsername(idKorisnika: number) {
    return this._korisnikService.getKorisnikIme(idKorisnika);
  }

  dodajKomentar() {
    this._komentariService.addKomentar(this.komentarKorisnika);
    this.komentari = this._komentariService.getKomentariKnjige(this.Knjiga.id);
  }

  unosOcene() {
    this._komentariService.addKomentar(this.komentarKorisnika);
    this.komentari = this._komentariService.getKomentariKnjige(this.Knjiga.id);
  }

  clickPrijatelj(i:number){
    this.cekirani[i]=!this.cekirani[i];
  }

  posaljiPreporuke(){
    for (let i=0;i<this.prijatelji.length;i++){
      if(this.cekirani[this.prijatelji[i].id]){
        let preporuka:Preporuka={
          id : 0,
          idKorisnik1: this.ulogovaniKorisnik.id,
          idKorisnik2: this.prijatelji[i].id,
          idKnjiga: this.Knjiga.id,
          komentar: this.komentarNaPreporuku
        }
        this._preporukeService.addPreporuka(preporuka);
        console.log(preporuka);
      }
    }
    this.prijatelji = this._korisnikService.getPrijateljibezPreporuke(this.ulogovaniKorisnik,this.Knjiga.id);
    this.prijateljiCopy=this.prijatelji;
    
    
  }

  handleSearch(){
    this.prijateljiCopy=this.prijatelji.filter(elem=> elem.ime.toLowerCase().includes(this.pretraga.toLowerCase()) || elem.prezime.toLowerCase().includes(this.pretraga.toLowerCase()) || elem.kor_ime.toLowerCase().includes(this.pretraga.toLowerCase()) );
  }

  promocija(p:boolean){
    if (p) this.Knjiga.promocija=1;
    else this.Knjiga.promocija=0;
    this._knjigaService.azuriraj(this.Knjiga);
    
  }
}
