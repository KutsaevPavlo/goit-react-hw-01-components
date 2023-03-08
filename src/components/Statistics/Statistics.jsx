import {StatisticItems} from './StatisticsItem';
import css from "./Statistics.module.css";
import PropTypes from "prop-types";

export const Statistics = ({title, stats}) =>(
<section className={css.statistics}>
{title && <h2 className={css.title}>{title}</h2>}

  <ul className={css.statList}>
   <StatisticItems stats={stats}/>
  </ul>
</section>
);

Statistics.propTypes = {
    
  title: PropTypes.string.isRequired,
      
  };
  


