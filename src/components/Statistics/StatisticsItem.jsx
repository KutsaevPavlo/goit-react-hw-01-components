import css from "./Statistics.module.css";
import PropTypes from "prop-types";


export const StatisticItems = ({stats}) => {
    return stats.map(({id, label, percentage}) => {
            return (<li key={id} className={css.item}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
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

