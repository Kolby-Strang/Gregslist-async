import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "./AxiosService.js";

class HousesService {

    async getHouses() {
        const res = await api.get('api/houses')
        const retrievedHouses = res.data.map(housePOJO => new House(housePOJO))
        console.log('HOUSES SERVICE, retrieved houses', retrievedHouses);
        AppState.houses = retrievedHouses
    }

    async createHouse(houseData) {
        const apiHouse = await api.post('api/houses', houseData)
        const newHouse = new House(apiHouse.data)
        console.log(newHouse);
        AppState.houses.push(newHouse)
        AppState.emit('houses')
    }

    async removeHouse(houseId) {
        await api.delete('api/houses/' + houseId)
        const houses = AppState.houses
        const houseIndex = houses.findIndex(house => house.id == houseId)
        if (houseIndex == -1) return
        houses.splice(houseIndex, 1)
        AppState.emit('houses')
    }
}

export const housesService = new HousesService()