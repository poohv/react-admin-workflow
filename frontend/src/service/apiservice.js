import axios from "axios";


const API_BASE_URL  = "http://localhost:8080/api";

class apiservice{

    Newapi(dataset){
        return axios.get(API_BASE_URL, {
            params: {
              dataset
        }});
    }


}

export default new apiservice();