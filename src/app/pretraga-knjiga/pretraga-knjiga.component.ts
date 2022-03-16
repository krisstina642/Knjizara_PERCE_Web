import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Knjiga } from 'src/Klase/knjiga';
import { KnjigeServiceService } from '../knjige-service.service';

@Component({
  selector: 'app-pretraga-knjiga',
  templateUrl: './pretraga-knjiga.component.html',
  styleUrls: ['./pretraga-knjiga.component.css']
})
export class PretragaKnjigaComponent implements OnInit {
  public knjige:Knjiga[]=[];
  public pretraga:Knjiga[]=[];
  public input!: string;

  constructor(private _knjigaRuter: KnjigeServiceService, private router: Router, private route: ActivatedRoute) { 
    route.params.subscribe(val => {
      if (localStorage.getItem('pretraga')!=null){
        let id=localStorage.getItem('pretraga');
        this.input= id==null? "": id;
      }
      this.knjige=this._knjigaRuter.getKnjige();
        this.pretraga=this.knjige.filter(elem=> elem.naziv.toLowerCase().includes(this.input.toLowerCase()) || elem.autor.toLowerCase().includes(this.input.toLowerCase()) ); 
    });
}

  ngOnInit(): void {
         console.log(this.pretraga);
         
      }

  onSelect(knjiga:Knjiga){
    console.log(knjiga);
    
    this.router.navigate(['/knjiga/', knjiga.id]);
  }

}
