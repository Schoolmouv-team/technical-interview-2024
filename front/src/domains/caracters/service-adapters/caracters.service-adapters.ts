import { CaractersServiceAdapters } from './types/caracters.service-adapters.types'
import { swapiCaractersSA } from './_swapi/caracters.swapi.service-adapters'

export const caractersSA: CaractersServiceAdapters = {
  swapi: swapiCaractersSA
}