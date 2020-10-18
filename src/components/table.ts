import { Components } from "gd-bs";
import { Base } from "./base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class Table extends Base<Components.ITable> {
  // Properties
  @Prop(Array) columns: Array<Components.ITableColumn>;
  @Prop(Function) onClickCell: (el: HTMLTableDataCellElement, column?: Components.ITableColumn, data?: any) => void;
  @Prop(Function) onClickHeader: (el: HTMLTableHeaderCellElement, column?: Components.ITableColumn) => void;
  @Prop(Function) onRenderCell: (el: HTMLTableDataCellElement, column?: Components.ITableColumn, data?: any) => void;
  @Prop(Function) onRenderHeaderCell: (el: HTMLTableDataCellElement, column?: Components.ITableColumn) => void;
  @Prop(Function) onRenderHeaderRow: (el: HTMLTableRowElement) => void;
  @Prop(Function) onRenderRow: (el: HTMLTableRowElement) => void;
  @Prop(Array) rows: Array<any>;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.Table;
  }
}