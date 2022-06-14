const API_URL = "http://127.0.0.1:5000"

// General Request Template
const template = async (method, body, url) => {
    const options = { method, body }
    const request = await fetch(url, options)
    const response = await request.json()
    if (request.status >= 400) throw response
    return response
}

// API Calls
export const UsersAPI = {
    create: async (user) => template('POST', user, `${API_URL}/api/users/user`),
    update: async (user) => template('PUT', user, `${API_URL}/api/users/user`),
    login: async (user) => template('POST', user, `${API_URL}/api/users/login`),
    read: async (user_id = null, hashed = false) => {
        const options = { method: 'GET', body: user }
        let append = user_id === null ? "" : `?id=${user_id}&hashed=${hashed}`
        const request = await fetch(`${API_URL}/api/users/user${append}`, options)
        const response = await request.json()
        if (request.status >= 400) throw response
        return response
    }
}

export const ObjectsAPI = {
    create: async object => template('POST', object, `${API_URL}/api/objects/object`),
    update: async (object) => template('PUT', object, `${API_URL}/api/objects/object`),
    read: async (object_id = null, hashed = false) => {
        const options = { method: 'GET', body: user }
        let append = object_id === null ? "" : `?id=${user_id}&hashed=${hashed}`
        const request = await fetch(`${API_URL}/api/objects/object${append}`, options)
        const response = await request.json()
        if (request.status >= 400) throw response
        return response
    }
}

export const TreesAPI = {
    create: async (tree) => template('POST', tree, `${API_URL}/api/trees/trees`),
    read: async (user_id = null, hashed = false) => {
        const options = { method: 'GET', body: user }
        let append = user_id === null ? "" : `?id=${user_id}&hashed=${hashed}`
        const request = await fetch(`${API_URL}/api/trees/trees${append}`, options)
        const response = await request.json()
        if (request.status >= 400) throw response
        return response
    }
}