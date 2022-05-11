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

export const CompaniesAPI = {
    create: async (company) => template('POST', company, `${API_URL}/api/companies/company`),
    update: async (company) => template('PUT', company, `${API_URL}/api/companies/company`),
    read: async (company_id = null, hashed = false) => {
        const options = { method: 'GET', body: user }
        let append = company_id === null ? "" : `?id=${user_id}&hashed=${hashed}`
        const request = await fetch(`${API_URL}/api/companies/company${append}`, options)
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