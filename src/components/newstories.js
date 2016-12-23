import React, { PureComponent, PropTypes } from 'react';
import { List } from 'immutable';
import Story from './widget/story';

class NewStories extends PureComponent {
  componentDidMount() {
    this.props.onInitNewStories();
  }

  render() {
    return (
      <div className="new-stories">
        {this.props.stories.map(story =>
          <Story key={story.get('id')} story={story} />)}
      </div>
    );
  }
}

NewStories.propTypes = {
  stories: PropTypes.instanceOf(List).isRequired,
  onInitNewStories: PropTypes.func.isRequired,
};

export default NewStories;
