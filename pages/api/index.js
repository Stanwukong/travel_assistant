import axios from "axios"

const url = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"


export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Key": "7ab9d3936amshc82dadd2a909770p118d07jsn44a2df62284d",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    })
    return data
  } catch (e) {
    console.log(`Fetch data Error: ${e}`)
  }
}
