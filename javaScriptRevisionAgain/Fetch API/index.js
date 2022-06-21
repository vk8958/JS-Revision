
// button with id myBtn

let myBtn = document.getElementById("myBtn")

//div with id ocntent 
let content = document.getElementById("content")


function getData() {
    url = "https://api.github.com/users";
    fetch(url).then(function (response) {
        console.log("Inside first then")
        return response.json();//we are using .json()  it will parse data and it will be a js object
    }).then((data) => {
        console.log("Inside second then")
        console.log(data)
    })
}
console.log('before runnung getData')

getData();

console.log("after running getDaata")




