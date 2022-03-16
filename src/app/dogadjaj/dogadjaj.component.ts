import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dogadjaj } from 'src/Klase/dogadaj';
import { DogadjajiServiceService } from '../dogadjaji-service.service';


@Component({
  selector: 'app-dogadjaj',
  templateUrl: './dogadjaj.component.html',
  styleUrls: ['./dogadjaj.component.css']
})
export class DogadjajComponent implements OnInit {
  private src: string ='/assets/data/dogadjaji.json';
  public dog:number = 0;
  public dogadjaji:Dogadjaj[] = [];
  
  
  constructor(private _dogadjajService: DogadjajiServiceService, private route:ActivatedRoute){ }
  


  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id')!=null){
      let id=this.route.snapshot.paramMap.get('id');
      this.dog= id==null? 0: parseInt(id);
    }
    this.dogadjaji=this._dogadjajService.getDogadjaji();
    
  }

}
