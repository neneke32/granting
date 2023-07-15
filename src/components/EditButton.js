import React, { useState } from 'react';
import { SubjectNameInput } from './GrantingSubjectNameInput';

export const EditButton = ({ subject, actions }) => {
    const [isEditing, setEditing] = useState(false);

    const handleEdit = () => {
        setEditing(!isEditing);
    }

    return (
        <div>
            <button onClick={handleEdit}>Edit</button>
            {isEditing && <SubjectNameInput subject={subject} actions={actions} />}
        </div>
    );
}