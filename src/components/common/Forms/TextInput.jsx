import classNames from "classnames";
import { asField } from "informed";
import React from "react";
import "./GlobalFormStyle.scss";

export const TextInput = asField(
    ({ fieldState, fieldApi, faClass, ...props }) => {
        const { value } = fieldState;
        const { setValue, setTouched } = fieldApi;
        const {
            field,
            onChange,
            onBlur,
            initialValue,
            forwardedRef,
            className,
            content,
            require,
            ...rest
        } = props;


        return (
            
                <div className="Global_Form_style">
                    <div className="form-group">
                        {faClass && <i className={faClass}></i>}
                        {props.label && (
                            <label htmlFor={field} className="label">
                               
                                {props.label}
                                {require && <i style={{ color: "red" }}>*</i>}
                            </label>
                        )}
                        <div>
                         
                            <input
                                {...rest}
                                id={field}
                                ref={forwardedRef}
                                required={false}
                                value={!value && value !== 0 ? "" : value}
                                className={classNames(`form-control ${className}`, {
                                    "is-invalid": fieldState.error,
                                })}
                                onChange={(e) => {
                                    setValue(e.target.value);
                                    if (onChange) {
                                        onChange(e);
                                    }
                                }} 
                                onBlur={(e) => {
                                    setTouched(true);
                                    if (onBlur) {
                                        onBlur(e);
                                    }
                                }}
                            />
                        </div>

                        {props.helper && (
                            <small className="form-text text-muted">{content}</small>
                        )}
                        {fieldState.error ? (
                            <div className="invalid-field">{fieldState.error}</div>
                        ) : (
                            <div className="valid-field"></div>
                        )}
                    </div>
                </div>
            
        );
    }
);

