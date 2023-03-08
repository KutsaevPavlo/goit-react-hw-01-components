import css from "./Statistics.module.css";
import PropTypes from "prop-types";

export const Statistics = ({title, stats}) =>(
<section className={css.statistics}>
{title && <h2 className={css.title}>{title}</h2>}

  <ul className={css.statList}>
   { stats.map(items =>{
      return (<li key={items.id} className={css.item}>
      <span className={css.label}>{items.label}</span>
      <span className={css.percentage}>{items.percentage}%</span>
    </li>);
    })
    }
  </ul>
</section>
);

Statistics.propTypes = {
 title: PropTypes.string.isRequired,
 };
  


