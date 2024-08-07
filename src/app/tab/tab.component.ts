import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [NgIf],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css'
})
export class TabComponent {
    isActive = false;
    @Input() title!: string;
    constructor() {}
}
