import { getCaracters } from './get-caracters/get-caracters.swapi.service-adapter'

import { CaractersServiceAdapter } from '../types/caracters.service-adapters.types'

export const swapiCaractersSA: CaractersServiceAdapter = {
  getMany: getCaracters
}
