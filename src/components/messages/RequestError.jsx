const RequestError = ({message})=>{
    return(
        <p className="text-[20px] text-[#FF0000] font-normal mx-[60px] text-center leading-[27px]">
            {message} <br /> Tente novamente.
        </p>
    )
}

export default RequestError