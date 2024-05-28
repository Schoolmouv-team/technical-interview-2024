import { swapiCaractersSA } from './_swapi/caracters.swapi.service-adapters'
import { CaractersServiceAdapters } from './types/caracters.service-adapters.types'

export const caractersSA: CaractersServiceAdapters = {
  swapi: swapiCaractersSA
}
