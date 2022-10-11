
let form = document.getElementById("form");/*this targets the form element in the html document by its id*/
let input = document.getElementById("input");/*this targets the textarea in the html document that the user will input their info*/

form.addEventListener("submit", (v) => { /*this tells the form once the submit button is clicked */
    v.preventDefault(); /*this prevents the page from automatically reloading once button is clicked*/
    console.log("button clicked");
    formValidation(); /* this lets the form validation function run as many times as the submit button is clicked*/
});

let formValidation = () => {
    if ( input.value === "" ){  /* if the  textarea is submitted blank it will show a failure message*/
        console.log("failure");
    }
    else {
    console.log("success");
    }
}