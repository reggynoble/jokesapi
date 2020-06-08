import { Component, OnInit } from '@angular/core';
import { Joke } from 'src/app/models/Jokes';
import { DataService } from '../data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  jokes: Joke[];
  
  constructor(private dataService: DataService) { }

  ngOnInit(){
    this.dataService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.jokes = data;
    })

  }

}
