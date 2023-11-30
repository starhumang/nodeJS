function webServerConnect(){
   return fetch('http://jsonplaceholder.typicode.com/posts/1',{
        headers : {
            'Cache-Control' : 'no-cache'
        }
    })
    .then(function(response){
        return response.json()
    });
}

//await랑 async는 같이 있어야 함
async function getJSONData(){
    const result = await webServerConnect();
    console.log(result)
}

getJSONData();