console.log("start the code");

function getData(){
    fetch('https://api.github.com/users').then((res)=>{
              return res.json();
    }).then(function(data){
        console.log(data[0].login)
    })
}

getData()