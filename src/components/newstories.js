import React, { PureComponent, PropTypes } from 'react';
import { List } from 'immutable';
import Story from './widget/story';
import config from '../config';
import { getWindowSize } from '../util/dom';
import Status from '../constants/status';
import Loading from './widget/loading';

import '../res/styles/newstories.less';

class NewStories extends PureComponent {
  constructor(props) {
    super(props);

    this._handleScroll = this._handleScroll.bind(this);
    this._newStoriesDOM = undefined;
  }

  componentDidMount() {
    this.props.onInitNewStories()
      .then(() => this._loadMoreStories());
    window.addEventListener('scroll', this._handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._handleScroll);
  }

  _handleScroll() {
    if (!this._newStoriesDOM) return;

    const windowSize = getWindowSize();
    const domRect = this._newStoriesDOM.getBoundingClientRect();
    if (windowSize.height >= domRect.bottom) {
      this._loadMoreStories();
    }
  }

  _loadMoreStories() {
    if (this.props.status === Status.LOADING) return;
    this.props.onLoadNewStories(config.items_per_page);
  }

  render() {
    return (
      <div id="new-stories" ref={(ref) => { this._newStoriesDOM = ref; }}>
        <div className="story-list">
          {
            this.props.stories.map(story =>
              <Story key={story.get('id')} story={story} />)
          }
        </div>
        {
          this.props.status === Status.LOADING &&
            <div className="loader">
              <Loading />
            </div>
        }
      </div>
    );
  }
}

NewStories.propTypes = {
  stories: PropTypes.instanceOf(List).isRequired,
  status: PropTypes.symbol.isRequired,
  onInitNewStories: PropTypes.func.isRequired,
  onLoadNewStories: PropTypes.func.isRequired,
};

export default NewStories;
