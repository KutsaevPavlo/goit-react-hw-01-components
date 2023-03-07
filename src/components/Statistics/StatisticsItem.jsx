import css from "./Statistics.module.css";
import PropTypes from "prop-types";


export const StatisticItems = ({stats}) => {
    return stats.map(items =>{
            return (<li key={items.id} className={css.item}>
            <span className={css.label}>{items.label}</span>
            <span className={css.percentage}>{items.percentage}%</span>
          </li>);
          
        });

}


StatisticItems.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.exact
    ({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }))
};

