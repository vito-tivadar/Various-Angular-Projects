import { Component, Input, ViewEncapsulation, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "scroll-disabler",
  template: "",
  styleUrls: ["./scroll-disabler.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class ScrollDisablerComponent implements OnChanges {
  @Input("disableScroll") disableScroll: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes["disableScroll"].currentValue == true) {
      document.documentElement.setAttribute("style", "overflow: hidden");
    } else {
      document.documentElement.setAttribute("style", "overflow: auto");
    }
  }
}
