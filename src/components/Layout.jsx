import { Box } from './Box';
import { AppMenu } from './AppMenu';
import { Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <Box>
      <AppMenu />
      <Outlet />
    </Box>
  );
};
