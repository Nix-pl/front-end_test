import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.scss']
})
export class MyCollectionComponent implements OnInit {

  constructor(private local: LocalStorageService, private logIn: AuthService) { }

  myCollection = [];
  popUpOpen = false;
  clickedGif = {};
  ngOnInit() {
    this.myCollection = this.local.getGifs();
  }
  public isClosed() {
    this.popUpOpen = false;
    this.myCollection = this.local.getGifs();
  }
  public gifClicked(gif) {
    this.popUpOpen = true;
    this.clickedGif = gif;
  }
  public delFromCollection(gifId: string) {
    this.local.deleteGif(gifId);
    this.myCollection = this.local.getGifs();
  }
}
