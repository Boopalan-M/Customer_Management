import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import "./Table.scss";

const { SearchBar } = Search;



const Table = ({ keyField, data, columns,...rest }) => {
  return (
    <>
    <div className="react_next_table_wrapper">
        {data && columns &&

       
    <ToolkitProvider
        keyField={keyField}
        data={data}
        columns={columns}
        search={{ searchFormatted: true }}
      >
        {(props) => (
          <>
            {/* {
              <div className="d-flex justify-content-start w-100 px-1">
                <div className=" mt-2 mb-4">
                  <SearchBar
                    className="searchbarInput"
                    srText = ""
                    {...props.searchProps}
                  />
                </div>
              </div>
            } */}

            <div className="react_table_wrapperclass_div">
              <BootstrapTable
                keyField={keyField}
                data={data}
                columns={columns}
                {...props.baseProps}
                bootstrap4
                pagination={paginationFactory()}
                defaultSortDirection="asc"
                striped
                hover
                condensed
                classes="table table-bordered table-hover"
                wrapperClasses="react_table_wrapperclass table-responsive"
                noDataIndication={
                  <span className="table_nodata_txt">
                    No data to display here : (
                  </span>
                }
              />
            </div>
          </>
        )}
      </ToolkitProvider>}
    </div>
    </>
  );
};

export default Table;
