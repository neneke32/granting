import { authorizedFetch } from 'queries/authorizedFetch'

export const GrantingProgramQueryJSON = (id) => ({
    "query":
        `query ($id: ID!) {
          programById(id: $id) {
            id
    name
    lastchange
    type {
      id
      name
      level {
        id
        name
      }
      form {
        id
        name
      }
      language {
        id
        name
      }
      title {
        id
        name
      }
    }
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
        "variables": {"id": id}
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @param {*} id 
 * @returns 
 */
export const GrantingProgramQuery = (id) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(GrantingProgramQueryJSON(id)),
    })