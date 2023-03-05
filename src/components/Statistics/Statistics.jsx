import {StatisticItems} from './StatisticsItem'

export const Statistics = ({title, stats}) =>(
<section class="statistics">
  <h2 class="title">{title}</h2>

  <ul class="stat-list">
   <StatisticItems stats={stats}/>
  </ul>
</section>
);