import GithubLogo from "../icons/GithubLogo"
import GithubName from "../icons/GithubName"

const HomePageTitle = ()=>{
    return (
        <h1 className="h-[82px] flex gap-x-[12px] justify-center items-center border-black">
            <GithubLogo/>
            <span className="font-['Nunito_Sans'] font-semibold text-[60px] text-white align-middle">Perfil</span>
            <GithubName/>
        </h1>
    )
}

export default HomePageTitle