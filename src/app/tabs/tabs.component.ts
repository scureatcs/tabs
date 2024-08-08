import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [TabComponent, CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
})
export class TabsComponent {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  /**
   * Either the title or index of the tab you want to be active by default
   */
  @Input() defaultTabId: number | string = 0;

  public activeTabIndex: number = 0;

  selectTab(index: number): void {
    if (this.activeTabIndex === index) {
      return;
    }

    this.activeTabIndex = index;
  }

  constructor() {}

  ngAfterContentInit(): void {
    if (typeof this.defaultTabId === 'string') {
      const index = this.tabs
        .toArray()
        .findIndex((tab) => tab.title === this.defaultTabId);
      this.activeTabIndex = index !== -1 ? index : 0;
    } else if (typeof this.defaultTabId === 'number') {
      this.activeTabIndex = this.defaultTabId;
    }
  }
}
