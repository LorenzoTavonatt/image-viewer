import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  url:string= "http://localhost:3000/images"
  wData:any;

  constructor(public http : HttpClient) { }

  //richiesta http per ricevere immagini dal json
  getImages(){
    return this.http.get(this.url);
  }

  //richiesta http per cancellare un immagine dal json
  onDelete(id:number){
    return this.http.delete(this.url+"/"+id);
  }

  //richiesta http per aggiungere un immagine al json
  onSave(id:number, url:String){
    this.http.post<any>(this.url, {id: id , link: url}).subscribe(data =>
      this.wData = data.id + data.url
    )
  }
}
