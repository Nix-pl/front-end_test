import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SearchHttpService} from '../shared/services/search-http.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  constructor (public logIn: AuthService, private http: SearchHttpService) {}

  fileInfo: string;
  form: FormGroup;

  onFileSelect(input: HTMLInputElement): void {
    // function formatBytes(bytes: number): string {
    //   const UNITS = ['Bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    //   const factor = 1024;
    //   let index = 0;
    //
    //   while (bytes >= factor) {
    //     bytes /= factor;
    //     index++;
    //   }
    //   return `${parseFloat(bytes.toFixed(2))} ${UNITS[index]}`;
    // }

    const file = input.files[0];
    const fileSize = this.formatBytes(file.size);
    this.fileInfo = `${file.name} (${fileSize})`;
  }
  formatBytes(bytes: number): string {
    const UNITS = ['Bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const factor = 1024;
    let index = 0;

    while (bytes >= factor) {
      bytes /= factor;
      index++;
    }
    return `${parseFloat(bytes.toFixed(2))} ${UNITS[index]}`;
  }
  ngOnInit() {
    this.form = new FormGroup({
      file: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      tags: new FormControl('', Validators.required)
    });
  }

  onSubmin() {
    this.http.setGif(this.form.value.file, this.form.value.name, this.form.value.tags)
      .subscribe(e => {
        console.log(e);
      });
  }
}
