import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  template: '',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  public emailInput = 'me@example.com';
  public logThis = this.capFirst('');
  @Input('is-favorite') isFavorite: boolean = false;
  @Output('change') click = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log(this.logThis);
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.click.emit({ newValue: this.isFavorite });
  }

  public isString(word: string): boolean {
    return word === '';
  }

  public splitAndArray(word: string): string[] {
    return word.split(' ');
  }

  public truncateString(word: string, limit = 0): string {
    return word.substring(limit);
  }

  public abbreviateString(word: string): string {
    let splited = word.trim().split(' ');
    if (splited.length > 1) {
      return splited[0] + ' ' + splited[1].charAt(0) + '.';
    }
    return splited[0];
  }

  public prettyUrl(word: string): string {
    return word.split(' ').join('-').toLowerCase();
  }

  public capFirst(word: string): string {
    return word.charAt(0).toUpperCase() + word.substring(1, word.length);
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
