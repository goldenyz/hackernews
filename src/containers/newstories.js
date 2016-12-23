import { connect } from 'react-redux';
import NewStories from '../components/newstories';
import fetchNewStories from '../actions/fetchNewStories';

const mapStateToProps = (state) => {
  const storyByTypeMap = state.get('storyByTypeMap');
  const itemByIdMap = state.get('itemByIdMap');
  return {
    stories: storyByTypeMap.get('new')
      .map(newItemId => itemByIdMap.get(newItemId)),
  };
};

export default connect(mapStateToProps, {
  onInitNewStories: fetchNewStories,
})(NewStories);
