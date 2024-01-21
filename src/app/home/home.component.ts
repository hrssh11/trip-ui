import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: any[] = [
    {
      category: 'family',
      src: 'assets/images/familytrip.jpeg',
      title: 'Family Trip'
    },
    {
      category: 'group',
      src: 'assets/images/groptrip.jpeg',
      title: 'Group Trip'
    },
    {
      category: 'hiking',
      src: 'assets/images/hiking.jpeg',
      title: 'Hiking Trip'
    },
    {
      category: 'road',
      src: 'assets/images/roadtrip.jpeg',
      title: 'Road Trip'
    },
    {
      category: 'cruises',
      src: 'assets/images/cruises.jpeg',
      title: 'Cruises Trip'
    },
    {
      category: 'cultural',
      src: 'assets/images/culturaltrip.jpeg',
      title: 'Cultural Trip'
    },

  ]
  constructor() {

  }
  ngOnInit(): void {
  }
}


