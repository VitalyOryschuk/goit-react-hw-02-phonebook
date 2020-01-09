import React from 'react';
import styles from './Filter.module.css';
import T from 'prop-types';

const Filter = ({ value, onChangeFilter }) => (
  <div className={styles.FilterForm}>
    <label>
      Find contacts by name
      <input
        value={value}
        onChange={onChangeFilter}
        className={styles.input}
        type="text"
      ></input>
    </label>
  </div>
);

Filter.propTypes = {
  value: T.string.isRequired,
  onChangeFilter: T.func.isRequired,
};

export default Filter;
