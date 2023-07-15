import { authorizedFetch } from 'queries/authorizedFetch'

const SubjectDeleteJSON = (id) => ({
  "query": `mutation ($id: ID!) {
      subjectDelete(id: $id) { 
          id
          msg
          subjects {
            id
            name
            lastchange
            semesters {
              id
              order
              lastchange
              topics {
                id
                name
                lastchange
              }
              credits
              classificationType {
                id
                name
              }
            }
          }
      }
  }`,
  "variables": {
      "id": id
  }
});

/**
 * Performs a subject delete request to the server using authorizedFetch.
 *
 * @param {string} id - The ID of the subject.
 * @returns {Promise<Response>} A promise representing the subject delete request.
 */
export const SubjectDelete = (id) =>
  authorizedFetch('/gql', {
    body: JSON.stringify(SubjectDeleteJSON(id)),
  });