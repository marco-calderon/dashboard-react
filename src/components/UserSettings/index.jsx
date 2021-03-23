const UserSettings = () => {
  return (
    <div>
      <h3>General Settings</h3>
      <form>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="email" className="form-control" id="address" aria-describedby="emailHelp" placeholder="Address" />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone number</label>
          <input type="email" className="form-control" id="phoneNumber" aria-describedby="emailHelp" placeholder="Phone number" />
        </div>
        <div className="form-group">
          <label htmlFor="zipCode">Zip code</label>
          <input type="email" className="form-control" id="zipCode" aria-describedby="emailHelp" placeholder="Zip code" />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="notifications" />
          <label className="form-check-label" htmlFor="notifications">Enable email notifications on this account.</label>
        </div>
        <input type="submit" className="btn btn-info btn-block mt-3" title="Apply" />
      </form>
    </div>
  );
}

export default UserSettings;
