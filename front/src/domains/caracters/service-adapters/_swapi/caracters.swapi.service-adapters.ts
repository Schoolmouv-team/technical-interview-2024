import { CaractersServiceAdapter } from '../types/caracters.service-adapters.types'
import { getCaracters } from './get-caracters/get-caracters.swapi.service-adapter'

export const swapiCaractersSA: CaractersServiceAdapter = {
  getMany: getCaracters
}