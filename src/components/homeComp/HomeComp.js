import React, { Component } from 'react';

import { imagePath } from '../../utils/assetUtils';
import styles from './home.scss';

class HomeComp extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.title}>About page</h1>
        <img className={styles.homeLogo} src={imagePath('react.svg')} alt="" />
      </div>
    );
  }
}

export default HomeComp;
