import React, { PropTypes } from 'react';
import { convertTime } from '../../util/datetime';

import '../../res/styles/story.less';

const Story = (props) => {
  const { item } = props;
  const domain = item.get('url') ? item.get('url').split(':')[1].split('//')[1].split('/')[0] : '';

  return (
    <div className="story">
      <div className="story-content">
        <a className="title" target="_blank" rel="noopener noreferrer" href={item.get('url')}>
          <span>{item.get('title')}</span>
        </a>
        <span className={domain ? 'domain' : 'hidden'}>
          (<a href={`http://${domain}`} title="Domain">{domain}</a>)
        </span>
      </div>
      <div className="story-bottom">
        <span>{item.get('score')} {(item.get('score') > 1) ? 'points' : 'point'}</span>
        <span> by </span>
        <span className="author">{item.get('by')}</span>
        <span> | {convertTime(item.get('time') * 1000)} </span>
      </div>
    </div>
  );
};

Story.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Story;
