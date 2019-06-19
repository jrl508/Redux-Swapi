import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacter } from '../actions'
import Loader from 'react-loader-spinner'

// import actions

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // call our action
    this.props.getCharacter();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <div className="loading">
        <Loader type="Oval" color="#00bfff" height="200" width="150" />
      </div>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
  fetching: state.fetching,
  characters: state.characters
})

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    getCharacter 
  }
)(CharacterListView);
