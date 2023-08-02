import React from 'react';

import css from './FeedbackOptions.module.css';

class FeedbackOptions extends React.Component {
  onButtonClick = event => {
    this.props.updateState(`${event.target.textContent.toLowerCase()}`);
  };

  render() {
    return (
      <ul className={css.feedback__list}>
        <li className={css.feedback__list__item}>
          <button
            type="button"
            className={css.feedback__button}
            onClick={this.onButtonClick}
          >
            Good
          </button>
        </li>
        <li className={css.feedback__list__item}>
          <button
            type="button"
            className={css.feedback__button}
            onClick={this.onButtonClick}
          >
            Neutral
          </button>
        </li>
        <li className={css.feedback__list__item}>
          <button
            type="button"
            className={css.feedback__button}
            onClick={this.onButtonClick}
          >
            Bad
          </button>
        </li>
      </ul>
    );
  }
}

export default FeedbackOptions;
