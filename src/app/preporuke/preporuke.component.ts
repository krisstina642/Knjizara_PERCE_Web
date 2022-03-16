import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Knjiga } from 'src/Klase/knjiga';
import { Korisnik } from 'src/Klase/korisnik';
import { Preporuka } from 'src/Klase/preporuka';
import { DataSharingService } from '../data-sharing.service';
import { KnjigeServiceService } from '../knjige-service.service';
import { KorisniciServiceService } from '../korisnici-service.service';
import { PreporukeServiceService } from '../preporuke-service.service';

@Component({
  selector: 'app-preporuke',
  templateUrl: './preporuke.component.html',
  styleUrls: ['./preporuke.component.css']
})
export class PreporukeComponent implements OnInit {
  private ulogovaniKorisnik!:Korisnik;
  public preporuke:Preporuka[]=[];
  public knjige:Knjiga[]=[];
  public korisnici:Korisnik[]=[];

  constructor(private dataSharingService: DataSharingService, private _preporukeService: PreporukeServiceService,
    private _knjigeService: KnjigeServiceService, private router: Router, private _korisnikService: KorisniciServiceService) { }

  ngOnInit(): void {
    this.ulogovaniKorisnik=this.dataSharingService.getUlogovanKorisnik();
    this.preporuke=this._preporukeService.getPrimljenePreporuke(this.ulogovaniKorisnik.id);
    this.knjige=this._knjigeService.getPreporuceneKnjige(this.preporuke);
    this.korisnici=this._korisnikService.getKorisniciFromPreporuke(this.preporuke);
    console.log(this.korisnici);
    
      
  }

  deleteRecomendation(i:number){
    
    this._preporukeService.deletePreporuka(this.preporuke[i]);
    this.preporuke.splice(i, 1);
    this.knjige.splice(i, 1);
    this.korisnici.splice(i, 1);
      
  }

  onSelect(knjiga:Knjiga){
    this.router.navigate(['/knjiga/', knjiga.id]);
  }

}
