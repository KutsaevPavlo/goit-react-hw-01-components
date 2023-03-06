import css from "./Statistics.module.css";


export const StatisticItems = ({stats}) => {
    return stats.map(items =>{
            return (<li className={css.item}>
            <span className={css.label}>{items.label}</span>
            <span className={css.percentage}>{items.percentage}%</span>
          </li>);
          
        });

}