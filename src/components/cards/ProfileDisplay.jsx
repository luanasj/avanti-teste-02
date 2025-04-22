const ProfileDisplay = ({pictureURL, userName, bio})=>{
    return (
    <div className="flex gap-x-8 items-center mr-[48px] my-4">
        <img src={pictureURL} alt="user-picture" className="size-[220px] rounded-full  border-2 border-[#005CFF]"/>
        <div className="font-['Nunito_Sans'] flex flex-col gap-y-8 max-w-[448px]">
            <h5 className=" text-[20px] text-[#005CFF] font-[700] h-7 leading-7">{userName}</h5>
            <p className=" font-[300] text-[15px] leading-[20px]">{bio}</p>
        </div>
    </div>
    )
}

export default ProfileDisplay