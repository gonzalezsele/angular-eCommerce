import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  releases: any []

  constructor () {
  this.releases = [
  { 
  "id": "1", 
  "title": "Court of Serpents and Secrets", 
  "author": "Eliza Raine", 
  "publishedDate": "September 1, 2023", 
  "image": "./assets/images/releases/cover-006.png",
  "price": "17.47",
  "reduced_price": "18.99"
  },
  { 
  "id": "2", 
  "title": "Assistant to the Villain", 
  "author": "Nicole Maehrer", 
  "publishedDate": "September 5, 2023", 
  "image": "./assets/images/releases/cover-005.png",
  "price": "8.27",
  "reduced_price": "8.99"
  },
  { 
  "id": "3", 
  "title": "Fall of Ruin and Wrath", 
  "author": "Jennifer L. Armentrout", 
  "publishedDate": "September 12, 2023", 
  "image": "./assets/images/releases/cover-004.png",
  "price": "17.99",
  "reduced_price": "20.00"
  },
  { 
  "id": "4", 
  "title": "Vows & Ruins", 
  "author": "Helen Scheuerer", 
  "publishedDate": "September 21, 2023", 
  "image": "./assets/images/releases/cover-003.png",
  "price": "13.99",
  "reduced_price": "18.99"
  },
  { 
  "id": "5", 
  "title": "The Chalice of the Gods", 
  "author": "Rick Riordan", 
  "publishedDate": "September 26, 2023", 
  "image": "./assets/images/releases/cover-002.png",
  "price": "11.99",
  "reduced_price": "16.99"
  },
  { 
  "id": "6", 
  "title": "The Fragile Threads of Power", 
  "author": "V.E. Schwab", 
  "publishedDate": "September 26, 2023", 
  "image": "./assets/images/releases/cover-001.png",
  "price": "17.47",
  "reduced_price": "18.99"
  }

  ]
  }

}
