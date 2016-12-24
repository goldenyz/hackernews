import React, { PropTypes } from 'react';
import { convertTime } from '../../util/datetime';

import '../../res/styles/story.less';

const Story = (props) => {
  const { story } = props;
  const domain = story.get('url') ? story.get('url').split(':')[1].split('//')[1].split('/')[0] : '';

  return (
    <div className="story">
      <div className="story-content">
        <a className="title" target="_blank" rel="noopener noreferrer" href={story.get('url')}>
          <span>{story.get('title')}</span>
        </a>
        <span className={domain ? 'domain' : 'hidden'}>
          (<a href={`http://${domain}`} title="Domain">{domain}</a>)
        </span>
      </div>
      <div className="story-bottom">
        <span>{story.get('score')} {(story.get('score') > 1) ? 'points' : 'point'}</span>
        <span> by </span>
        <span className="author">{story.get('by')}</span>
        <span> | {convertTime(story.get('time'))} </span>
      </div>
    </div>
  );
};

Story.propTypes = {
  story: PropTypes.object.isRequired,
};

export default Story;
