import { AppState } from "../AppState.js"

export class House {
    constructor(data) {
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.description = data.description
        this.creator = data.creator
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = new Date(data.updatedAt)
    }

    get houseCard() {
        return `
        <div class="col-12 house-card px-0 mb-3">
            <div class="row">
                <img class="col-5 img-fluid house-img" src="${this.imgUrl}" alt="house">
                <div class="col-7 p-2">
                    <p class="fs-3">$${this.price}</p>
                    <p>Built in: ${this.year}</p>
                    <p>${this.levels} floors, ${this.bedrooms} bedrooms, ${this.bathrooms} bathrooms</p>
                    <p>${this.description}</p>
                    <p>Listed at: ${this.createdAt.toLocaleDateString()}</p>
                    <p>Updated at: ${this.updatedAt.toLocaleDateString()}</p>
                    <div class="d-flex align-items-center">
                        <img class="rounded-circle img-fluid car-creator" src="${this.creator.picture}">
                        <p>${this.creator.name}</p>
                    </div>
                    <div class="d-flex justify-content-end">
                        ${this.getRemoveButton()}
                    </div>
                </div>
            </div>
        </div>
        `
    }

    getRemoveButton() {
        if (AppState.account?.id == this.creator.id) {
            return `<button onclick="app.HousesController.removeHouse('${this.id}')" class="btn btn-danger m-2"><i class="mdi mdi-trash-can"></i></button>`
        }
        return ``
    }

    static get formElem() {
        return `
        <form class="col-11 col-md-9 mb-4" onsubmit="app.HousesController.createHouse(event)">

        <div class="d-flex justify-content-between">
          <div>
            <label for="bedrooms">Bedrooms</label>
            <input id="bedrooms" name="bedrooms" type="number" required>
          </div>

          <div>
            <label for="bathrooms">Bathrooms</label>
            <input id="bathrooms" name="bathrooms" type="number" required>
          </div>

          <div>
            <label for="levels">Levels</label>
            <input id="levels" name="levels" type="number" required>
          </div>
        </div>

        <label for="imgUrl">Image URL</label>
        <input id="imgUrl" name="imgUrl" type="url" maxlength="500" required>

        <label for="year">Year</label>
        <input id="year" name="year" type="number" required>

        <label for="price">Price</label>
        <input id="price" name="price" type="number" required>

        <label for="description">Description</label>
        <textarea id="description" name="description" class="w-100" maxlength="5000"></textarea>

        <button class="btn btn-success" type="submit">Submit</button>


      </form>
        `
    }
}