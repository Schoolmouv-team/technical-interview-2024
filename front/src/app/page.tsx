import { isLeft } from 'fp-ts/lib/Either'
import { caractersSA } from '../domains/caracters/service-adapters/caracters.service-adapters'

const Page = async () => {
  const caractersRes = await caractersSA.swapi.getMany()

  if (isLeft(caractersRes)) {
    // manage error
    return (<>Error</>)
  }


  return (
    <div>
      Handle caracters display here
    </div>
  )
}

export default Page