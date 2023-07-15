export const SubjectsQuery = async () => {
    const query = `
        query {
            subjects {
                id
                name
                lastchange
                // add more fields if necessary
            }
        }
    `;
  
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache', 
        redirect: 'follow',
        body: JSON.stringify({query})
    }
  
    try {
        const resp = await fetch('/api/gql', params);
        const json = await resp.json();
        
        return json.data.subjects;
    } catch (error) {
        console.error("Error in SubjectsQuery:", error);
        throw error;
    }
  }