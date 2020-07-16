import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';

@Injectable()
export class LocalStorageService {
  constructor(private logIn: AuthService) {}

  public getGifs() {
    const userName = this.logIn.userName;
    const localStorageGif = JSON.parse(localStorage.getItem(userName));
    return localStorageGif == null ? [] : localStorageGif;
  }

  private setLocalStorage(gifData: any) {
    const userName = this.logIn.userName;
    localStorage.setItem(userName, JSON.stringify(gifData));
  }

  public addGif (gifData) {
    const gifs = this.getGifs();
    const check = gifs.find(el => el.id === gifData.id);
    if (!check) {
      gifs.push(gifData);
    }
    this.setLocalStorage(gifs);
  }


  public deleteGif (id: string) {
    let gifs = this.getGifs();
    gifs = gifs.filter((el) => el.id !== id);
    this.setLocalStorage(gifs);
  }


}
