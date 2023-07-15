import {  ProgramFetch, ProgramAsyncUpdate, SubjectAsyncUpdate, ProgramTypeAsyncUpdate} from 'reducers/GrnatingAsyncActions'
import { ProgramActions } from "./grantingreducers"
import {SubjectDeleteAsync } from "./SubjectAsyncRemover"

/**
 * vytvori actions
 * @param {*} dispatch 
 * @returns 
 */
export const bindGrantingActions = (dispatch) => {
    return {
        programFetch: (id) => dispatch(ProgramFetch(id)),
        
        
        
        programAsyncUpdate: (program) => dispatch(ProgramAsyncUpdate(program)),
        
        subjectAsyncUpdate: (subject) => dispatch(SubjectAsyncUpdate(subject)),

        programTypeAsyncUpdate: (program) => dispatch(ProgramTypeAsyncUpdate(program)),

        subjectAsyncRemove: (id) => dispatch(SubjectDeleteAsync(id)),

        
    }
}