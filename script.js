document.getElementById('username').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    let username = event.target.value;
    if (username) {
      fetchUser(username);
    }
  }
});

async function fetchUser(username) {
  try {
    let response = await fetch(`https://api.github.com/users/${username}`);
    let data = await response.json();

    console.log(data); // Debugging line to check fetched data

    if (data.message === 'Not Found') {
      alert('User not found');
      return;
    }

    document.getElementById('card').style.display = 'flex';
    document.getElementById('avatar').src = data.avatar_url;
    document.getElementById('name').textContent = data.login;
    document.getElementById('followers').textContent = data.followers;
    document.getElementById('following').textContent = data.following;
    document.getElementById('repos').textContent = data.public_repos;
    document.getElementById('followers-count').textContent = data.followers;
    document.getElementById('following-count').textContent = data.following;
    document.getElementById('repos-count').textContent = data.public_repos;
    document.getElementById('repo-link').href = data.html_url;
    document.getElementById('repo-link').textContent = data.html_url;

  } catch (error) {
    console.error('Error fetching user data:', error);
  }
}
