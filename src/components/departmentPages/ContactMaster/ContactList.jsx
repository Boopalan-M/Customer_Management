import React, { useEffect, useState } from "react";
import { IoMdCreate } from "react-icons/io";

import SubTitle from "../../common/SubTitle/SubTitle";
import ExampleTable from "../../common/Table/ExampleTable";
import { getContactList } from "../../../services/ContactService";
import Table from "../../common/Table/Table";
const ContactList = () => {
  const [columns, setColumns] = useState([]);

  const [isLoading, setLoading] = useState(true);
  const [contactList, setcontactList] = useState([]);

  useEffect(() => {
    initialData();
  }, []);

  const initialData = async () => {
    await initTableData();

    setLoading(false);
  };

  const initTableData = async () => {
    let columnsData = await getColumnHeaders();
    setColumns(columnsData);
  };

  const getColumnHeaders = async () => {
    let keys = [
      "SlNo",
      "contactname",
      "company_name",
      "email",
      "phone",
      "mobile",
      "edit",
      "status",
    ];
    let def = {
      SlNo: {
        dataField: "SlNo",
        text: "Sl.no",
        sort: true,
      },
      amcName: {
        dataField: "contactname",
        text: "contact_name",
        sort: true,
      },
      amcDescription: {
        dataField: "amcDescription",
        text: "company_name",
      },
      startDate: {
        dataField: "email",
        text: "email",
      },
      endDate: {
        dataField: "phone",
        text: "phone",
      },
      amcLimit: {
        dataField: "mobile",
        text: "mobile",
      },
      edit: {
        dataField: "edit",
        text: "Edit",
        formatter: editFormatter,
      },
      status: {
        dataField: "activeStatus",
        text: "Status",
      },
    };
    let columnsFields = [];

    keys.forEach((key) => {
      columnsFields.push({ ...def[key] });
    });
    return columnsFields;
  };

  const editFormatter = (cell, row) => {
    let links = [];
    links.push(<IoMdCreate title="Edit" className="table_icon" />);
    return <div className="text-center">{links.concat(" ")}</div>;
  };

  return (
    <div className="Contact_List">
     
      <SubTitle
         heading={`Contacts List`}
        isButton={true}
        buttonText="+ Add Contacts"
      />

      <div>
        {!isLoading && columns.length > 0 && (
          <ExampleTable keyField="SlNo" data={contactList} columns={columns} />
        )}
      </div>
    </div>
  );
};
export default ContactList;
