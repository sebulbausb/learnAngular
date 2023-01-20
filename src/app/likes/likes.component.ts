import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss'],
})
export class LikesComponent implements OnInit {
  @Input('isActive') isActive: boolean = false;
  @Input('likesCount') likesCount: number = 0;
  @Output('like') click = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
    // this.click.emit({ isliked: this.isliked, likesCount: this.likesCount });
  }
}

export interface LikeChangedEventArgs {
  isliked: boolean;
  likesCount: number;
}
