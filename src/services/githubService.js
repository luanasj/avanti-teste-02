export const githubSearch = async (name)=>{
    name = encodeURIComponent(name)

    const url = `https://api.github.com/search/users?q=${name}&per_page=1&page=1`

    const response = await fetch(url,{
        headers: {
            "X-GitHub-Api-Version": "2022-11-28"
        }
    })

    const responseData = await response.json()

    const searchResult = {
        ok: response.ok,
        total_count: responseData?.total_count ?? undefined,
        user_login: responseData?.items[0]?.login ?? undefined
    }
  
    return searchResult
}


export const githubUser = async (username) =>{
    const url = `https://api.github.com/users/${username}`

    const response = await fetch(url,{
        headers:{
            "X-GitHub-Api-Version": "2022-11-28"
        }
    })

    const responseData = await response.json()

    const userInfo = {
        ok: response.ok,
        profile_picture: responseData?.avatar_url,
        user_name: responseData?.name,
        bio: responseData?.bio
    }

    return userInfo
} 


