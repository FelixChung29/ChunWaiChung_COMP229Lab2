const create = async (params, credentials, contact) => {
    try {
      let response = await fetch('/api/contacts/by/'+ params.userId, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        },
        body: contact
      })
        return response.json()
      } catch(err) { 
        console.log(err)
      }
  }
  
  const list = async (signal) => {
    try {
      let response = await fetch('/api/contacts', {
        method: 'GET',
        signal: signal
      })
      return response.json()
    }catch(err) {
      console.log(err)
    }
  }
  
  const listByOwner = async (params, credentials, signal) => {
    try {
      let response = await fetch('/api/contacts/by/'+params.userId, {
        method: 'GET',
        signal: signal,
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        }
      })
      return response.json()
    }catch(err){
      console.log(err)
    }
  }*/
  
  const read = async (params, signal) => {
    try {
      let response = await fetch('/api/contact/' + params.contactId, {
        method: 'GET',
        signal: signal,
      })
      return response.json()
    }catch(err) {
      console.log(err)
    }
  }
  
  const update = async (params, credentials, contact) => {
    try {
      let response = await fetch('/api/contacts/' + params.contactId, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        },
        body: contact
      })
      return response.json()
    } catch(err) {
      console.log(err)
    }
  }
  
  const remove = async (params, credentials) => {
    try {
      let response = await fetch('/api/contacts/' + params.contactId, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        }
      })
      return response.json()
    } catch(err) {
      console.log(err)
    }
  }
  
  export {
    create,
    list,
    listByOwner,
    read,
    update,
    remove
  }
  