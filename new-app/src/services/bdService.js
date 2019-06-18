export default class BdService {
    constructor() {
        this._apiBase = 'http://localhost:3000'
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }

        return res.json();
    }

    getAllBestsellers = async () => {
        const res = await this.getResource('/bestsellers');

        return res;
    }

    getAllCoffee = async () => {
        const res = await this.getResource('/coffee');

        return res;
    }

    getAllGoods = async () => {
        const res = await this.getResource('/goods');

        return res;
    }
}