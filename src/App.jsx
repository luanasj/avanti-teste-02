import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePageTitle from './components/titles/HomePageTitle'
import SearchBar from './components/forms/SearchBar'
import ProfileCard from './components/cards/ProfileCard'
import RequestError from './components/messages/requestError'
import ProfileDisplay from './components/cards/ProfileDisplay'

function App() {


  return (
      <section className='z-50 max-w-[1156px] flex flex-col justify-start items-center gap-y-[30px] pt-[30px] pb-[30px] max-h-[537px] w-[90%] h-[90%] bg-black'>
        <HomePageTitle/>
        <SearchBar placeholder="Digite um usuário do Github"/>
        <ProfileCard>
          {/* <RequestError message="Nenhum perfil foi encontrado com esse nome de usuário."/> */}
          <ProfileDisplay bio={"Oi! Eu sou uma Desenvolvedora de Software. (Software Developer)."} pictureURL={"https://avatars.githubusercontent.com/u/111328829?v=4"} userName={"Lucas Mendes"}/>
        </ProfileCard>

      </section>
  )
}

export default App
