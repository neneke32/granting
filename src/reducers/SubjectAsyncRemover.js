
import { SubjectDelete } from '../queries/SubjectRemoveQuery';
import { ProgramActions } from "./grantingreducers" 
/**
 * An asynchronous action creator that sends a subject delete request to a server.
 * 
 * @param {string} id - ID of the subject to delete.
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */
export const SubjectDeleteAsync = (id) => (dispatch, getState) => {
  SubjectDelete(id)
      .then(response => response.json())
      .then(json => {
        const message = json.data?.SubjectDelete.msg
        const subject = json.data?.SubjectDelete.subject
        if (message === 'ok') {
          dispatch(ProgramActions.subject_remove(subject.id))
        }
        return json
      })
};