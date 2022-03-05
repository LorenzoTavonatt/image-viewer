import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ImagesService } from './services/images.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  $images : Observable<any>;
  
  constructor(public datiService:ImagesService){
    this.$images= new Observable;
  }

  onInizializza(){
    this.$images= this.datiService.getAll();
  }
  
}
