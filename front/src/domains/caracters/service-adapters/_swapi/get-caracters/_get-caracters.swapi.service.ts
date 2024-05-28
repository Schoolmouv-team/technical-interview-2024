import { left, right, Either } from 'fp-ts/Either'

import { SwapiCaracter } from '../types/swapi.types'

export const getSwapiCaracters = async (): Promise<Either<Error, SwapiCaracter[]>> => {
  try {
    const response = await fetch('https://swapi.dev/api/people')
    const responseData = await response.json()
    return right(responseData.results)
  } catch (e) {
    return left(e)
  }
}
