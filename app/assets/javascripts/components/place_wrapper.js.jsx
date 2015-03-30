var PlaceWrapper = React.createClass({
  getInitialState: function() {
    return {places: []};
  },

  componentDidMount: function() {
    $.ajax({
      url: Routes.places_path(),
      dataType: 'json',
      success: function(places) {
        this.setState({places: places});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(Routes.places_path(), status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
    return (
      <div className="places-wrapper">
        <PlaceLists places={this.state.places} />
      </div>
    );
  }
});