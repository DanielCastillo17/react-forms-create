import React from 'react';

import './students-table.style.css'

const StudentsTable = (props) => {
    return (
    <div className="students-table">
         <span className = "name">
             {props.tipeDate.name}
         </span>

         <span className = "grade">
            {props.tipeDate.grade}
         </span> 

        <span className = "gender">
            {props.tipeDate.gender}
        </span>
         
    </div>
    )
}

export default StudentsTable;