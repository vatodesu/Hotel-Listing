import { Injectable } from '@angular/core';
import { Hotel } from './hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelCrudService {
  public hotels = [] as any;

  constructor() { }

  public getHotels(): Array<Hotel> {
    return this.hotels;
  }

  public addHotel(hotel: Hotel){
    console.log("hotel added" + hotel);
    this.hotels.push(hotel);
    localStorage.setItem('hotels', JSON.stringify(this.hotels));
  }
}
