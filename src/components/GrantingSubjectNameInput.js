import { TextInput } from './TextInput';

export const SubjectNameInput = ({subject, actions}) => {
    const onchange = (value) => (

        actions.subjectAsyncUpdate({...subject, name: value})
            .then(json=>console.log("SubjectNameInput", json.data.subjectUpdate.msg))
    )
    
    return (
        <TextInput id={subject.id} value={subject.name} placeholder={"Název předmětu"} onChange={onchange}/>
    )
}