
var Place = React.createClass({
  render: function() {
    return (
      <div className="place">
        <h2>
          {this.props.name}
        </h2>
      </div>
    );
  }
});