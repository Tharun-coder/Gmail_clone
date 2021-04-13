let url = "https://gmail.googleapis.com/gmail/v1/users/";
let userID = "tharunece95@gmail.com";
var client_ID =
  "483228225913-7tmuhk2cicdd85nbo4nboaujmn6lr0sk.apps.googleusercontent.com";
var client_Secret = "Of5-4FWsuO1PEWUS8-IwhzEU";

fetch("https://accounts.google.com/o/oauth2/token?q=client_id=", {
  method: "POST",
  body:
    "grant_type=client_credentials&client_id=" +
    client_ID +
    "&client_secret=" +
    client_Secret,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// async function getData() {
//   let res = await fetch(`${url}${userID}/profile`, {
//     headers: {},
//   });
//   let data = await res.json();
//   console.log(data);
// }

// getData();
