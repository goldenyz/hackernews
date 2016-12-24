import { connect } from 'react-redux';
import ItemsContainer from '../components/itemsContainer';
import fetchItems from '../actions/fetchItems';

const mapStateToProps = (state) => {
  const itemsContainer = state.get('itemsContainer');
  const ids = itemsContainer.get('ids');
  const loaded = itemsContainer.get('loaded');
  const itemByIdMap = state.get('itemByIdMap');
  return {
    items: ids.slice(0, loaded)
      .map(id => itemByIdMap.get(id)),
    status: itemsContainer.get('status'),
  };
};

export default connect(mapStateToProps, {
  onLoadItems: fetchItems,
})(ItemsContainer);
