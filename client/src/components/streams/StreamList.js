import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link
            to={`/streams/edit/${stream.id}`}
            className="ui right floated button "
          >
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui right floated negative basic button"
          >
            Delete
          </Link>
        </div>
      );
    }
  }
  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div className="large item" key={stream.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/streams/${stream.id}`} className="header">
              {stream.title}
            </Link>
            <div class="meta">
              <span>Description</span>
            </div>
            <div className="ui description">{stream.description}</div>
          </div>
          {this.renderAdmin(stream)}
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div>
          <Link to="/streams/new" className="ui right floated button">
            Create Stream
          </Link>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="ui fluid container">
        <div>
          <h2 className="ui header">Streams</h2>
          <div className="ui items">{this.renderList()} </div>
          {this.renderCreate()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
