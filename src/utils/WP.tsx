const DOMAIN = "https://somasync-wp.createplaychange.ca";

async function getPosts() {
  const content = fetch(`${DOMAIN}/wp-json/wp/v2/posts?orderby=slug&order=asc&per_page=100`).then((res) => res.json());
  return content;
}

async function getCategories() {
  const content = fetch(`${DOMAIN}/wp-json/wp/v2/categories?orderby=slug&order=asc&exclude=1&per_page=30`).then((res) => res.json());
  return content;
}

function getCategoryNameFromID(id:number, categories: Array<any>) {
  return categories.filter((category:any) => {
    return category.id === id;
  })[0].name;
}

async function registerNewUser(username: string, password: string, email: string) {
  const res = await fetch(`${DOMAIN}/wp-json/custom/v1/register`, {
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

/**
 * Create and store JWT token to cookie
 * 
 * @param username 
 * @param password 
 * @param email 
 */
async function login(username: string, password: string, email: string) {
  try {
    const res = await fetch(`${DOMAIN}/wp-json/jwt-auth/v1/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "username": username,
        "password": password,
        "email": email,
      }),
    });
  
    if (!res.ok) {
      throw new Error("Log in failed");
    }
  
    const data = await res.json();
  
    document.cookie = `jwt=${data.token}; path=/; max-age=3600`; //3 hours
  }
  catch (err:any) {
    throw new Error(err);
  }
}

function getCookies() {
  return document.cookie.split("; ").reduce((acc, cookie) => {
    const [key, value] = cookie.split("=");
    acc[key] = value;
    return acc;
  }, {});
}

async function getUserInfo() {
  const res = await fetch(`${DOMAIN}/wp-json/wp/v2/users/me`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getCookies().jwt}`
    }
  });
  const data = await res.json();
  return data;
}

async function getUserMeta() {
  const res = await fetch(`${DOMAIN}/wp-json/custom/v1/meta/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getCookies().jwt}`
    }
  });
  const data = await res.json();
  return data;
}

async function updateUserMeta(key:string, value:any) {
  const res = await fetch(`${DOMAIN}/wp-json/custom/v1/meta/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getCookies().jwt}`
    },
    body: JSON.stringify({
      "key": key,
      "value": value
    })
  });
}

async function getOnboardingPosts() {
  const res = await fetch(`${DOMAIN}/wp-json/wp/v2/posts?categories=13`);
  const data = await res.json();
  const sorted = data.sort((a, b) => new Date(a.date) - new Date(b.date));
  return sorted;
}

export { getPosts, getCategories, getCategoryNameFromID, registerNewUser, login, getUserInfo, getUserMeta, updateUserMeta, getOnboardingPosts };