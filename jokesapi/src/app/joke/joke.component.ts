import { Component, OnInit, Input } from '@angular/core';
import { Joke } from 'src/app/models/Jokes';


@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {
   @Input() joke: Joke;

  constructor( ) { }

  ngOnInit(){


  }

}
