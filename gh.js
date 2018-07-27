class GH {
  constructor(){
    this.client_id = '9acacd40d147a2e75f5c';
    this.client_secret = '0636692ed26d06ae8f286e502a4c5b6e07367253';
    
  }
  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
    const profileData = await profileResponse.json();

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=5&sort=created&client_id=${this.client_id}&client_secret=${this.client_secret}`)
    const repos = await reposResponse.json();

    return {
      profile: profileData,
      repos: repos
    }
  }
}