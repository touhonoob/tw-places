
var Place = React.createClass({
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.place.name}</h3>
        </div>
        <div className="panel-body">
          Description:
          <p>{this.props.place.toldescribe}</p>
        </div>
      </div>
    );
  }
});