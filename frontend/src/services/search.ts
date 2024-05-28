import { type Data, type ApiUSearchResponse } from "../types";
import { API_HOST } from "../config";

export const searchData = async (search: string): Promise<[Error?, Data?]> => {

    try {
        const res = await fetch(`${API_HOST}/api/users?q=${search}`)

        if (!res.ok) return [new Error(`Error uploading file: ${res.statusText}`)] 
        
        const json = await res.json() as ApiUSearchResponse

        return [undefined, json.data]

    } catch (error) {
        if (error instanceof Error) return [error]
    }

    return [new Error('Unknown error')]
}