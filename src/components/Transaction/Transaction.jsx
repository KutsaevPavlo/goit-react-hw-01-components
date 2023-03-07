import { TransactionHistory } from "./TransactionHistory";
import css from "./Transaction.module.css";

export const Transaction = ({items}) => (

<table >
                <thead>
                  <tr className={css.transactionHistory}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                  </tr>
                </thead>
                

                <tbody className={css.transactionItems}>
                  <TransactionHistory items={items}/>
                </tbody>
                                 
              </table>


    );

    