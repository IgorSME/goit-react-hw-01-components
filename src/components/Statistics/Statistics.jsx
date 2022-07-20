import PropTypes from "prop-types";
import { Container, StatList } from "../Statistics/Statistics.styled"
import { StatisticsItem } from "../StatisticsItem/StatisticsItem";

export function Statistics({ title, stats }) {
    return <Container>
    {title ? <h2 className="title">{title}</h2> : ""}
  <StatList>
        {stats.map(stat => <StatisticsItem key={stat.id}
          label={stat.label}
      percentage = {stat.percentage}/>).reduce((acc, i) => {
        if (!acc.find(el => el.props.label === i.props.label)) {
    acc.push(i);
  }
  return acc;
}, [])}
    
  </StatList>
</Container>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats:PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))
}