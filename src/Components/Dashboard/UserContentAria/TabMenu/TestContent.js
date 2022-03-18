import React from 'react';
import './TabMenu.css'

const TestContent = () => {
    const testData=[
        {
            id:1,
            title:'Typography test',
            des:'Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
            date:'5th march 2022',
            time:'02:45pm'
        },
        {
            id:2,
            title:'Typography test',
            des:'Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
            date:'5th march 2022',
            time:'02:45pm'
        },
        {
            id:3,
            title:'Typography test',
            des:'Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
            date:'5th march 2022',
            time:'02:45pm'
        },
    ]
    return (
        <div>
         {
             testData.map(item=>(<div className='test_content' key={item.id}>
             <h4>{item.title}</h4>
             <p>{item.des}</p>
             <p>End Date <span>{item.date}</span> End Time  <span>{item.time}</span></p>
           </div>))
         }
        </div>
    );
};

export default TestContent;