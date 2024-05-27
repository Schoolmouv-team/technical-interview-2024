import { Either } from "fp-ts/lib/Either";
import { Caracter } from "../../lib/types/caracters.lib.types";

export interface CaractersServiceAdapter {
  getMany: () => Promise<Either<Error, Caracter[]>>
}

export interface CaractersServiceAdapters {
  swapi: CaractersServiceAdapter
}