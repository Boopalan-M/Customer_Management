import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../common.scss";
import {
  getContactList
} from "../../../services/ContactService";
import SubTitle from "../../common/SubTitle/SubTitle";
import Table from "../../common/Table/Table";
const ContactList = ({formType, editState, ...props} ) => {
  const [columns, setColumns] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const [contactsList, setContactsList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [drawerrow,setDrawerrow] = useState({})
  const navigateTo = useNavigate();
  useEffect(() => {
    ContactList();
    initialData();
  }, []);

  const ContactList = async () => {
    const apiResponse = await getContactList();
    
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
      
    ];
    let def = {
      contact_name: {
        dataField: "contact_name",
        text: "contact_name",
        sort: true,
        formatter: sidedrawrformatter,
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
      
    };

    let columns = [];
    _.forEach(keys, (key) => {
      columns.push({ ...def[key] });
    });
    return columns;
  };
  const sidedrawrformatter = (cell, row, rowIndex) => {
   
    let links = [];
    links.push(row.contact_name);

    return (
      <div
        className="text-center"
        style={{ cursor: "pointer" }}
        onClick={() =>
          navigateTo(`/home/view`,{ state: row })
        }
        // onClick={() => showDrawer(row)}
      >
        {links.concat(" ")}
      </div>
    );
  };
 
  // const deleteContactList = async (row) => {
  //   const apiResponse = await deleteContact(row);
  //   if (apiResponse.status === 200) {
  //     showNotification({
  //       title: "Data Deleted Successfully",
  //       variant: "success",
  //     });
  //     await ContactList();
  //     onClose();
  //     navigateTo(`/home/list`);
  //   }
   
  // };

  // const showDrawer = (row) => {
  
  //   setDrawerrow(row)
  //   setVisible(true);
  // };

  // const onClose = () => {
  //   setVisible(false);
  // };

  return (
    <div className="Contact_List">
      <SubTitle
        heading={`Contacts List`}
        isButton={true}
        buttonText="+ Add Contacts"
        onButtonClick={() => navigateTo(`/home/add`)}
      />
      {/* <Drawer
        title="View Details"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
      
        <div  className="px-4 py-2">
          <span>Contact Name&nbsp;:&nbsp;</span>
          <span>{drawerrow?.contact_name}</span>
        </div>
        <div  className="px-4 py-2">
          <span>Customer Name&nbsp;:&nbsp;</span>
          <span>{drawerrow?.customer_name}</span>
        </div>
        <div  className="px-4 py-2">
          <span>Company Name&nbsp;:&nbsp;</span>
          <span>{drawerrow?.company_name}</span>
        </div>
        
        <div  className="px-4 py-2">
          <span>Email&nbsp;:&nbsp;</span>
          <span>{drawerrow?.email}</span>
        </div>
        <div  className="px-4 py-2">
          <span>Mobile&nbsp;:&nbsp;</span>
          <span>{drawerrow?.mobile}</span>
        </div>
        <div  className="px-4 py-2">
          <span>Phone&nbsp;:&nbsp;</span>
          <span>{drawerrow?.phone}</span>
        </div>
        <div  className="px-4 py-2">
          <span>website&nbsp;:&nbsp;</span>
          <span>{drawerrow?.website}</span>
        </div>
      
        <div className="d-flex justify-content-end mt-5">
                <button
                  type="submit"
                  style={{ marginRight: "5px" }}
                  className="btn form_primary_btn  px-4 py-2"
                  onClick={() => navigateTo(`/home/update`, { state: drawerrow })}
                >
                  Edit 
                </button>
                <button
                  className="btn form_primary_btn  px-4 py-2"
                  style={{ marginRight: "5px" }}
                  onClick={() => navigateTo(`/home/duplicate`, { state: drawerrow })}
                >
                  Duplicate
                </button>
                <button
                  className="btn btn-danger  px-4 py-2"
                  style={{ marginRight: "5px" }}
                  onClick={() => deleteContactList(drawerrow)}
                >
                  Delete
                </button>
              </div>
      </Drawer> */}
      <div>
        {!isLoading && columns.length > 0 && (
          <Table keyField="SlNo" data={contactsList} columns={columns} />
        )}
      </div>
    </div>
  );
};
export default ContactList;
