const githubSearch = async (name)=>{
    name = encodeURIComponent(name)

    const url = `https://api.github.com/search/users?q=${name}&per_page=1&page=1`

    const response = await fetch(url,{
        headers: {
            "X-GitHub-Api-Version": "2022-11-28"
        }
    })

    const responseData = await response.json()

    const searchResult = {
        status: response.status,
        ok: response.ok,
        total_count: responseData?.total_count ?? undefined,
        user_login: responseData?.items[0]?.login ?? undefined
    }
  
    console.log(searchResult)
}

const githubUser = async (username) =>{
    const url = `https://api.github.com/users/${username}`

    const response = await fetch(url,{
        headers:{
            "X-GitHub-Api-Version": "2022-11-28"
        }
    })

    const responseData = await response.json()

    console.log(responseData)

    // const userInfo = {
    //     status: response.status,
    //     ok: response.ok,

    // }
} 

githubUser("luanasj")
// githubSearch("luana de jesus")

