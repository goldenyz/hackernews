import React, { PureComponent, PropTypes } from 'react';
import { List } from 'immutable';
import Story from './widget/story';
import config from '../config';
import { getWindowSize } from '../util/dom';
import Status from '../constants/status';
import Loading from './widget/loading';

import '../res/styles/newstories.less';

class ItemsContainer extends PureComponent {
  constructor(props) {
    super(props);

    this._handleScroll = this._handleScroll.bind(this);
    this._newStoriesDOM = undefined;
  }

  componentDidMount() {
    this.props.onInitItems()
      .then(() => this._loadMoreItems());
    window.addEventListener('scroll', this._handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._handleScroll);
  }

  _handleScroll() {
    if (!this._newStoriesDOM ||
      this.props.status === Status.LOADING) return;

    const windowSize = getWindowSize();
    const domRect = this._newStoriesDOM.getBoundingClientRect();
    if (windowSize.height >= domRect.bottom) {
      this._loadMoreItems();
    }
  }

  _loadMoreItems() {
    this.props.onLoadItems(config.items_per_page);
  }

  render() {
    let ItemClass = Story;

    return (
      <div id="new-stories" ref={(ref) => { this._newStoriesDOM = ref; }}>
        <div className="story-list">
          {
            this.props.items.map(item => (
              <ItemClass key={item.get('id')} item={item} />
            ))
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

ItemsContainer.propTypes = {
  items: PropTypes.instanceOf(List).isRequired,
  status: PropTypes.symbol.isRequired,
  onInitItems: PropTypes.func.isRequired,
  onLoadItems: PropTypes.func.isRequired,
};

export default ItemsContainer;
