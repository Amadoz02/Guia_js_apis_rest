const guardar=()=>{
    fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: '2894667',
          author: 'helder'
         
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
      
}

