const [searchKey, setSearchKey] = useState("")
const [artists, setArtists] = useState([])

  const searchArtists = async (e) => {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            q: searchKey,
            type: "artist"
        }
    })
    setArtists(data.artists.items)
}

const getProfile = async (e) => {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
}


