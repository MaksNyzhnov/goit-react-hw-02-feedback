import PropTypes from 'prop-types';
import css from './Section.module.css';
import Statistics from 'components/Statistics/Statistics';

const StatisticsSection = ({ title, feedbacks }) => {
  return (
    <section className={css.section}>
      <h2 className={css.title}>{title}</h2>
      <Statistics feedbacks={feedbacks} />
    </section>
  );
};

StatisticsSection.propTypes = {
  title: PropTypes.string.isRequired,
};
export default StatisticsSection;
