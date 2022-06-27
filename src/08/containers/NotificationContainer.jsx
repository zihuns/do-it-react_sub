import { connect } from 'react-redux';
import Notification from '../components/main/Notification';

const mapStateToProps = (state) => {
  const { hasError, errorMessage, warning } = state.transactions;
  return { hasError, errorMessage, warning };
};

export default connect(mapStateToProps)(Notification);
