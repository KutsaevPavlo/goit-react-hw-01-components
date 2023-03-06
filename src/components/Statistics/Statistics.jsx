import {StatisticItems} from './StatisticsItem';
import css from "./Statistics.module.css";

export const Statistics = ({title, stats}) =>(
<section className={css.statistics}>
  <h2 className={css.title}>{title}</h2>

  <ul className={css.statList}>
   <StatisticItems stats={stats}/>
  </ul>
</section>
);