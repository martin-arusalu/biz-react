export async function login(username, password) {
  const res = await fetch('http://localhost:3001/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json());

  if (res && res.token) {
    sessionStorage.setItem('jwt', res.token);
    return true;
  };

  return false;
}

export async function register(email, username, password) {
  const res = fetch('http://localhost:3001/auth/register', {
    method: 'POST',
    body: JSON.stringify({ email, password, username }),
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json());

  return res && res._id;
}