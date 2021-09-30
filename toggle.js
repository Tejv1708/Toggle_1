function toggle() {
  import toggle_2() from "toggle_2.js";
  fetch(" https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      const html = data
        .map((user) => {
          return `
          <div class ="user">
          <div class = "container">
          <p> Title : ${user.title}</p>
          </div>
          </div>`;
        })
        .join("");
      console.log(html);
      document.querySelector("#id").insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}

toggle();
