import { GrantingDropdown } from "./GrantingDropdown"

export const GrantingProgramTypeSelect = ({program, actions}) => {
    const types = [
        {value: JSON.stringify({"id": "fd4f0980-9315-11ed-9b95-0242ac110002","name": "bakalářský prezenční 3 roky čeština","level": {"name": "bakalářský","id": "5c549cae-930e-11ed-9b95-0242ac110002"},"language": {"id": "36e9a40a-930e-11ed-9b95-0242ac110002","name": "čeština"},"form": {"name": "prezenční","id": "19018d2c-930e-11ed-9b95-0242ac110002"}}), name: "bakalářský prezenční 3 roky čeština"},
        {value: JSON.stringify({"id": "fd4f1d4e-9315-11ed-9b95-0242ac110002","name": "bakalářský kombinovaný 3 roky čeština","level": {"name": "bakalářský","id": "5c549cae-930e-11ed-9b95-0242ac110002"},"language": {"id": "36e9a40a-930e-11ed-9b95-0242ac110002","name": "čeština"},"form": {"name": "kombinovaný","id": "19019704-930e-11ed-9b95-0242ac110002"}}), name: "bakalářský kombinovaný 3 roky čeština"},
        {value: JSON.stringify({"id": "fd4f1eb6-9315-11ed-9b95-0242ac110002","name": "magisterský navazující na bakalářský prezenční 2 roky čeština","level": {"name": "magisterský","id": "5c5495ce-930e-11ed-9b95-0242ac110002"},"language": {"id": "36e9a40a-930e-11ed-9b95-0242ac110002","name": "čeština"},"form": {"name": "prezenční","id": "19018d2c-930e-11ed-9b95-0242ac110002"}}), name: "magisterský navazující na bakalářský prezenční 2 roky čeština"},
        {value: JSON.stringify({"id": "fd4f1f4c-9315-11ed-9b95-0242ac110002","name": "magisterský navazující na bakalářský kombinovaný 2 roky čeština","level": {"name": "magisterský","id": "5c5495ce-930e-11ed-9b95-0242ac110002"},"language": {"id": "36e9a40a-930e-11ed-9b95-0242ac110002","name": "čeština"},"form": {"name": "kombinovaný","id": "19019704-930e-11ed-9b95-0242ac110002"}}), name: "magisterský navazující na bakalářský kombinovaný 2 roky čeština"},
        {value: JSON.stringify({"id": "fd4f1fba-9315-11ed-9b95-0242ac110002","name": "doktorský prezenční 4 roky čeština","level": {"name": "doktorský","id": "79530a3e-930e-11ed-9b95-0242ac110002"},"language": {"id": "36e9a40a-930e-11ed-9b95-0242ac110002","name": "čeština"},"form": {"name": "prezenční","id": "19018d2c-930e-11ed-9b95-0242ac110002"}}), name: "doktorský prezenční 4 roky čeština"},
        {value: JSON.stringify({"id": "fd4f2028-9315-11ed-9b95-0242ac110002","name": "doktorský kombinovaný 4 roky čeština","level": {"name": "doktorský","id": "79530a3e-930e-11ed-9b95-0242ac110002"},"language": {"id": "36e9a40a-930e-11ed-9b95-0242ac110002","name": "čeština"},"form": {"name": "kombinovaný","id": "19019704-930e-11ed-9b95-0242ac110002"}}), name: "doktorský kombinovaný 4 roky čeština"},
        {value: JSON.stringify({"id": "fd4f2082-9315-11ed-9b95-0242ac110002","name": "magisterský prezenční 5 let čeština","level": {"name": "magisterský","id": "5c5495ce-930e-11ed-9b95-0242ac110002"},"language": {"id": "36e9a40a-930e-11ed-9b95-0242ac110002","name": "čeština"},"form": {"name": "prezenční","id": "19018d2c-930e-11ed-9b95-0242ac110002"}}), name: "magisterský prezenční 5 let čeština"},
        {value: JSON.stringify({"id": "fd4f20dc-9315-11ed-9b95-0242ac110002","name": "magisterský prezenční 6 let čeština","level": {"name": "magisterský","id": "5c5495ce-930e-11ed-9b95-0242ac110002"},"language": {"id": "36e9a40a-930e-11ed-9b95-0242ac110002","name": "čeština"},"form": {"name": "prezenční","id": "19018d2c-930e-11ed-9b95-0242ac110002"}}), name: "magisterský prezenční 6 let čeština"},
    ];

    const onChange = (value) => (
        actions.programTypeAsyncUpdate({...program, type:JSON.parse(value)})
            .then(json=>console.log("ProgramTypeChange", json.data.programUpdate.msg))
    )

    return(
        <GrantingDropdown id={program.id} value={program.type.id} onChange={onChange} items={types}/>
    )
}