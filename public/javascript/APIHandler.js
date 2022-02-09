class APIHandler {
  constructor() {
    this.axiosApp = axios.create({
      baseURL: 'https://minions-api.herokuapp.com/characters'
    })
  }

  getFullList() {
    return this.axiosApp.get('/')

  }

  getOneRegister(characterId) {
    return this.axiosApp.get(`/${characterId}`)

  }

  createOneRegister() {
    return this.axiosApp.post('/')

  }

  updateOneRegister(characterId, data) {
    return this.axiosApp.put(`/${characterId}, data`)

  }

  deleteOneRegister(characterId, data) {
    return this.axiosApp.post(`/${characterId}, data`)

  }
}
