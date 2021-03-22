const UserInfo = () => {
  return (
    <div className="d-flex flex-direction-column align-items-center card">
      <div className="container card-body">
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div class="user-pic"><span class="btn btn-circle d-flex btn-info text-white">EA</span></div>
              <h1>Admin</h1>
              <h4 className="text-muted">admin@gmail.com</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h4>Profile</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <form>
              <div class="form-group">
                <label for="emailAddress">Email address</label>
                <input type="email" class="form-control" id="emailAddress" placeholder="Enter email" />
              </div>
              <div class="form-group">
                <label for="bio">Bio</label>
                <textarea type="email" class="form-control" id="bio" placeholder="Enter your biography"></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
