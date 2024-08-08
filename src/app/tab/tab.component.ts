import { NgIf } from '@angular/common';
import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [NgIf],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css',
})
export class TabComponent {
  @Input() title = "";
  @ViewChild('template') template!: TemplateRef<any>;
  constructor() {}
}
