import React from 'react';

import css from './Statistics.module.css';

class Statistics extends React.Component {
  calcTotalFeedbacks(a, b, c) {
    return Number(a) + Number(b) + Number(c);
  }
  calcPositivePercentage(a, b, c) {
    const total = Number(a) + Number(b) + Number(c);
    return (a / total) * 100;
  }
  render() {
    const { bad, good, neutral } = this.props.feedbacks;

    return (
      <ul className={css.statistics__list} onClick={this.show}>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total: {this.calcTotalFeedbacks(good, bad, neutral)}</p>
        </li>
        <li>
          <p>
            Positive feedback: {this.calcPositivePercentage(good, bad, neutral)}
            %
          </p>
        </li>
      </ul>
    );
  }
}

export default Statistics;
