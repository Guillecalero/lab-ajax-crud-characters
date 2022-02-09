class APIHandler {
  constructor(baseUrl) {
    this.axiosApp = axios.create({
      BASE_URL: baseUrl
    })
  }

  getFullList() {
    return this.axiosApp.get('/')

  }

  getOneRegister() {
    return this.axiosApp.get(`/characters/${characterId}`)

  }

  createOneRegister() {
    return this.axiosApp.post()

  }

  updateOneRegister() {

  }

  deleteOneRegister() {

  }
}
