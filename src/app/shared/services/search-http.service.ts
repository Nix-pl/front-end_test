import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class SearchHttpService {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://api.giphy.com/v1/gifs/search';
  baseUrlAuto = 'https://api.giphy.com/v1/gifs/search/tags';
  uploadUrl = 'https://upload.giphy.com/v1/gifs';
  myApiKey = 'at7qwpkLi5ub4J6vQnPIzzJh6IK5F2aL';
  public getAutoCompl(tag: string): any {
    return this.http.get(this.baseUrlAuto + '?api_key=' + this.myApiKey + '&q=' + tag);
  }
  public getGif(keyWord: string, offset: number = 0): any {
    return this.http.get(this.baseUrl + '?api_key=' + this.myApiKey + '&q=' + keyWord + '&offset=' + offset);
  }
  public setGif(url: string, name: string, tags: string) {
    const formData = new FormData();
    formData.append(name, url);
    const headers = new HttpHeaders({
      'Access-Control-Allow-Methods' : 'POST',
      'Access-Control-Allow-Headers' : 'Content-Type, Authorization'
    });
    const body = {
      'api_key' : this.myApiKey,
      'file' : formData,
      'tags' : tags
    };
    return this.http.post(this.uploadUrl, body, {
      headers: headers
    });
  }
}
