import { Either, isLeft, left } from 'fp-ts/lib/Either'

import { caractersSA } from '../../service-adapters/caracters.service-adapters'
import { Caracter } from '../types/caracters.lib.types'

export const getCaractersLib = async (caratersServiceAdapter = caractersSA.swapi): Promise<Either<Error, Caracter[]>> => {
  try {
    const result = await caratersServiceAdapter.getMany()
    if (isLeft(result)) throw result.left

    return result
  } catch (e) {
    return left(e)
  }
}
