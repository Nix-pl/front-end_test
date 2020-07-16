import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-gif-item',
  templateUrl: './gif-item.component.html',
  styleUrls: ['./gif-item.component.scss']
})
export class GifItemComponent implements OnInit {

  @Input() gifItem: any;
  popUpOpen = false;

  constructor(private logIn: AuthService, private local: LocalStorageService) { }

  ngOnInit() {
  }

  public gifClicked() {
    this.popUpOpen = true;
  }

  public isClosed() {
    this.popUpOpen = false;
  }
  public addToCollection() {
    if (this.logIn.userIsLogIn === true) {
      this.local.addGif(this.gifItem);
    } else {
      alert('LogIn plz');
    }
  }


}
