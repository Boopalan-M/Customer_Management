import React,{ useState, useEffect } from 'react';
import Table from "./Table";

import _ from "lodash";

const ExampleTable = () => {
    const [columns, setColumns] = useState([]);


    const data = [
      {
        SlNo: 1,
        contactname: "Harry",
        company_name: "Potter",
      },
      {
        SlNo: 2,
        contactname: "Ron",
        company_name: "Weasly",
      },
      {
        SlNo: 3,
        contactname: "Hermoine",
        company_name: "Granger",
      },
      {
        SlNo: 4,
        contactname: "Harry",
        company_name: "Potter",
      },
      {
        SlNo: 5,
        contactname: "Ron",
        company_name: "Weasly",
      },
      {
        SlNo: 6,
        contactname: "Hermoine",
        company_name: "Granger",
      },
      {
        SlNo: 7,
        contactname: "Harry",
        company_name: "Potter",
      },
      {
        SlNo: 8,
        contactname: "Ron",
        company_name: "Weasly",
      },
      {
        SlNo: 9,
        contactname: "Hermoine",
        company_name: "Granger",
      },
      {
        SlNo: 10,
        contactname: "Harry",
        company_name: "Potter",
      },
      {
        SlNo: 11,
        contactname: "Ron",
        company_name: "Weasly",
      },
      {
        SlNo: 12,
        contactname: "Hermoine",
        company_name: "Granger",
      },
      {
        SlNo: 13,
        contactname: "Harry",
        company_name: "Potter",
      },
      {
        SlNo: 14,
        contactname: "Ron",
        company_name: "Weasly",
      },
      {
        SlNo: 15,
        contactname: "Hermoine",
        company_name: "Granger",
      },
      {
        SlNo: 16,
        contactname: "Harry",
        company_name: "Potter",
      },
      {
        SlNo: 17,
        contactname: "Ron",
        company_name: "Weasly",
      },
      {
        SlNo: 18,
        contactname: "Hermoine",
        company_name: "Granger",
      },
      {
        SlNo: 19,
        contactname: "Harry",
        company_name: "Potter",
      },
      {
        SlNo: 20,
        contactname: "Ron",
        company_name: "Weasly",
      },
      {
        SlNo: 21,
        contactname: "Hermoine",
        company_name: "Granger",
      },
      {
        SlNo: 22,
        contactname: "Harry",
        company_name: "Potter",
      },
      {
        SlNo: 23,
        contactname: "Ron",
        company_name: "Weasly",
      },
      {
        SlNo: 24,
        contactname: "Hermoine",
        company_name: "Granger",
      },
      {
        SlNo: 25,
        contactname: "Harry",
        company_name: "Potter",
      },
      {
        SlNo: 26,
        contactname: "Ron",
        company_name: "Weasly",
      },
      {
        SlNo: 27,
        contactname: "Hermoine",
        company_name: "Granger",
      },
      {
        SlNo: 28,
        contactname: "Harry",
        company_name: "Potter",
      },
      {
        SlNo: 29,
        contactname: "Ron",
        company_name: "Weasly",
      },
      {
        SlNo: 30,
        contactname: "Hermoine",
        company_name: "Granger",
      },
    ];
  
    useEffect(() => {
      initTableData();
    }, []);
  
    const initTableData = () => {
      let columnsdata = getColumnHeaders();
      setColumns(columnsdata);
      console.log(columnsdata, columns);
    };
  
    const getColumnHeaders = () => {
      let keys = ["SlNo", "contactname", "company_name"];
      let def = {
        SlNo: { dataField: "SlNo", text: "Sl.No", sort: true },
        contactname: {
          dataField: "contactname",
          text: "contactname",
        },
        company_name: {
          dataField: "company_name",
          text: "company Name",
        },
      };
  
      let columns = [];
      _.forEach(keys, (key) => {
        columns.push({ ...def[key] });
      });
      return columns;
    };
    return <div>
         {columns.length >0 &&
        <Table keyField="SlNo" data={data} columns={columns}/>
      } 
    </div>;
}


export default ExampleTable;