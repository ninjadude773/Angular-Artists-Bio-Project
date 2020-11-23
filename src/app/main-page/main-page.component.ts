import { Component, OnInit } from '@angular/core';
import { ArtistInfo } from '../shared/artist-info'
import { UpdateEvent } from '../artist-item-list/artist-item-list.component'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  artistInfo_: ArtistInfo[] = new Array<ArtistInfo>()
  
  // Total Artist Budget Counter
    totalArtist: number = 0;

 
    constructor() { }

  ngOnInit(): void {}

  // Add Item (Add Items to the array)
  addInfo(newInfo: ArtistInfo){
    this.artistInfo_.push(newInfo)
    this.totalArtist += newInfo.amount
  }

    // Delete Method (Which will handle the deletion of each individual card)
  deleteInfo(info: ArtistInfo){
    let index = this.artistInfo_.indexOf(info);
    this.artistInfo_.splice(index,1);
    this.totalArtist -= info.amount;
  }
  
    // Update Method (Which will handle the update of the individual cards)
  updateItem(updateEvent: UpdateEvent){
    // replace the item with the updated / submitted item from the form
    this.artistInfo_[this.artistInfo_.indexOf(updateEvent.old)] = updateEvent.new
    this.totalArtist -= updateEvent.old.amount;
    this.totalArtist += updateEvent.new.amount;
  }
}
  
  




