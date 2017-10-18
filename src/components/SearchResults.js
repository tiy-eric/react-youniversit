import React, { Component } from 'react';

class SearchResults extends Component {


    render() {

    return (
        <div>
            {JSON.stringify(this.props.currentUser)} 
        </div>
    );
    }
}

export default SearchResults;
