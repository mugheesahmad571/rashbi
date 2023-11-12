import React from 'react'
import "./dailyStudies.css";
import StudiesTable from '../../components/studiesTable/StudiesTable';
export default function DailyStudies() {
    return (
        <div className='row dailyStudies'>
            <div className='col-lg-10 bg-form'>
                <StudiesTable />
            </div>
        </div>
    )
}
