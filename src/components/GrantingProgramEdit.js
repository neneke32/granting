import { GrantingProgramTypeSelect } from './GrantingProgramTypeSelect';
import { ProgramNameInput } from './GrantingProgramNameInput';

export const GrantingProgramEdit = ({program, actions}) => {
    return (
        <div className="programdescription">
        <div className="basicinfo">
            
            <table className="table table-hover table-bordered">
                <tbody>
                    <tr>
                        <td>
                            Název studijního programu
                        </td>
                        <td>
                            <ProgramNameInput program={program} actions={actions}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Typ studijního programu
                        </td>
                        <td>
                            <GrantingProgramTypeSelect program={program} actions={actions}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
        )
}