import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  url:string= "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"

  constructor(public http : HttpClient) { }

  getAll(){
    return this.http.get(this.url);
  }

}
