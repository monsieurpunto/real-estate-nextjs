import axios from "axios";

export const baseUrl="https://bayut.p.rapidapi.com"




export const fetchApi = async (url) => {
    const {data} = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'a0a37e6e35mshd8fcd84eb371adfp189178jsn2aa3eab865b9'
           }
    });
    return data;
}