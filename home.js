fetch("https://jsonplaceholder.typicode.com/posts")
  // show the total number of post
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
    const markup = ` <li> ${data.length} </li> `;

    document.getElementById("result1").insertAdjacentHTML("beforeend", markup);
  })

  .catch((error) => console.log(error));

fetch("https://jsonplaceholder.typicode.com/comments")
  // show the total number of comments
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    const markup = ` <li> ${data.length} </li> `;

    document.getElementById("result2").insertAdjacentHTML("beforeend", markup);
  })

  .catch((error) => console.log(error));

fetch("https://jsonplaceholder.typicode.com/todos")
  // show the total number of todos
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const markup = ` <li> ${data.length} </li> `;

    document.getElementById("result3").insertAdjacentHTML("beforeend", markup);
  })

  .catch((error) => console.log(error));

fetch("https://jsonplaceholder.typicode.com/posts")
  // show the total number of post.title
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const filteredData = data.slice(0, 10);
    filteredData.forEach((user) => {
      const markup = `
      <div id=${user.id}>
      <li onclick="posttitle(${user.id})">${user.title}</li>
      <button onclick="deletepost(${user.id})">Delete</button>
      </div>
      `;

      document.getElementById("post-list").insertAdjacentHTML("beforeend", markup);
    });
  })

  .catch((error) => console.log(error));

function deletepost(id) {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts/" + id;
  // function for delete  post

  fetch(apiUrl, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        const postElement = document.getElementById(id);
        postElement.parentNode.removeChild(postElement);
      } else {
        throw new Error("Error deleting post");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
function posttitle(id) {
  window.location.href = `/postDetails.html?postId=${id}`;
}
