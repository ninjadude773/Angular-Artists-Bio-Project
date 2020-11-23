import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './main-page/main-page.component';

// Import For the Shared Module and ALL of its components
import { SharedModule } from './shared/shared.module';
import { AddArtistFormComponent } from './add-artist-form/add-artist-form.component';
import { ArtistItemListComponent } from './artist-item-list/artist-item-list.component';
import { ArtistItemCardComponent } from './artist-item-list/artist-item-card/artist-item-card.component';
import { EditItemModalComponent } from './edit-item-modal/edit-item-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddArtistFormComponent,
    ArtistItemListComponent,
    ArtistItemCardComponent,
    EditItemModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule // Added this to the list of modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
