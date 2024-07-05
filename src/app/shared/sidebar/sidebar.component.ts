import { Component, Input } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private gifsService: GifsService){}

  public searchTag(tag: string){
    this.gifsService.searchTag(tag);
  }

  get getTagHistory(){
    return this.gifsService.getTagHistory
  }


}
