import { use, useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePageTitle from './components/titles/HomePageTitle'
import SearchBar from './components/forms/SearchBar'
import ProfileCard from './components/cards/ProfileCard'
import RequestError from './components/messages/RequestError'
import ProfileDisplay from './components/cards/ProfileDisplay'
import LoadingAnimation from './components/icons/LoadingAnimation'

function App() {
  const [result,setResult] = useState(null)
  // const [error,setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  // const [searched, setSearched] = useState(false)

  return (
      <section className='z-50 max-w-[1156px] flex flex-col justify-start items-center gap-y-[30px] pt-[30px] pb-[30px] max-h-[537px] w-[90%] h-[90%] bg-black'>
        <HomePageTitle/>
        <SearchBar placeholder="Digite um usuário do Github" setResult={setResult} setIsLoading={setIsLoading}/>

        {isLoading && <LoadingAnimation/>}

        {!isLoading && result &&
          <ProfileCard>
            {result.user_found &&
              <ProfileDisplay bio={result.user_info.bio} pictureURL={result.user_info.profile_picture} userName={result.user_info.user_name}/>}
            {!result.user_found && 
              <RequestError message={`${result.message}`}/>
            }
          </ProfileCard> 
        }

      </section>
  )
}

export default App
