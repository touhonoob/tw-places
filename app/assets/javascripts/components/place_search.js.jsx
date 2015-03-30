
var PlaceSearch = React.createClass({

  handleOnSubmit: function(e) {
    e.preventDefault();
    var searchValue = React.findDOMNode(this.refs.search).value.trim();

    this.props.onSearchSubmit(searchValue)

    return;
  },

  render: function() {
    return (
      <div className="filter-wrapper">
        <div className="overview-wrapper">
          <h3>SomeThing found here</h3>
          &nbsp;
        </div>
        <div className="form-wrapper">
          <form onSubmit={this.handleOnSubmit}>
            <input ref="search" placeholder="Search places..." type="search"/>
            <input type="submit" value="Search" />
          </form>
        </div>
      </div>
    );
  }
});
