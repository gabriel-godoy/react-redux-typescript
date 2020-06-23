import React from 'react';
import styles from './Page.module.scss';

type Props = {
  component: React.ComponentType;
  title?: string;
};

const Page: React.FC<Props> = ({ component: Component, title }) => {
  return (
    <div className='container'>
      {title && <h2 className={styles.pageTitle}>{title}</h2>}
      <Component />
    </div>
  );
};

export default Page;
