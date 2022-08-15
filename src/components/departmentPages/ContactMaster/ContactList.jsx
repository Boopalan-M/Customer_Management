import React, { useEffect, useState } from "react";
import { IoMdCreate } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import SubTitle from "../../common/SubTitle/SubTitle";
import {HiDuplicate} from "react-icons/hi";
import {
  getContactList,
  deleteContact,
} from "../../../services/ContactService";
import Table from "../../common/Table/Table";

import _ from "lodash";
import { showNotification } from "../../common/Methods/index";
const ContactList = () => {
  const [columns, setColumns] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const [contactsList, setContactsList] = useState([]);

  const navigateTo = useNavigate();
  useEffect(() => {
    ContactList();
    initialData();
  }, []);

  const ContactList = async () => {
    const apiResponse = await getContactList();
    console.log(apiResponse, "checking Apiresponse");
    let contactListData = [];
    if (apiResponse?.status === 200 && apiResponse?.data?.length > 0) {
      contactListData = apiResponse?.data?.map((list, index) => {
        list["SlNo"] = index + 1;
        return list;
      });
      setContactsList(contactListData);
    } else {
      setContactsList([]);
    }

    // axios.get("https://invoice.zoho.in/api/v3/contacts",
    //     {
    //       headers: {
    //        //"organizationid":"60016244602",
    //         "Authorization": `Zoho-oauthtoken 1000.8d9f65815f421973304f6ef2f6a0a04f.71cc3cfd49d7e0c6ada3bdeb8f963962`,
    //         // "access-control-allow-origin": "*",
    //         // "Content-type": "application/json; charset=UTF-8",
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };
  const initialData = async () => {
    await initTableData();

    setLoading(false);
  };

  const initTableData = async () => {
    let columnsData = await getColumnHeaders();
    setColumns(columnsData);
  };

  const getColumnHeaders = () => {
    let keys = [
      "contact_name",
      "company_name",
      "website",
      "mobile",
      "edit",
      "status",
      "Duplicate"
    ];
    let def = {
      contact_name: {
        dataField: "contact_name",
        text: "contact_name",
        sort: true,
      },
      company_name: {
        dataField: "company_name",
        text: "company_name",
      },
      website: {
        dataField: "website",
        text: "Website",
      },
      mobile: {
        dataField: "mobile",
        text: "Mobile",
      },
      edit: {
        dataField: "edit",
        text: "Edit",
        formatter: editFormatter,
      },
      status: {
        dataField: "activeStatus",
        text: "Status",
        formatter: deleteFormatter,
      },
      Duplicate:{
        dataField: "activeStatus",
        text: "Duplicate",
        formatter: DuplicateFormatter,
      }
    };

    let columns = [];
    _.forEach(keys, (key) => {
      columns.push({ ...def[key] });
    });
    return columns;
  };

  const editFormatter = (cell, row) => {
    console.log(row, "checking row");
    let links = [];
    links.push(
      <IoMdCreate
        title="Edit"
        className="table_icon"
        onClick={() => navigateTo(`/home/update`, { state: row })}
      />
    );
    return <div className="text-center">{links.concat(" ")}</div>;
  };
  const deleteFormatter = (cell, row, rowIndex) => {
    let links = [];
    links.push(
      <AiFillDelete
        title="Delete"
        className="table_icon"
        onClick={() => deleteContactList(row)}
      />
    );
    return <div className="text-center">{links.concat(" ")}</div>;
  };
const DuplicateFormatter = (cell,row,rowIndex) =>{
  let links = [];
  links.push(
    <HiDuplicate
      title="Duplicate"
      className="table_icon"
      onClick={() => navigateTo(`/home/duplicate`, { state: row })}
    />
  );
  return <div className="text-center">{links.concat(" ")}</div>;
}
  const deleteContactList = async (row) => {
    const apiResponse = await deleteContact(row);
    if (apiResponse.status === 200) {
      showNotification({
        title: "Data Deleted Successfully",
        variant: "success",
      });
      navigateTo(`/home/list`);
    }
    console.log(apiResponse, "checkinggg");
  };

  return (
    <div className="Contact_List">
      <SubTitle
        heading={`Contacts List`}
        isButton={true}
        buttonText="+ Add Contacts"
        onButtonClick={() => navigateTo(`/home/add`)}
      />

      <div>
        {!isLoading && columns.length > 0 && (
          <Table keyField="SlNo" data={contactsList} columns={columns} />
        )}
      </div>
    </div>
  );
};
export default ContactList;
