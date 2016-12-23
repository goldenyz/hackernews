import React, { PropTypes } from 'react';

const Story = props => (
  <div className="story">
    <div className="title">
      {props.story.get('title')}
    </div>
  </div>
);

Story.propTypes = {
  story: PropTypes.object.isRequired,
};

export default Story;
