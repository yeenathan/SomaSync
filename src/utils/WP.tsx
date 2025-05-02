async function getPages() {
  const content = fetch("https://52.13.30.19/wp-json/wp/v2/pages").then((res) => res.json()); //can test with your own local wp url
  return content;
}

export {getPages};