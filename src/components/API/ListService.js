import axios from "axios";

export default class ListService {
    static async getLists(limit = 10, page = 1) {
        return await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        });
    }

    static async getListById(id) {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
        return res.data
    }
}