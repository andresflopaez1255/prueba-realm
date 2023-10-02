import { API_KEY } from "@env"
import ApiManager from "../services/ApiManager"
import { DateTimeModel } from "../models/DateModel"

class DateTimeRepository {
   
    async getDatetime(){
        try {
            const apiManager = new ApiManager("https://api.easyapi.io/v1.0/")
            const dateTimeInfo = await apiManager.getApiCall<string,DateTimeModel>(`ip?api_key=${API_KEY}`,)
            return dateTimeInfo.properties
        } catch (error) {
            console.error(error)
        }
    }
}

export default new DateTimeRepository()