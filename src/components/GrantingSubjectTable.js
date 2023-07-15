import React from 'react';
import { Trash } from 'react-bootstrap-icons';
import  { EditButton } from './EditButton';



const GrantingSubjectTable = ({ subjects, actions }) => {
    
    
    return(
    <table style={{border: '1px solid black', width: '100%', textAlign: 'center'}}>
        <thead>
            <tr style={{backgroundColor: '#f0f0f0'}}>
                <th>Subject Name</th>
                <th>Semester Order</th>
                <th>Topic Name</th>
                <th>Credits</th>
                <th>Classification Type</th>
            </tr>
        </thead>
        <tbody>
            {subjects.map((subject, i) => (
                <React.Fragment key={i}>
                    <tr>
                    <td rowSpan={subject.semesters.length} style={{border: '1px solid black'}}>
                    {subject.name}
                    <EditButton subject={subject} actions={actions}/>
                    
                </td>
                        

                        <td style={{border: '1px solid black'}}>{subject.semesters[0].order}</td>
                        <td style={{border: '1px solid black'}}>{subject.semesters[0].topics.length > 0 ? subject.semesters[0].topics[0].name : 'N/A'}</td>
                        <td style={{border: '1px solid black'}}>{subject.semesters[0].credits}</td>
                        <td style={{border: '1px solid black'}}>{subject.semesters[0].classificationType.name}</td>
                        
                    </tr>
                    {subject.semesters.slice(1).map((semester, j) => (
                        <tr key={j}>
                            <td style={{border: '1px solid black'}}>{semester.order}</td>
                            <td style={{border: '1px solid black'}}>{semester.topics.length > 0 ? semester.topics[0].name : 'N/A'}</td>
                            <td style={{border: '1px solid black'}}>{semester.credits}</td>
                            <td style={{border: '1px solid black'}}>{semester.classificationType.name}</td>
                        </tr>
                    ))}
                </React.Fragment>
            ))}
        </tbody>
        
        
    </table>
)};



export default GrantingSubjectTable;
