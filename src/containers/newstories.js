import { connect } from 'react-redux';
import NewStories from '../components/newstories';
import fetchNew from '../actions/fetchNew';
import fetchNewStories from '../actions/fetchNewStories';

const mapStateToProps = (state) => {
  const newStoryInfo = state.get('newStoryInfo');
  const ids = newStoryInfo.get('ids');
  const loaded = newStoryInfo.get('loaded');
  const itemByIdMap = state.get('itemByIdMap');
  return {
    stories: ids.slice(0, loaded)
      .map(id => itemByIdMap.get(id)),
  };
};

export default connect(mapStateToProps, {
  onInitNewStories: fetchNew,
  onLoadNewStories: fetchNewStories,
})(NewStories);
