import { Component, OnInit } from '@angular/core';
import { HotelCrudService } from '../shared/hotel-crud.service';
import { Hotel } from '../shared/hotel.model';

@Component({
  selector: 'hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotel!: Hotel;
  hotels!: Hotel[];
  selectedHotel!: Hotel;

  constructor(public hotelCrud: HotelCrudService) { 
    this.hotels = JSON.parse(localStorage.getItem('hotels') || '{}');
  }

  ngOnInit(): void {
  }

  public selectHotel(hotel: Hotel) {
    this.selectedHotel = hotel;
  }
}
