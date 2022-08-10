import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { PRIMARY } from "../../utility/Constants";

const CustomTemplate = props => {
    const { isHeader, status, modalHandleOpen } = props;

    const determineStatus = () => {
        let basic = "page"
        if(status==PRIMARY)
        {
            basic+=' primary-bg'
        }else{
            basic+=' secondary-bg'
        }
        return basic
    }

    return (
        <div className={determineStatus()}>
            {isHeader && <Header handleSearch={modalHandleOpen} />}
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default CustomTemplate;