import React, { useState } from 'react';
import { AgGridReact } from "ag-grid-react"; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import "./TableComponent.scss";

export const TableComponent = ({ data }) => {
    const [paginationPageSize, setPaginationPageSize] = useState(10);
    const columnDefs = data[0]
        ? Object.keys(data[0]).map((key) => ({ headerName: key, field: key, filter: true }))
        : [];


    const onPaginationPageSizeChanged = (newPageSize) => {
        setPaginationPageSize(newPageSize);
    };

    return (
        <div
            className="ag-theme-quartz"
            style={{ height: 500, width: "100%"}}
        >
            <AgGridReact
                rowData={data}
                columnDefs={columnDefs}
                defaultColDef={{ filter: true }}
                pagination={true}
                paginationPageSize={paginationPageSize}
                onPaginationPageSizeChanged={onPaginationPageSizeChanged}
            ></AgGridReact>
        </div>
    );
};
