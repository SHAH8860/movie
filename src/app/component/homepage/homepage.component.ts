import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  list:any=[]

  constructor(private server:HttpClient) { }

  ngOnInit(): void {
    let url='http://www.omdbapi.com/?apikey=24d9e3ec&s=spider'
    this.server.get(url).subscribe((res:any)=>{
      this.list=res.Search
    })
  }

}
