import { Component } from '@angular/core';
import { Router } from '@angular/router';

export class TripHeaderModel {
  id: number;
  img: string
  titleheading: string;
  from: string;
  life: string;

}

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
    constructor(private router: Router) { }

  tripHeader: TripHeaderModel[] = [
    {
      id: 0,
      img: 'https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80',
      titleheading: 'Kashmir Snow Trek',
      from: '6000',
      life: '7 Days'
    },
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1549468057-5b7fa1a41d7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2971&q=80',
      titleheading: 'Discover Kutch',
      from: '5000',
      life: '4 Days'
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1564569918956-2cf8a82eb1e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2969&q=80',
      titleheading: 'Dwarka Dolphin Exploration',
      from: '4000',
      life: '3 Days'
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1579689189009-874f5cac2db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3022&q=80',
      titleheading: 'Kasol Manali Adventure Camp',
      from: '12000',
      life: '9 Days'
    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1572547564070-305733e0243f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80',
      titleheading: 'Spiti in the Snow',
      from: '12000',
      life: '10 Days'
    },
    {
      id: 5,
      img: 'https://images.unsplash.com/photo-1577089907583-991f1ba4a03c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80',
      titleheading: 'Jaisalmer Family Camp',
      from: '4000',
      life: '5 Days'
    },
    {
      id: 6,
      img: 'https://images.unsplash.com/photo-1618413516603-d33a4e56c8a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80',
      titleheading: 'Brahmatal Trek',
      from: '5500',
      life: '5 Days'
    },
    {
      id: 7,
      img: 'https://images.unsplash.com/photo-1561438808-deaffc7298a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3057&q=80',
      titleheading: 'Marvellous Matheran',
      from: '15000',
      life: '11 Days'
    },
    {
      id: 8,
      img: 'https://images.unsplash.com/photo-1612438214708-f428a707dd4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3174&q=80',
      titleheading: 'Kedarnath & Chopta-Tungnath',
      from: '16000',
      life: '8 Days'
    },
    {
      id: 9,
      img: 'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80',
      titleheading: 'Snow Trekking in Dalhousie',
      from: '20000',
      life: '9 Days'
    },
    {
      id: 10,
      img: 'https://images.unsplash.com/photo-1634360826214-d598b69b5918?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3132&q=80',
      titleheading: 'Magical Maharashtra',
      from: '3450',
      life: '3 Days'
    },
    {
      id: 11,
      img: 'https://images.unsplash.com/photo-1666189530339-ccaa7f876720?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3174&q=80',
      titleheading: 'Varso Heritage Walk',
      from: '1000',
      life: '1 Days'
    }
  ]

  onNavigateEvent(tripDetail : TripHeaderModel)
  {
    console.log(tripDetail);
    this.router.navigateByUrl("/event-detail")
  }


}
