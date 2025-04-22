import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePageTitle from './components/titles/HomePageTitle'
import SearchBar from './components/forms/SearchBar'

function App() {


  return (
      <section className='z-50 max-w-[1156px] flex flex-col justify-center items-center gap-y-[22px] pt-[30px] pb-[30px] max-h-[537px] w-[90%] h-[90%] bg-black'>
        <HomePageTitle/>
        <SearchBar placeholder="Digite um usuário do Github"/>
      </section>
  )
}

export default App
