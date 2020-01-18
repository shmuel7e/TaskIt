import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {
  
  

    render() {
        return (
            <div className="homepage-container" >
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      loggedInUser: state.user.loggedInUser,
      websites: state.website.selectedWebsite
    };
  };
  const mapDispatchToProps = {
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(HomePage);