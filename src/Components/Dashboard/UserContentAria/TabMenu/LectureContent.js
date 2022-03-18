import React from 'react';
import './TabMenu.css'

const LectureContent = () => {
    const LectureData=[
        {
            id:1,
            title:'Typography test',
            date:'02/03/2022 - 04/02/2022',
            time:'02:34pm - 05:30pm'
        },
        {
            id:2,
            title:'Typography Lecture',
            date:'02/03/2022 - 04/02/2022',
            time:'02:34pm - 05:30pm'
        },
        {
            id:3,
            title:'Typography study',
            date:'02/03/2022 - 04/02/2022',
            time:'02:34pm - 05:30pm'
        },
        
    ]
    return (
        <div>
            {
                LectureData.map(item=>(<div className="leactur_content" key={item.id}>
                <div className="typograpy">
                    <span>Topic:</span>
                    <h4>{item.title}</h4>
                </div>
                <div className="date">
                    <span>Start date - End date</span>
                    <h6>{item.date}</h6>
                </div>
                <div className="time">
                    <span>Start date - End date</span>
                    <h6>{item.time}</h6>
                </div>
                <div className="record_btn">
                    <button>View recordings</button>
                </div>
            </div>))
            }
        </div>
    );
};

export default LectureContent;