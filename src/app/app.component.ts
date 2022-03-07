import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImagesService } from './services/images.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  //dichiarazione variabili 
  images$ : Observable <any>;
  newImage$ : String
  save$ : Observable<any>
  isShow = false;
  isHide = true;
  defaultUrl = new String("https://picsum.photos/id")

  constructor(public imagesService:ImagesService){
    this.images$= new Observable;
    this.save$= new Observable;
    this.newImage$= new String;
  }

  //funzioni per mostrare/nascondere elementi html
  show() {
    this.isShow= true;
  }
  
  featureHide() {
    this.isHide= false;
  };

  //funzione per la richiesta di lettura del json
  getImages(){
    this.images$ = this.imagesService.getImages();
    console.log(this.images$)
  }

  //funzione per la richiesta di eliminazione dal json
  onDelete(id: any){
    this.imagesService.onDelete(id).subscribe( res => {
      this.images$=this.imagesService.getImages()
     })
  }

  //funzione per la ricerca di un immagine random
  searchImage(size:any){
    console.log("Height:" + size["height"] + "  Width:" + size["width"])
    if(!Number(size["height"]) || !Number(size["width"])){
      alert("Risouluzine non valida")
    }
    let rId = Math.floor((Math.random() * 1050) + 1);
    let url = new String(this.defaultUrl + "/" + rId + "/" + size["width"] + "/" + size["height"])
    this.newImage$ = url
  }

  //funzione per aggiungere un'immagine nel json
  onSave(url: String){
    console.log(url) 
    var split = url.split("/");
    this.imagesService.onSave(parseInt(split[4]), url)
  }
  
}
