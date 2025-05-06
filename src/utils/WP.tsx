async function getPosts() {
  const content = fetch("https://52.13.30.19/wp-json/wp/v2/posts?orderby=slug&order=asc").then((res) => res.json()); //can test with your own local wp url
  return content;
}

async function getCategories() {
  const content = fetch("https://52.13.30.19/wp-json/wp/v2/categories?orderby=slug&order=asc").then((res) => res.json());
  return content;
}

function getCategoryNameFromID(id:number, categories: Array<any>) {
  return categories.filter((category:any) => {
    return category.id === id;
  })[0].name;
}

async function RegisterNewUser(username: string, password: string, email: string) {
  const res = await fetch("https://52.13.30.19/wp-json/custom/v1/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "username": username,
      "password": password,
      "email": email,
    }),
  });
}

export { getPosts, getCategories, getCategoryNameFromID, RegisterNewUser };