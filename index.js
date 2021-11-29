///===CODE FOR DOG EXAMPLE===

// //splitting data of request to a variable
// const formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle",
// };

// //splitting the post portion of the fetch into a variable
// const configureObject = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json",
//   },
//   body: JSON.stringify(formData),
// };

// //fetch can use the post variable instead of writing all of it inside the fetch function
// fetch("http://localhost:3000/dogs", configureObject)
//   .then((res) => res.json())
//   .then((obj) => console.log(obj))
//   .catch((error) => {
//     alert("Something went wrong.");
//     console.log(error.message);
//   });

//========Code written for the actual test attempt=======

// const configPost = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify({
//     name: "Steve",
//     email: "steve@steve.com",
//   }),
// };

// const submitData = () => {
//   console.log("Fetching...");
//   fetch("http://localhost:3000/users", configPost)
//     .then((res) => res.json())
//     .then((obj) => document.querySelector("body").append(obj.id))
//     .catch((error) => {
//       document.body.innerHTML = error.message;
//     });
// };

//=======Code was written by DJ as he was helping me with errors from the previous block=======
const submitData = (name, email) => {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
    }),
  })
    .then((response) => response.json())
    .then((object) => {
      document.body.innerHTML = object.id;
    })
    .catch((error) => {
      document.body.innerHTML = error.message;
    });
};
