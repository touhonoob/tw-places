
var PlaceLists = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },

  render: function() {

    var placeNodes = this.props.places.map(function(place) {
      return <Place name={place.name} key={place.gov_id} />
    });

    return (
      <div className="place-wrapper">
        <div className="search-wrapper">
          <PlaceSearch />
        </div>
        { placeNodes }
      </div>
    );
  }
});