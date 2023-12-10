import {useMutation} from "@tanstack/react-query";
import axios, {AxiosError} from 'axios'

interface RequestData {
    companyName: string;
    companySector: string
}

interface RequestError {
    message: string;
}

interface ResponseData {
 url: string
}

export function useGenerateLogoMutation(){
    return useMutation<ResponseData[], AxiosError<RequestError>, RequestData>({
        mutationFn: async (data: { companyName: string; companySector: string }) =>{
            const res = await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/images`, data)
            return res.data
        }
    })
}
