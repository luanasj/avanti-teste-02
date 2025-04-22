const ProfileCard = ({children})=>{
    return(
        <div className="flex items-center justify-center bg-[#D9D9D9] rounded-[10px] pt-[8px] pb-[8px] pl-[22px] pr-[22px] mx-4">
            {children}
        </div>     
    )
}

export default ProfileCard