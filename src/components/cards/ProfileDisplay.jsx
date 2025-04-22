const ProfileDisplay = ({pictureURL, userName, bio})=>{
    return (
    <div className="flex gap-x-8 items-center mr-[32px] my-4">
        <img src={pictureURL} alt="user-picture" className="size-[220px] rounded-full  border-2 border-[#005CFF]"/>
        <div className="flex flex-col gap-y-8 max-w-[448px]">
            <h5 className="text-[20px] text-[#005CFF] font-['Nunito Sans'] font-bold h-7 leading-7">{userName}</h5>
            <p className="font-['Nunito Sans'] font-light text-[15px] leading-[20px]">{bio}</p>
        </div>
    </div>
    )
}

export default ProfileDisplay