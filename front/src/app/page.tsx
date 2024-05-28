import { isLeft } from 'fp-ts/lib/Either'

import { getCaractersLib } from '../domains/caracters/lib/caracters.lib'

const Page = async () => {
  const caractersRes = await getCaractersLib()

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
