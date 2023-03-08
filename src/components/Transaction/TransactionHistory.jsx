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









// export const FriendListItem = ({friends}) => {
//   return (
//   <ul  className={css.friendList}>
//   {friends.map(({ avatar, name, isOnline, id }) => (
           
//             <li key={id} className={css.item}>
//               <span className={clsx(css.status, isOnline && css.isOnline)}></span>
//               <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
//               <p className={css.name}>{name}</p>
//             </li>                             
//       ))}
// </ul>);







TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

// export const TransactionHistory =  ({items}) =>{
//   return items.map(({id, type, amount, currency}) =>{
//           return (
                           
//                 <tr key={id}>
//                   <td>{type}</td>
//                   <td>{amount}</td>
//                   <td>{currency}</td>
//                 </tr>
             
//         );
        
//       });

// }