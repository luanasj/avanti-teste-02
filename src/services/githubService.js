const githubSearch = async (userName)=>{
    userName = userName.replaceAll(" ","+")

    const url = `https://api.github.com/search/users?q=${userName}&per_page=1&page=1`

    const response = await fetch(url,{
        headers: {
            "X-GitHub-Api-Version": "2022-11-28"
        }
    })

    const responseData = await response.json()

    const searchResult = {
        status: response.status,
        total_count: responseData?.total_count ?? undefined,
        user_url: responseData?.items[0]?.url ?? undefined
    }
  
    console.log(searchResult)
}

githubSearch("luana de jesus")