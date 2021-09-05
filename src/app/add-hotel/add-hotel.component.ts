import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotelCrudService } from '../shared/hotel-crud.service';
import { Hotel } from '../shared/hotel.model';

@Component({
  selector: 'add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {
  hotel: Hotel = {
    imgLink: '',
    name:'',
    stars: null as any,
    registerDay: '',
    details: '',
  };
  addHot!: FormGroup;

  constructor(public hotelCrud: HotelCrudService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.addHot = this.fb.group({
      imgLink: ['../../assets/download (1).png', Validators.required],
      name: ['', Validators.required],
      stars: ['', Validators.required],
      registerDay: ['', Validators.required],
      details: ['', Validators.required],
    })
  }

  get f() {
    return this.addHot.controls;
  }

  onSubmit() {
    const hot = {...this.hotel, ...this.addHot.value};
    this.hotelCrud.addHotel(hot);
    this.addHot.reset();
    }
  }

