import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],
})
export class TableComponent implements OnInit {
  @Input("enableUserSelect") enableUserSelect: boolean = false;
  @Input("textAlign") textAlign: string = "center";
  @Input("data") data: tableData = {
    enableEditButton: false,
    enableDeleteButton: false,
    headers: [],
    rows: [],
  };

  defaultFunction = (rowData: rowProperties) => {};

  @Input("editFunction") editFunction: TableFunction = this.defaultFunction;
  @Input("deleteFunction") deleteFunction: TableFunction = this.defaultFunction;

  constructor() {}

  ngOnInit(): void {}

  copyValueToClipboard(value: any): void {
    navigator.clipboard.writeText(value);
  }
}

export type TableFunction = (rowData: rowProperties) => void;

export type tableData = {
  enableEditButton: boolean;
  enableDeleteButton: boolean;
  headers: headerProperties[];
  rows: rowProperties[];
};

export type headerProperties = {
  columnText: string;
  columnAlignment: string;
  width: string;
  enableCopyButton: boolean;
  enableOverflow: boolean;
};

/// action is blyat
export type rowProperties = {
  textFields: string[];
  // editFunction: Function;
  // deleteFunction: Function;
};
