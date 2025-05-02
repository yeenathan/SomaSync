async function getPosts() {
  const content = fetch("https://52.13.30.19/wp-json/wp/v2/posts").then((res) => res.json()); //can test with your own local wp url
  return content;
}

async function getCategories() {
  const content = fetch("https://52.13.30.19/wp-json/wp/v2/categories").then((res) => res.json());
  return content;
}

export { getPosts, getCategories };