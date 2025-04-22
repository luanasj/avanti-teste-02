import DottedSquare from "../background/DottedSquare"
import ElipseLeft from "../background/ElipseLeft"
import ElipseRight from "../background/ElipseRight"


const HomeLayout = ({children})=>{
    return (
        <main className="bg-[#1F1F1F] w-dvw h-dvh relative flex justify-center items-center">
            <ElipseRight/>
            <ElipseLeft/>
            <DottedSquare/>

            {children}


        </main>
    )
}

export default HomeLayout