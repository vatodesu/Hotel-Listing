import { Component, OnInit } from '@angular/core';
import { HotelCrudService } from '../shared/hotel-crud.service';
import { Hotel } from '../shared/hotel.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HotelDetailsComponent } from '../hotel-details/hotel-details.component';

@Component({
  selector: 'hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotel!: Hotel;
  hotels!: Hotel[];
  selectedHotel!: Hotel;
  displayedColumns: string[] = ['movie-poster', 'movie-name', 'movie-year', 'movie-imdb', 'hotel-details'];

  constructor(public hotelCrud: HotelCrudService, public dialog: MatDialog) { 
    this.hotels = JSON.parse(localStorage.getItem('hotels') || '{}');
  }

  ngOnInit(): void {
  }

  public selectHotel(hotel: Hotel) {
    this.selectedHotel = hotel;
  }
  openDialog() {
    this.dialog.open(HotelDetailsComponent, {
      data: {
        imgLink: this.selectedHotel.imgLink,
        name: this.selectedHotel.name,
        stars: this.selectedHotel.stars,
        registerDay: this.selectedHotel.registerDay,
        details: this.selectedHotel.details
      }
    });
  }
  
}
