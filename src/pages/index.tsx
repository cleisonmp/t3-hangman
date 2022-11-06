import { type NextPage } from 'next'
import { Seo } from '../components/utils/Seo'

//import { trpc } from '../utils/trpc'

const Home: NextPage = () => {
  //const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Seo />
      <main className='flex w-full flex-1 flex-col gap-4 p-4'>
        <h1 className=''>T3 app</h1>
        <h1 className='text-app-textDisabled'>T3 app</h1>
      </main>
    </>
  )
}

export default Home
