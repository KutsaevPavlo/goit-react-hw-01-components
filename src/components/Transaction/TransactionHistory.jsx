export const TransactionHistory =  ({items }) =>{
    return items.map(item =>{
            return (
                
              
                <tbody>
                  <tr>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                  </tr>
                  
                </tbody>
            
          );
          
        });

}