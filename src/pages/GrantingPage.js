import Card from "react-bootstrap/Card";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { GrantingProgramDesc } from "components/GrantingProgramDesc"
import { GrantingProgramEdit } from "components/GrantingProgramEdit";

import  GrantingSubjectTable  from "components/GrantingSubjectTable";


export const GrantingPage = ({program, actions}) => {
    return (
        <Card>

                <Tabs
                    defaultActiveKey="profile"
                    id="tabs"
                    className="mb-3"
                >
                    <Tab eventKey="Card0" title="Zobrazeni programu">
                        <GrantingProgramDesc program={program} actions={actions}/>
                    </Tab>
                    <Tab eventKey="Card1" title="Editace programu">
                        <GrantingProgramEdit program={program} actions={actions}/>
                    </Tab>

                    <Tab eventKey="Card2" title="Zobrazeni predmetu">
                        <GrantingSubjectTable subjects={program.subjects} actions={actions}/>
                    </Tab>
                </Tabs>
        </Card>
    )
}