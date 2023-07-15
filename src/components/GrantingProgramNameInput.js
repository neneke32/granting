import { TextInput } from './TextInput';

export const ProgramNameInput = ({program, actions}) => {
    const onchange = (value) => (

        actions.programAsyncUpdate({...program, name: value})
            .then(json=>console.log("ProgramNameInput", json.data.programUpdate.msg))
    )
    
    return (
        <TextInput id={program.id} value={program.name} placeholder={"Název studijního programu"} onChange={onchange}/>
    )
}