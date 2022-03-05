import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from './image';

@Injectable({
  providedIn: 'root'
})
export class DatiService {

  url : string =  "https://picsum.photos/200/300"
  constructor(private http:HttpClient) { }

  getAll(): Observable<Image[]>{
    return this.http.get<Image[]>(this.url);
  }

  canc(id:number){
    return this.http.delete(this.url+"/"+id);
  }

  add(libro:Image){
    return this.http.post(this.url,libro);
  }
  update(libro:Image){
    return this.http.put(this.url,libro);
  }

}
