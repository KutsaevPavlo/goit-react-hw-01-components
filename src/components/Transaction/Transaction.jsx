import { TransactionHistory } from "./TransactionHistory";
import PropTypes from "prop-types";


export const Transaction = ({items}) => (
  <TransactionHistory items={items}/>);

  TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  };
  