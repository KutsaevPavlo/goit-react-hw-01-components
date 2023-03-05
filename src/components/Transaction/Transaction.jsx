import { TransactionHistory } from "./TransactionHistory";

export const Transaction = ({items}) => (

<table class="transaction-history">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                  </tr>
                </thead>
                
                 <TransactionHistory items={items}/>
                
              </table>


    );