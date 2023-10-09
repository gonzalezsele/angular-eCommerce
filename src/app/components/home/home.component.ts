import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  releases: any []
  boxset: any[]

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
  },
  { 
  "id": "7", 
  "title": "Cage of Dreams", 
  "author": "Rebecca Schaeffer", 
  "publishedDate": "September 26, 2023", 
  "image": "./assets/images/releases/cover-007.png",
  "price": "17.47",
  "reduced_price": "18.99"
  },
  { 
  "id": "8", 
  "title": "Sun of Blood and Ruin", 
  "author": "Mariely Lares", 
  "publishedDate": "September 28, 2023", 
  "image": "./assets/images/releases/cover-008.png",
  "price": "17.47",
  "reduced_price": "18.99"
  },

  ]

  this.boxset = [
    { 
      "id": "1", 
      "title": "Six of Crows Box Set", 
      "author": "Leigh Bardugo", 
      "publishedDate": "Jannuary 1, 2016", 
      "description": "The Six of Crows Series By Leigh Bardugo Collection 2 Books Set.",
      "image": "./assets/images/boxset/cover-001.png",
      "price": "16.99",
      "reduced_price": "14.95"
      },
      { 
      "id": "2", 
      "title": "Shadow and Bone Box Set", 
      "author": "Leigh Bardugo", 
      "publishedDate": "November 1, 2018", 
      "description": "The Grishaverse Series By Leigh Bardugo Collection 3 Books Set.",
      "image": "./assets/images/boxset/cover-002.png",
      "price": "23.97",
      "reduced_price": "15.00"
      },
      { 
      "id": "3", 
      "title": "King of Scars Box Set", 
      "author": "Leigh Bardugo", 
      "publishedDate": "Jannuary 1, 2021", 
      "description": "King of Scars By Leigh Bardugo Collection 2 Books Set.",
      "image": "./assets/images/boxset/cover-003.png",
      "price": "20.99",
      "reduced_price": "17.99"
      },
      { 
      "id": "4", 
      "title": "The Folk of the Air Box Set", 
      "author": "Holly Black", 
      "publishedDate": "Jannuary 1, 2020", 
      "description": "The Folk of the Air Series By Holly Black Collection 3 Books Set.",
      "image": "./assets/images/boxset/cover-004.png",
      "price": "30.10",
      "reduced_price": "23.99"
      },

    ]
  }

}
