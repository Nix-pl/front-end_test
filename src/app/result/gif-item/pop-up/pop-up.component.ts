import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {AuthService} from '../../../shared/services/auth.service';
import {LocalStorageService} from '../../../shared/services/local-storage.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  @Input() isOpen;
  @Input() gif;
  @Output() btnClose = new EventEmitter();
  constructor(private logIn: AuthService, private local: LocalStorageService) { }

  ngOnInit() {
  }

  public onClose() {
    this.btnClose.emit();
  }

  public addToCollection() {
    if (this.logIn.userIsLogIn === true) {
      this.local.addGif(this.gif);
    } else {
      alert('Enter your name, please!');
    }
  }
}
