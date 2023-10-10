import { CarsController } from "./controllers/CarsController.js";
import { HomeController } from "./controllers/HomeController.js";
import { HousesController } from "./controllers/HousesController.js";
import { CarsView } from "./views/CarsView.js";
import { HousesView } from "./views/HousesView.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: HomeController,
    view: /*html*/`
    <h1>Welcome to Gregslist</h1>
    `
  },
  {
    path: '#/houses',
    controller: HousesController,
    view: HousesView
  },
  {
    path: '#/cars',
    controller: CarsController,
    view: CarsView
  },
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */