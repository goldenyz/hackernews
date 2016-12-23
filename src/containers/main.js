import { connect } from 'react-redux';
import Main from '../components/main';

const mapStateToProps = state => (
  {
    status: state.get('status'),
  }
);

export default connect(mapStateToProps)(Main);
