import axios from 'axios';
import {IDetail} from "../models/IDetail.ts";

export async function getAllDetails(): Promise<IDetail[]> {
    const response = await axios.get('http://localhost:3000/posts');
    return response.data;
}

//json-server не может адекватно делать пагинацию с выбором количества отображаемых элементов
// Поэтому только страницы...
export async function fetchDetails(page : number): Promise<IDetail[]> {
    const response =  await axios.get('http://localhost:3000/posts',{
        params:{
            _page:page,
        },
    });
    return response.data.data;
}

export const createDetail = async (item: IDetail) => {
    const response = await axios.post('http://localhost:3000/posts', item);
    return response.data;
};