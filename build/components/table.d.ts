import { Components } from "gd-bs";
import { Base } from "./base";
export declare class Table extends Base<Components.ITable> {
    columns: Array<Components.ITableColumn>;
    onClickCell: (el: HTMLTableDataCellElement, column?: Components.ITableColumn, data?: any) => void;
    onClickHeader: (el: HTMLTableHeaderCellElement, column?: Components.ITableColumn) => void;
    onRenderCell: (el: HTMLTableDataCellElement, column?: Components.ITableColumn, data?: any) => void;
    onRenderHeaderCell: (el: HTMLTableDataCellElement, column?: Components.ITableColumn) => void;
    onRenderHeaderRow: (el: HTMLTableRowElement) => void;
    onRenderRow: (el: HTMLTableRowElement) => void;
    rows: Array<any>;
    constructor();
}
