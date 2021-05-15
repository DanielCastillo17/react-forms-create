import React from 'react';

import './students-table2.style.css'

const StudentsTable2 = (props) => {
    return (
    <div className="students-table2">
         
         <span className = "name2">
             {props.tipeDate.name}
         </span>

        <span className = "sport2">
            {props.tipeDate.sport}
        </span>

        <span className = "gender2">
            {props.tipeDate.gender}
        </span>
         
    </div>
    )
}

export default StudentsTable2;