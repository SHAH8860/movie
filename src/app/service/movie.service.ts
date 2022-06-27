import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private server:HttpClient) { }
  getdata(data:string){
    return this.server.get(`http://www.omdbapi.com/?apikey=24d9e3ec&s=${data}`)
  }
}
