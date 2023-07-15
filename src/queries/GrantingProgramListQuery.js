import { authorizedFetch } from 'queries/authorizedFetch'

export const GrantingProgramListQueryJSON = () => ({
    "query":
        `query {
            programPage {
                id
                name
                lastchange
            }
        }`
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @param
 * @returns 
 */
export const GrantingProgramListQuery = (id) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(GrantingProgramQueryJSON(id)),
    })