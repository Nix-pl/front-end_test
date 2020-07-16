import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  gifsArr = [];
  constructor() { }

  ngOnInit() {
  }

  public loadGifsList(gifsArr) {
    this.gifsArr = gifsArr;
  }

  public updateGifsList(gifsAdd) {
    this.gifsArr = this.gifsArr.concat(gifsAdd);
  }
}
