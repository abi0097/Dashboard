// function showPost(id) {
//       fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//         .then(response => response.json())
//         .then(post => {
//           const postElement = document.createElement('div');
//           postElement.innerHTML = `
//             <h2>${post.title}</h2>
//             <p>${post.body}</p>
//           `;
//           postsContainer.appendChild(postElement);
//         });
//       }


    const filteredData = data.slice(0, 10);
    filteredData.forEach((user) => {
      const markup = `
      <div id=${user.id}>
      <li onclick="posttitle(${user.id})">${user.title}</li>
      <button onclick="deletepost(${user.id})">Delete</button>
      </div>
      `;

      document.getElementById("post-list").insertAdjacentHTML("beforeend", markup);