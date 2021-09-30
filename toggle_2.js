export function toggle_2() {
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
          <div class ="user_2">
          <div class = "container_2">
          <div class ="title"> Title : ${user.title}</div>
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
