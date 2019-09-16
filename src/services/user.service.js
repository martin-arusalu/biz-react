export async function profile() {
  return await fetch('http://localhost:3001/users/profile', {
      headers: new Headers({
        'Authorization': sessionStorage.getItem('jwt')
      })
    })
    .then(res => res.json());
}