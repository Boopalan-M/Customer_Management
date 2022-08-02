import React,{ useState, useEffect } from 'react';
import Table from "./Table";

import _ from "lodash";

const ExampleTable = () => {
    const [columns, setColumns] = useState([]);


    const data = [
      {
        SlNo: 1,
        Name: "Harry",
        LastName: "Potter",
      },
      {
        SlNo: 2,
        Name: "Ron",
        LastName: "Weasly",
      },
      {
        SlNo: 3,
        Name: "Hermoine",
        LastName: "Granger",
      },
      {
        SlNo: 4,
        Name: "Harry",
        LastName: "Potter",
      },
      {
        SlNo: 5,
        Name: "Ron",
        LastName: "Weasly",
      },
      {
        SlNo: 6,
        Name: "Hermoine",
        LastName: "Granger",
      },
      {
        SlNo: 7,
        Name: "Harry",
        LastName: "Potter",
      },
      {
        SlNo: 8,
        Name: "Ron",
        LastName: "Weasly",
      },
      {
        SlNo: 9,
        Name: "Hermoine",
        LastName: "Granger",
      },
      {
        SlNo: 10,
        Name: "Harry",
        LastName: "Potter",
      },
      {
        SlNo: 11,
        Name: "Ron",
        LastName: "Weasly",
      },
      {
        SlNo: 12,
        Name: "Hermoine",
        LastName: "Granger",
      },
      {
        SlNo: 13,
        Name: "Harry",
        LastName: "Potter",
      },
      {
        SlNo: 14,
        Name: "Ron",
        LastName: "Weasly",
      },
      {
        SlNo: 15,
        Name: "Hermoine",
        LastName: "Granger",
      },
      {
        SlNo: 16,
        Name: "Harry",
        LastName: "Potter",
      },
      {
        SlNo: 17,
        Name: "Ron",
        LastName: "Weasly",
      },
      {
        SlNo: 18,
        Name: "Hermoine",
        LastName: "Granger",
      },
      {
        SlNo: 19,
        Name: "Harry",
        LastName: "Potter",
      },
      {
        SlNo: 20,
        Name: "Ron",
        LastName: "Weasly",
      },
      {
        SlNo: 21,
        Name: "Hermoine",
        LastName: "Granger",
      },
      {
        SlNo: 22,
        Name: "Harry",
        LastName: "Potter",
      },
      {
        SlNo: 23,
        Name: "Ron",
        LastName: "Weasly",
      },
      {
        SlNo: 24,
        Name: "Hermoine",
        LastName: "Granger",
      },
      {
        SlNo: 25,
        Name: "Harry",
        LastName: "Potter",
      },
      {
        SlNo: 26,
        Name: "Ron",
        LastName: "Weasly",
      },
      {
        SlNo: 27,
        Name: "Hermoine",
        LastName: "Granger",
      },
      {
        SlNo: 28,
        Name: "Harry",
        LastName: "Potter",
      },
      {
        SlNo: 29,
        Name: "Ron",
        LastName: "Weasly",
      },
      {
        SlNo: 30,
        Name: "Hermoine",
        LastName: "Granger",
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
      let keys = ["SlNo", "Name", "LastName"];
      let def = {
        SlNo: { dataField: "SlNo", text: "Sl.No", sort: true },
        Name: {
          dataField: "Name",
          text: "First Name",
        },
        LastName: {
          dataField: "LastName",
          text: "Last Name",
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