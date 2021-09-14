import { Component, Inject, Input, OnInit } from '@angular/core';
import { Hotel } from '../shared/hotel.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {

  @Input('hotel') hotel!: Hotel;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Hotel){
    
  }

  ngOnInit(): void {
  }

}
