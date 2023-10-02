import { API_KEY } from "@env"
import ApiManager from "../services/ApiManager"
import { DateTimeModel } from "../models/DateModel"
import { RickResults } from "../models/RicksResults"

class RickApiRepository {
   
    async getDataRicks(){
        try {
            const apiManager = new ApiManager("https://rickandmortyapi.com/api/")
            const rickApiResults = await apiManager.getApiCall<undefined,RickResults>(`character/?page=1`,)
            return rickApiResults.results
        } catch (error) {
            console.error(error)
        }
    }
}

export default new RickApiRepository()