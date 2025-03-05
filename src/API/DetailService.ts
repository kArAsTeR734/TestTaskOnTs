import axios from 'axios';
import {IDetail} from "../models/IDetail.ts";


export class DetailService {
    private static url: string = "http://localhost:3000/posts/"

    public static async getAllDetails(): Promise<IDetail[]> {
        const response = await axios.get(DetailService.url);
        return response.data;
    }

    //json-server не может адекватно делать пагинацию с выбором количества отображаемых элементов
    // Поэтому только страницы...
    public static async fetchDetails(page: number): Promise<IDetail[]> {
        const response = await axios.get(DetailService.url, {
            params: {
                _page: page,
            },
        });
        return response.data.data;
    }

    public static async createDetail(item: IDetail) {
        const response = await axios.post(DetailService.url, item);
        return response.data;
    };

    public static async editDetail(detail: IDetail) {
        const id = detail.id

        const response = await axios.put(DetailService.url + id, detail);
        return response.data;
    }
}

