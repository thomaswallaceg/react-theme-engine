import React, { useState } from 'react';

import { ThemeProvider, THEMES } from '../../assets/themes/themes';
import styles from './home.module.scss';
import globalStyles from '../../assets/stylesheets/global-styles.module.scss';

const Home = () => {
  const [darkMode, setDarkmode] = useState(false);

  const changeColors = () => {
    ThemeProvider.loadTheme(darkMode ? THEMES.DEFAULT : THEMES.DARK)
    return setDarkmode(!darkMode);
  };

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <h1 className={styles.title}>
          Welcome! This is the homepage.
        </h1>
        <h2 className={styles.subtitle}>
          First subtitle
        </h2>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus orci, porttitor eget porttitor ut, euismod et nisi. Duis tempus lobortis augue pharetra commodo. Donec et lorem sit amet ligula euismod elementum eget et odio. Sed tristique nisi fermentum semper mollis. Fusce volutpat, sapien a malesuada tincidunt, odio diam luctus nulla, semper molestie nunc justo quis augue. Nullam posuere purus at velit lacinia cursus. Etiam id consectetur enim. Proin sagittis lorem eu scelerisque lobortis.
        </p>
        <p className={styles.paragraph}>
          Nullam vitae commodo orci, vitae egestas est. Praesent rutrum imperdiet libero, ac suscipit sem consectetur tempor. Sed aliquet a quam at aliquet. Sed facilisis pellentesque erat a fringilla. Integer nisl lectus, iaculis ac urna sit amet, ornare elementum turpis. Nunc congue auctor est, non vestibulum leo tempor non. Donec ac aliquet est. Donec dui dui, semper eget neque non, posuere scelerisque justo. Nulla scelerisque est non scelerisque bibendum. Fusce vehicula, ipsum ut auctor consequat, diam metus tempus leo, in convallis purus enim non lacus. In pellentesque pretium enim, quis dignissim quam aliquam nec.
        </p>
        <h2 className={styles.subtitle}>
          Second subtitle
        </h2>
        <p className={styles.paragraph}>
          Nam quis nibh a dui semper sodales. Nullam tempor non tellus ac mollis. Vestibulum mollis eleifend quam, in euismod nibh volutpat ac. Aenean sit amet tincidunt nisl. Sed ultrices pellentesque commodo. Duis sapien magna, accumsan et fermentum nec, commodo id quam. Fusce quis aliquet enim. Aenean posuere ultrices ipsum quis tincidunt.
        </p>
        <p className={styles.paragraph}>
          Pellentesque hendrerit lacinia vehicula. Morbi a sollicitudin justo, a sagittis lacus. Suspendisse ultricies sapien ut egestas suscipit. Nullam ut lacinia dui. Mauris quis odio consequat tortor imperdiet suscipit sed vel diam. Praesent. 
        </p>
        <br />
        <br />
        <button type="button" onClick={changeColors} className={styles.button}>Change theme!</button>
      </div>
    </div>
  );
};

export { Home };
