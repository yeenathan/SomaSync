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

export { getPosts, getCategories, getCategoryNameFromID };