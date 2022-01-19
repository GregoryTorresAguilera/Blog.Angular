import { Image } from 'src/app/shared/models/shared';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
@Input() public image!: Image;

  constructor() { }

  ngOnInit(): void {
  }

}
