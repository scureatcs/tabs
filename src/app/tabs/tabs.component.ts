import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [TabComponent, NgFor],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  /**
   * Pass either the title or index of the tab you want to be active by default
   */
  @Input() defaultTabId: number | string = 0;

  /* careful with the ! */
  public activeTab!: TabComponent;

  selectTab(tab: TabComponent): void {
    if (this.activeTab === tab) {
      return;
    }

    if (this.activeTab) {
      this.activeTab.isActive = false;
    }

    this.activeTab = tab;
    tab.isActive = true;
  }

  constructor() {}

  ngAfterContentInit(): void {
    if (typeof this.defaultTabId === 'string') {
      // console.log(this.tabs.toArray());
      const activeTab = this.tabs.find((t) => t.title === this.defaultTabId);
      this.activeTab = activeTab || this.tabs.first;
      this.activeTab.isActive = true;
    } else if (typeof this.defaultTabId === 'number') {
      const activeTab = this.tabs.get(this.defaultTabId);
      this.activeTab = activeTab || this.tabs.first;
      this.activeTab.isActive = true;
    }
  }
}
