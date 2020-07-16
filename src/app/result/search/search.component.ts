import {Component, EventEmitter, OnDestroy, OnInit, Output, HostListener} from '@angular/core';
import {Subscription} from 'rxjs/index';
import {SearchHttpService} from '../../shared/services/search-http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  inputSearch = '';
  getTagList: Subscription;
  getGifList: Subscription;
  tagsArr = [];
  offset = 0;
  @Output() SearchGifs = new EventEmitter();
  @Output() LoadByScroll = new EventEmitter();

  constructor(private http: SearchHttpService) { }

  ngOnInit() {
  }

  public onKeyUp(event: Event) {
    const tagValue = (<HTMLInputElement>event.target).value;
    this.inputSearch = tagValue;
    if (this.inputSearch !== '') {
      this.getTagList = this.http.getAutoCompl(tagValue)
        .subscribe(e => {
          this.tagsArr = e.data;
        });
    } else {
      this.tagsArr = [];
    }
  }
  public setTag(tagName: string) {
    this.inputSearch = tagName;
    this.tagsArr = [];
  }
  public onSearch() {
    this.offset = 0;
    this.getGifList = this.http.getGif(this.inputSearch)
      .subscribe(e => {
        this.SearchGifs.emit(e.data);
      });
  }
  @HostListener('window:scroll', ['$event']) onWindowScroll(event: Event) {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.clientHeight;
    const max = document.documentElement.scrollHeight;
    if (pos === max )   {
      this.offset += 25;
      this.http.getGif(this.inputSearch, this.offset)
        .subscribe(e => {
          this.LoadByScroll.emit(e.data);
        });
    }
  }
  ngOnDestroy() {
    if (this.getTagList) {
      this.getTagList.unsubscribe();
    }
    if (this.getGifList) {
      this.getGifList.unsubscribe();
    }
  }
}
