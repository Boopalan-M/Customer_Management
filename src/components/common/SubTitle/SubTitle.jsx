import React from "react";
import "./SubTitle.scss";

const SubTitle = ({ heading, isButton, buttonText, onButtonClick }) => {
  return (
    <>
      <div className="Subtitle_Header d-flex flex-wrap justify-content-between align-items-center  w-100 px-1">
        <div className=" mt-2 mb-4 Subtitle_Header_Content">{heading}</div>

        {isButton && (
          <div>
            <button className="Subtitle_Header_Btn btn" onClick={onButtonClick}>
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default SubTitle;
