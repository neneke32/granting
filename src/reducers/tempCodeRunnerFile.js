export const SubjectAsyncUpdate = (subject) => (dispatch, getState) => {
    const subjectMutationJSON = (subject) => {
        return {
            query: `mutation ($id: ID!, $name: String!, $lastchange: DateTime!) {
                subjectUpdate(subject: {id: $id, name: $name, lastchange: $lastchange}) {
                  id
                  msg
                  subject {
                    id
                    name
                    lastchange
                  }
                }
              }`,
              variables: {"id": subject.id, "name": subject.name,"lastchange": subject.lastchange}
        }
    }

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache', 
        redirect: 'follow',
        body: JSON.stringify(subjectMutationJSON(subject))
    }

    return fetch('/api/gql', params)
        .then(resp => resp.json())
        .then(json => {
            const msg = json.data.subjectUpdate.msg
            if (msg === "fail") {
                console.log("Update failed")
            } else {
                const lastchange = json.data.subjectUpdate.subject.lastchange
                dispatch(ProgramActions.subject_update({...subject, lastchange: lastchange}))
            }
            return json
        })   
}