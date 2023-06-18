import { Outlet } from '@remix-run/react';

import MainHeader from '~/components/navigation/MainHeader';
import styles from '~/styles//marketing.css';

export const MarketingLayout = () => {
  return (
    <>
      <MainHeader />
      <Outlet />;
    </>
  );
};

export default MarketingLayout;

export const links = () => [{ rel: 'stylesheet', href: styles }];
