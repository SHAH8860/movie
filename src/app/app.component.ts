import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MovieService } from './service/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie';
  list:any=[]
  movie:string=''
  constructor(private server:HttpClient,private data:MovieService) { }
  getmovie(){
    this.data.getdata(this.movie).subscribe((res:any)=>{
      this.list=res.Search
      console.log(this.list)
    })
    this.movie=''

  }
}
