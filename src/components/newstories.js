import React, { PureComponent, PropTypes } from 'react';
import { List } from 'immutable';
import Story from './widget/story';
import config from '../config';

class NewStories extends PureComponent {
  componentDidMount() {
    this.props.onInitNewStories()
      .then(() => this.props.onLoadNewStories(config.items_per_page));
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
  onLoadNewStories: PropTypes.func.isRequired,
};

export default NewStories;
