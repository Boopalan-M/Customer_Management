import { Form } from "informed";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../../common.scss";
import {
  addContact,
  updateContact,
  deleteContact,
} from "../../../services/ContactService";

import { TextInput } from "../../common/Forms/TextInput";
import { showNotification } from "../../common/Methods/index";
import SubTitle from "../../common/SubTitle/SubTitle";
import { validateProperty } from "../../common/Validation/JoiValidation";
const ContactForm = ({ formType, editState, ...props }) => {
  console.log(editState, "checking editState");
  const formApiRef = useRef();

  const navigateTo = useNavigate();
  useEffect(() => {}, []);

  const setFormApi = (formApi) => {
    formApiRef.current = formApi;
  };

 

  const submitHandler = async () => {
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
      id: editState?editState.id:"",
    };
    if (formType === "Update") {
      const apiResponse = await updateContact(data);
      if (apiResponse.status === 200) {
        showNotification({
          title: "Data Updated Successfully",
          variant: "success",
        });
        navigateTo(`/home/view`);
      } else {
        showNotification({ title: "Data not added", variant: "error" });
      }
    }else{
      const apiResponse = await addContact(data);
      if (apiResponse.status === 201) {
        showNotification({
          title: "Data Added Successfully",
          variant: "success",
        });
        navigateTo(`/home/list`);
      } else {
        showNotification({
          title:  "Data not added",
          variant: "error",
        });
      }
    }

  };

  const deleteContactList = async (row) => {
    const apiResponse = await deleteContact(row);
    if (apiResponse.status === 200) {
      showNotification({
        title: "Data Deleted Successfully",
        variant: "success",
      });

      navigateTo(`/home/view`);
    }
  };

  return (
    <div className="Contact_Master_Form">
      {formType === "View" ? (
        <SubTitle
          heading={`${formType} Contact Form`}
          isButton={true}
          buttonText="Go Back"
          onButtonClick={() => navigateTo(`/home/list`)}
        />
      ) : (
        <SubTitle heading={`${formType} Contact Form`} />
      )}

      <div className="mt-4">
        <div className={`mt-4 ${formType === "View" ? "mask_view" : ""}`}>
          <Form
            getApi={setFormApi}
            onSubmit={submitHandler}
            initialValues={
              formType === "Update" ||
              formType === "Duplicate" ||
              formType === "View"
                ? editState
                : {}
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
                  validate={(e) => validateProperty(true, "name", e, "website")}
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
                  validate={(e) => validateProperty(true, "number", e, "phone")}
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
            {formType !== "View" && (
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
            )}
          </Form>
        </div>

        {formType === "View" && (
          <div className="d-flex justify-content-end mt-5">
            <button
              type="submit"
              style={{ marginRight: "5px" }}
              className="btn form_primary_btn  px-4 py-2"
              onClick={() => navigateTo(`/home/update`, { state: editState })}
            >
              Edit
            </button>
            <button
              className="btn form_primary_btn  px-4 py-2"
              style={{ marginRight: "5px" }}
              onClick={() =>
                navigateTo(`/home/duplicate`, { state: editState })
              }
            >
              Duplicate
            </button>
            <button
              className="btn btn-danger  px-4 py-2"
              style={{ marginRight: "5px" }}
              onClick={() => deleteContactList(editState)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
