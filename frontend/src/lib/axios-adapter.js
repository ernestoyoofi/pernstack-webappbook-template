import axios from "axios"

const defaultAxios = axios.create({
  baseURL: location.origin
})

export default defaultAxios