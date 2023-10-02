import axios, {AxiosInstance} from 'axios';

class ApiManager {
  api: AxiosInstance;

  constructor( baseURL: string) {
    this.api = axios.create({
      baseURL: baseURL, // URL base de API
      timeout: 5000, // Tiempo máximo de espera para las solicitudes
    });
  }
   
  async getApiCall<Params, Response>(url: string, params?: Params) {
    console.log(url)
    try {
      const response = await this.api.get<Response>(url, {
        params: params,
      });
    
      return response.data;
    } catch (error) {
      throw new Error(`Error al obtener los datos en ${url}`);
    }
  }

  async postApiCall<Body, Response>(url: string, body: Body) {
    try {
      const response = await this.api.post<Response>(url, {
        body: JSON.stringify(body),
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error al obtener los datos en ${url}`);
    }
  }
}

export default  ApiManager;
