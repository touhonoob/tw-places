
var PlaceLists = React.createClass({

  getInitialState: function() {
    return {places: []};
  },

  componentDidMount: function() {
    this.getPlaceDatas(null);
  },

  handleSearchCommit: function(searchValue) {
    this.getPlaceDatas({searchValue: searchValue});
  },

  getPlaceDatas: function(data) {
    $.ajax({
      url: Routes.places_path(),
      dataType: 'json',
      data: data,
      success: function(places) {
        this.setState({places: places});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(Routes.places_path(), status, err.toString());
      }.bind(this)
    });
  },

  render: function() {

    var placeNodes = this.state.places.map(function(place) {
      return (
        <div className="col-sm-4">
          <Place place={place} key={place.gov_id} />
        </div>
      )
    });

    return (
      <div className="place-wrapper">
        <div className="search-wrapper">
          <PlaceSearch onSearchSubmit={this.handleSearchCommit} />
        </div>
        <div className="row">
          { placeNodes }
        </div>
      </div>
    );
  }
});