import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent implements OnInit{
  @Input()
  public url!: string;
  @Input()
  public alt!: string;


  ngOnInit(): void {
    if(!this.url || !this.alt) throw new Error('Method not implemented.');
  }

  public hasLoaded: boolean = false;

  onLoad(){
    setTimeout(() => {
      this.hasLoaded = true;

    }, 1000);
  }


}
