import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent{

  public active : boolean = false

  constructor() {}
  ngOnInit(): void {}

  setActive() : void {
    this.active = !this.active
  }

}
