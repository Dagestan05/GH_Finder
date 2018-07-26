class UI {
  constructor(){
    this.profile = document.getElementById("profile")
  }
  showProfile(user){
    this.profile.innerHTML = `
      <hr>
      <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary mb-1">Public Repos: ${user.public_repos}</span>
          <span class="badge badge-secondary mb-1">Public Gist: ${user.gists}</span>
          <span class="badge badge-success mb-1">Followers: ${user.followers}</span>
          <span class="badge badge-info mb-1">Following: ${user.following}</span>
          <hr>
          <ui class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Webiste/Blog: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member since: ${user.created_at}</li>
          </ui>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>`;
  }
}