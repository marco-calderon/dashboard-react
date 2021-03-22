const UserSettings = () => {
  return (
    <div>
      <h3>General Settings</h3>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Address" />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Phone number</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone number" />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Zip code</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Zip code" />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Enable email notifications on this account.</label>
        </div>
        <input type="submit" className="btn btn-info btn-block mt-3" title="Apply" />
      </form>
    </div>
  );
}

export default UserSettings;
