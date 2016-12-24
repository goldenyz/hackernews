import { connect } from 'react-redux';
import ItemsContainer from './itemsContainer';
import fetchItemList from '../actions/fetchItemList';
import ItemType from '../constants/itemType';

export default connect(null, {
  onInitItems: () => fetchItemList(ItemType.SHOW_STORY),
})(ItemsContainer);
