import PropTypes from 'prop-types';
import { Container, StatList } from '../Statistics/Statistics.styled';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import { findUniqueItems } from '../../helpers/findUniqueItem';

export function Statistics({ title, stats }) {
  return (
    <Container>
      {title && <h2 className="title">{title}</h2>}
      <StatList>
        {stats
          .map(stat => (
            <StatisticsItem
              key={stat.id}
              label={stat.label}
              percentage={stat.percentage}
            />
          ))
          .reduce((acc, i) => findUniqueItems(acc, i), [])}
      </StatList>
    </Container>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
