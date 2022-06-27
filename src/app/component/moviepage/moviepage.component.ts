import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-moviepage',
  templateUrl: './moviepage.component.html',
  styleUrls: ['./moviepage.component.css']
})
export class MoviepageComponent implements OnInit {
  ngOnInit(): void {
    this.movie=this.active.snapshot.params['movie']
    console.log(this.movie)
    this.getmovie()
  }

  list:any=[]
  movie:string=''
  constructor(private server:HttpClient,private data:MovieService,private active:ActivatedRoute) { }
  getmovie(){
    this.data.getdata(this.movie).subscribe((res:any)=>{
      this.list=res.Search
      console.log(this.list)
    })

  }

  

}
