import axios from 'axios'
const KEY = 'AIzaSyA25eNtCkO2p7sRO_m30kJNcCAzNYT_cMASD'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})