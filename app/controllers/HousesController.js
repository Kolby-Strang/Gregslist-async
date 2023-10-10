import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class HousesController {
    constructor() {
        this.getHouses()
        AppState.on('houses', _drawHouses)
        AppState.on('account', _drawHouses)
        AppState.on('account', _drawForm)
    }

    async getHouses() {
        try {
            await housesService.getHouses()
            Pop.success('Houses Retrieved')
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }

    createHouse(event) {
        try {
            event.preventDefault()
            const form = event.target
            const formData = getFormData(form)
            housesService.createHouse(formData)
            form.reset()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }

    }

    async removeHouse(houseId) {
        try {
            const wantToRemove = await Pop.confirm()
            if (!wantToRemove) return
            await housesService.removeHouse(houseId)

        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }
}

function _drawHouses() {
    const houses = AppState.houses
    let content = ''
    houses.forEach(house => content += house.houseCard)
    setHTML('houses-container', content)
}

function _drawForm() {
    setHTML('form-container', House.formElem)
}