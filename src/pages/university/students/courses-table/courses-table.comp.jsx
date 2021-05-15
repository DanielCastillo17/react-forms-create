import React from 'react';

import './courses-table.style.css'

const CoursesTable = (props) => {
    return (
    <div className="courses-table">
        {props.courseName}
    </div>
    )
}

export default CoursesTable;