
var PlaceSearch = React.createClass({
  render: function() {
    return (
      <div className="filter-wrapper">
        <div className="overview-wrapper">
          <h3>SomeThing found here</h3>
          &nbsp;
        </div>
        <div className="form-wrapper">
          <form>
            <input ref="search" placeholder="Search people..." type="search"/>
          </form>
        </div>
      </div>
    );
  }
});
