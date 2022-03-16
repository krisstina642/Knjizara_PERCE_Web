import { Component, OnInit } from '@angular/core';  
import { Router } from '@angular/router';
import { Dogadjaj } from 'src/Klase/dogadaj';
import { DogadjajiServiceService } from '../dogadjaji-service.service';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css'],
})
export class PocetnaComponent implements OnInit {

  public dogadjaji:Dogadjaj[] = [];

  constructor (private router:Router, private _dogadjajService: DogadjajiServiceService){
    this.dogadjaji=this._dogadjajService.getDogadjaji();
  }

  ngOnInit(): void {
    
  }

  onSelect(num:number){
    this.router.navigate(['/dogadjaj/', num]);
  }

}
