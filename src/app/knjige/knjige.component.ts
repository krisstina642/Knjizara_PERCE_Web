import { Component, OnInit } from '@angular/core';
import { Knjiga } from 'src/Klase/knjiga';
import { KnjigeServiceService } from '../knjige-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-knjige',
  templateUrl: './knjige.component.html',
  styleUrls: ['./knjige.component.css']
})
export class KnjigeComponent implements OnInit {
  public knjige:Knjiga[]=[];
  public knjigepromocija:Knjiga[]=[];
  public knjigeBezPopusta:Knjiga[]=[];

  constructor(private _knjigaRuter: KnjigeServiceService, private router: Router) { 
      this.knjige=_knjigaRuter.getKnjige();
      this.knjigepromocija=this.knjige.filter(elem=> elem.promocija==1);
      this.knjigeBezPopusta=this.knjige.filter(elem=> elem.promocija==0);
        
}

  ngOnInit(): void {
   
  }
  onSelect(num:number){    
    this.router.navigate(['/knjiga/', num]);
  }

}
