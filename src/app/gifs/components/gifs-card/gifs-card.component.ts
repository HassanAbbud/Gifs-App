import { Gif } from '../../interfaces/gifs.interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gif-card',
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css'
})
export class CardComponent implements OnInit{

  @Input()
  public gifCard!: Gif;

  ngOnInit(): void {
    if(!this.gifCard){
    throw new Error('Method not implemented.');}
  }
}
