import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Import for the Budget Item Model
import { ArtistInfo } from '../shared/artist-info'

export interface UpdateEvent {
  old : ArtistInfo;
  new : ArtistInfo;
}


@Component({
  selector: 'app-artist-item-list',
  templateUrl: './artist-item-list.component.html',
  styleUrls: ['./artist-item-list.component.scss']
})


export class ArtistItemListComponent implements OnInit {
  @Input() artistInfo: ArtistInfo[] = [];
  @Output() delete: EventEmitter<ArtistInfo> = new EventEmitter<ArtistInfo>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
