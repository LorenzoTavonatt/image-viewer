import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DatiService } from './dati.service';
import { Image } from './image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'image-viewer';
  $images? : Observable<Image[]>;
  image: Image = new Image();
  constructor(public datiService:DatiService){
    this.$images=this.datiService.getAll()
  }
  
}
