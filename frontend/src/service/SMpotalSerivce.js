import axios from "axios";

const SMPotal_API_BASE_URL  = "http://localhost:8080/api/";

class SMpotalSerivce{
    Insertchage(params){
       
        return axios.post(SMPotal_API_BASE_URL+"Insertchage",params);
        
    }

    Smlist(){
        return axios.get(SMPotal_API_BASE_URL+"Smlist");
    }

    
    Detail(params){
        
        return axios.post(SMPotal_API_BASE_URL+"detail",params)};

    

    update(params){
        return axios.post(SMPotal_API_BASE_URL+"update",params)};
}

export default new SMpotalSerivce();