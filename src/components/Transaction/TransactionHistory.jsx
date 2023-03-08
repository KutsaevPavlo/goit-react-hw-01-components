import css from "./Transaction.module.css";
import PropTypes from "prop-types";

export const TransactionHistory =  ({items}) =>{
    return (
    <table >
      <thead>
      <tr className={css.transactionHistory}>
      <th>Type</th>
      <th>Amount</th>
        <th>Currency</th>
        </tr>
      </thead>
                    
      <tbody className={css.transactionItems}>
          {
            items.map(({id, type, amount, currency}) =>
                  (
                                  
                      <tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                      </tr>
                  ))
            }
      </tbody>
    </table>
    )}



TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

