
export const StatisticItems = ({stats}) => {
    return stats.map(items =>{
            return (<li class="item">
            <span class="label">{items.label}</span>
            <span class="percentage">{items.percentage}</span>
          </li>);
          
        });

}