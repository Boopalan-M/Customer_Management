import { Form } from "informed";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../../common.scss";
import { TextInput } from "../../common/Forms/TextInput";
import SubTitle from "../../common/SubTitle/SubTitle";
import { validateProperty } from "../../common/Validation/JoiValidation";
import { addContact, updateContact } from "../../../services/ContactService";
import { showNotification } from "../../common/Methods/index";
const ContactForm = ({ formType, editState, ...props }) => {
  console.log(formType, "check formtypre");

  const formApiRef = useRef();

  const navigateTo = useNavigate();
  useEffect(() => {}, []);
  console.log(editState, "editState");

  const setFormApi = (formApi) => {
    formApiRef.current = formApi;
  };

  const submitHandler = async () => {
    if (formType === "Update") {
      updateContactHandler();
    } else if (formType === "Add" || formType === "Duplicate") {
      addContactHandler();
    }
  };

  const addContactHandler = async () => {
    let formatData = formApiRef.current.getValues();

    console.log(formatData, "checkformdata");

    let data = {
      contact_name: formatData.contact_name,
      customer_name: formatData.customer_name,
      company_name: formatData.company_name,
      email: formatData.email,
      first_name: formatData.first_name,
      last_name: formatData.last_name,
      phone: formatData.phone,
      website: formatData.website,
      mobile: formatData.mobile,
    };
    const apiResponse = await addContact(data);

    console.log(apiResponse, "checking API response");
    if (apiResponse.status === 201) {
      showNotification({
        title: apiResponse.data?.response || "Data Added Successfully",
        variant: "success",
      });
      navigateTo(`/home/list`);
    } else {
      showNotification({
        title: apiResponse?.data?.response || "Data not added",
        variant: "error",
      });
    }

    // axios
    //   .post("https://invoice.zoho.in/api/v3/contacts", data, {
    //     headers: {
    //       Authorization: `Zoho-oauthtoken 1000.8d9f65815f421973304f6ef2f6a0a04f.71cc3cfd49d7e0c6ada3bdeb8f963962`,
    //       organizationid: 60016244602,
    //       // "access-control-allow-origin" : "*",
    //       // "Content-type": "application/json; charset=UTF-8"
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };
  const updateContactHandler = async () => {
    let formatData = formApiRef.current.getValues();
    let data = {
      contact_name: formatData.contact_name,
      customer_name: formatData.customer_name,
      company_name: formatData.company_name,
      email: formatData.email,
      first_name: formatData.first_name,
      last_name: formatData.last_name,
      phone: formatData.phone,
      website: formatData.website,
      mobile: formatData.mobile,
      id: editState.id,
    };
    const apiResponse = await updateContact(data);

    console.log(apiResponse, "checking API response");
    if (apiResponse.status === 200) {
      showNotification({
        title: "Data Updated Successfully",
        variant: "success",
      });
      navigateTo(`/home/list`);
    } else {
      showNotification({ title: "Data not added", variant: "error" });
    }
  };

  return (
    <div className="Contact_Master_Form">
      <SubTitle heading={`${formType} Contact Form`} />

      <div className="mt-4">
        <Form
          getApi={setFormApi}
          onSubmit={submitHandler}
          initialValues={
            formType === "Update" || formType === "Duplicate" ? editState : {}
          }
        >
          
            
              <div className="row" style={{ marginLeft: "20px" }}>
                <div className="col-md-3 my-2">
                  <TextInput
                    field="first_name"
                    label="First Name"
                    validateOnBlur
                    validate={(e) =>
                      validateProperty(true, "name", e, "First Name")
                    }
                  />
                </div>
                <div className="col-md-3 my-2">
                  <TextInput
                    field="last_name"
                    label="Last Name"
                    require={true}
                    validateOnBlur
                    validate={(e) =>
                      validateProperty(true, "name", e, "Last Name")
                    }
                  />
                </div>
                <div className="col-md-3 my-2">
                  {" "}
                  <TextInput
                    field="contact_name"
                    label="contact Name"
                    require={true}
                    validateOnBlur
                    validate={(e) =>
                      validateProperty(true, "name", e, "contact Name")
                    }
                  />
                </div>
              </div>

              <div className="row" style={{ marginLeft: "20px" }}>
                <div className="col-md-3 my-2">
                  {" "}
                  <TextInput
                    field="customer_name"
                    label="customer Name"
                    require={true}
                    validateOnBlur
                    validate={(e) =>
                      validateProperty(true, "name", e, "customer Name")
                    }
                  />
                </div>
                <div className="col-md-3 my-2">
                  {" "}
                  <TextInput
                    field="company_name"
                    label="Company Name"
                    require={true}
                    validateOnBlur
                    validate={(e) =>
                      validateProperty(true, "name", e, "Company Name")
                    }
                  />
                </div>

                <div className="col-md-3 my-2">
                  <TextInput
                    field="website"
                    label="website"
                    require={true}
                    validateOnBlur
                    validate={(e) =>
                      validateProperty(true, "name", e, "website")
                    }
                  />
                </div>
              </div>
              <div className="row" style={{ marginLeft: "20px" }}>
                <div className="col-md-3 my-2">
                  <TextInput
                    field="email"
                    label="Email"
                    require={true}
                    validateOnBlur
                    validate={(e) => validateProperty(true, "name", e, "email")}
                  />
                </div>

                <div className="col-md-3 my-2">
                  <TextInput
                    type="number"
                    field="phone"
                    label="phone"
                    mode="number"
                    validateOnBlur
                    validate={(e) =>
                      validateProperty(true, "number", e, "phone")
                    }
                  />
                </div>
                <div className="col-md-3 my-2">
                  <TextInput
                    type="number"
                    field="mobile"
                    label="Mobile"
                    mode="number"
                    validateOnBlur
                    validate={(e) =>
                      validateProperty(true, "number", e, "Mobile")
                    }
                  />
                </div>
              </div>
              <div className="d-flex justify-content-end mt-5">
                <button
                  type="submit"
                  style={{ marginRight: "20px" }}
                  className="btn form_primary_btn mx-4 px-4 py-2"
                >
                  {formType}
                </button>
                <button
                  className="btn form_secondary_btn px-4 py-2"
                  style={{ marginRight: "20px" }}
                  onClick={() => navigateTo(`/home/list`)}
                >
                  Cancel
                </button>
              </div>
         
        
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
