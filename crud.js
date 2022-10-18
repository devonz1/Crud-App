
let form = document.getElementById("form");/*this targets the form element in the html document by its id*/
let input = document.getElementById("input");/*this targets the textarea in the html document that the user will input their info*/
let message = document.getElementById("msg");
let posts = document.getElementById("posts");
form.addEventListener("submit", (v) => { /*this tells the form once the submit button is clicked */
    v.preventDefault(); /*this prevents the page from automatically reloading once button is clicked*/
    console.log("button clicked");
    formValidation(); /* this lets the form validation function run as many times as the submit button is clicked*/
});

let formValidation = () => { /*this is our form validation function that will decide what message to dsiplay based on the user input*/
    if (input.value === "") {  /* if the  textarea is submitted blank it will show a failure message*/
        msg.innerHTML = "Post cannot be Empty"
        console.log("failure");
    }
    else {
        console.log("success");
        msg.innerHTML = "";
        acceptData();
    }
};

let data = {};/* all of the data input into the form will be stored into 
this empty object*/

let acceptData = () => {
    data["text"] = input.value; /*this function will take all the user input and push it into the data 
    0bject then the "text" key will hold all values that are input*/
    console.log(data);
    createPost();

};

let createPost = () => {
    posts.innerHTML +=
        `
    <div>
        <p>${data.text}</p>
       <span class="options">
     <i class="fa-solid fa-pen-to-square"></i>
    <i class="fa-solid fa-trash-can"></i>
        </span>
        </div>
    `;

    ;
};