import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {LocalStorageService} from '../../shared/services/local-storage.service';


@Component({
  selector: 'app-pop-up-collection',
  templateUrl: './pop-up-collection.component.html',
  styleUrls: ['./pop-up-collection.component.scss']
})
export class PopUpCollectionComponent implements OnInit {

  @Input() isOpen;
  @Input() gif;
  @Output() btnClose = new EventEmitter();
  constructor(private local: LocalStorageService) { }

  ngOnInit() {
  }

  public onClose() {
    this.btnClose.emit();
  }

  public delFromCollection(gifId: string) {
    this.local.deleteGif(gifId);
    this.btnClose.emit();
  }
}
