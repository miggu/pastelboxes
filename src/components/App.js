import React from "react";
import StoryPanel from "./StoryPanel";
import SearchBox from "./SearchBox";
import InfiteScroll from "./InfiniteScroll";
import { Container, Navbar, Section } from "react-bulma-components/full";
import api from "../api";
import {
  fetchRefs,
  fetchStory,
  toggleLoading,
  searchTermInput
} from "../actions";
import { connect } from "react-redux";

//un comentario bonito 
const initialStoriesCount = 16;

class App extends React.Component {
  componentDidMount = async () => {
    await this.props.fetchRefs();
    for (let i = 0; i < initialStoriesCount; i++) {
      this.props.toggleLoading();
      await this.props.fetchStory(this.props.storyRefs[i]);
      this.props.toggleLoading();
    }
  };

  clickHandler = e => {
    const searchTerm = e.target.value;
    this.setState({ searchTerm });
  };

  loadMore = async () => {
    if (!this.props.isLoading) {
      this.props.toggleLoading();
      const storyRefs = this.props.storyRefs;
      const index = this.props.shownStories.length;

      for (let i = index; i < index + 16; i++) {
        await this.props.fetchStory(this.props.storyRefs[i]);
      }

      this.props.toggleLoading();
    }
  };

  render() {
    const { shownStories } = this.props;
    return (
      <div>
        <Navbar color="danger">
          <Navbar.Brand>
            <Navbar.Item renderAs="a" href="#">
              <h1>News from Hackernews</h1>
            </Navbar.Item>

            <Navbar.Item renderAs="a" href="#">
              <SearchBox clickHandler={this.props.searchTermReducer} />
            </Navbar.Item>

            <Navbar.Burger />
          </Navbar.Brand>
        </Navbar>
        <Container>
          {shownStories.length ? (
            <Section>
              <StoryPanel
                stories={shownStories.filter(story =>
                  story.title
                    .toLowerCase()
                    .includes(this.props.searchTerm.toLowerCase())
                )}
              />
            </Section>
          ) : null}
          {shownStories.length ? (
            <InfiteScroll loadMore={this.loadMore} />
          ) : null}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    storyRefs: state.storyRefs,
    shownStories: state.shownStories,
    searchTerm: state.searchTerm,
    isLoading: state.isLoading
  };
};

export default connect(
  mapStateToProps,
  {
    fetchRefs: fetchRefs,
    fetchStory: fetchStory,
    toggleLoading: toggleLoading
  }
)(App);
