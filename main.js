// const numbers = [1, 2, 3, 4, 5, 6, 7]

// const printnumber = () => {

//         numbers.forEach((item) => {
//             console.log(item)
//         })
//     }



// const createnumber = (num ) => {
//     setTimeout(() => {
//         numbers.push(num)
//         byby()
//         hellojava()
//         createnewnumber("mera" , 23)
//         printhello()
//         printnumber()
//     }, 2000)
// }

// createnumber(52);

// const printhello = () =>{
//    console.log("Hello ");
// }
// const byby = ()=>{
//     console.log("By By")
// }

// const hellojava = () =>{
//     console.log("Hello JavaScript ");
// }
// const createnewnumber = ((num2 ,num3)=>{
//     numbers.push(num2 , num3)
// })


// (fetch("https://jsonplaceholder.typicode.com/users").then((response) => 
//     console.log(response.json())
// ))


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => (response.json())
//         .then((data) => console.log(data))

//     )

const button = document.querySelector("button")

const names = document.querySelector(".name")
const usersname = document.querySelector(".usersname")
const email = document.querySelector(".email")
const city = document.querySelector(".city")
const zipcode = document.querySelector(".zipcode")

const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  
    // heading name  //
    let heading = document.createElement("h4")
    heading.innerText = "NAME :-"
    heading.className = "list-group-item"
    names.appendChild(heading)

    // heading usersname //
    let headingusers = document.createElement("h4")
    headingusers.innerText = "USERSNAME :-"
    headingusers.className = "list-group-item"
    usersname.appendChild(headingusers)

    // heading email //
    
    let headingemail = document.createElement("h4")
    headingemail.innerText = "EMAIL :-"
    headingemail.className = "list-group-item"
    email.appendChild(headingemail)

    // heading city //
    
    let headingcity = document.createElement("h4")
    headingcity.innerText = "CITY :-"
    headingcity.className = "list-group-item"
    city.appendChild(headingcity)

    // heading zipcode //
    
    let headingzipcode = document.createElement("h4")
    headingzipcode.innerText = "ZIPCODE :-"
    headingzipcode.className = "list-group-item"
    zipcode.appendChild(headingzipcode)


    data.forEach((details) => {
  
        //  name   //

        let nameli = document.createElement("li")
        nameli.className = "list-group-item";
        nameli.innerText = details.name;
        names.appendChild(nameli)


        //  username   //


        let usersnameli = document.createElement("li")
        usersnameli.className = "list-group-item";
        usersnameli.innerText = details.username;

        usersname.appendChild(usersnameli)

        //  Email //
  
        let emailli = document.createElement("li")
        emailli.className = "list-group-item";
        emailli.innerText = details.email;
        email.appendChild(emailli)

        // city  //

        let cityli = document.createElement("li")
        cityli.className = "list-group-item";
        cityli.innerText = details.address.city;
        city.appendChild(cityli)

        // zipcode  //

        let zipcodeli = document.createElement("li")
        zipcodeli.className = "list-group-item";
        zipcodeli.innerText = details.address.zipcode;
        zipcode.appendChild(zipcodeli)

    });


}


button.addEventListener("click", fetchData)