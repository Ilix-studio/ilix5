const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

const getPost = () => {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

const createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something is wrong");
      }
    }, 2000);
  });
};

const init = async () => {
  await createPost({ title: "Post Three", body: "This is post three" });
  getPost();
};
init();

//  example 2
const fetchData = async () => {
  const respond = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await respond.json();
  console.log(data);
};
fetchData();
