import { Either, isLeft, left, right } from "fp-ts/lib/Either";

import { Caracter } from "../../../lib/types/caracters.lib.types";
import { getSwapiCaracters } from './_get-caracters.swapi.service'
import { SwapiCaracter } from "../types/swapi.types";

const _fromSwapiToLib = (input: SwapiCaracter): Either<Error, Caracter> => {
  try {
    const res: Caracter = {
      name: input.name,
      resourceUrl: input.url
    }

    return right(res)
  } catch (e) {
    return left(e)
  }
}

export const getCaracters = async (): Promise<Either<Error, Caracter[]>> => {
  try {
    const swapiCaractersRes = await getSwapiCaracters()
    if (isLeft(swapiCaractersRes)) throw swapiCaractersRes.left

    const caractersRes = []

    for(let i = 0; i < swapiCaractersRes.right.length; i++) {
      const _formattedRes = _fromSwapiToLib(swapiCaractersRes.right[i])
      if (isLeft(_formattedRes)) throw _formattedRes.left

      caractersRes.push(_formattedRes.right)
    }

    return right(caractersRes)
  } catch (e) {
    return left(e)
  }
}