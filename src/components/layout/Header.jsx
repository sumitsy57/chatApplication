import { AppBar, Box, IconButton as MUIIconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { lazy, Suspense } from 'react'
import { orange } from '../../constants/color'
import { Add as AddIcon, Menu as MenuIcon, Search as SearchIcon, Group as GroupIcon, Logout as LogoutIcon, Notifications as NotifactionIcon } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';
import NewGroup from '../specific/NewGroup';

const SearchDialog = lazy(() => import('../specific/Search'));
const NotificationDialog = lazy(() => import('../specific/Notifications'));
const NewGroupDialog = lazy(() => import('../specific/NewGroup'));



const Header = () => {

  const navigate = useNavigate();

  const [isMobile, setIsMobile] = React.useState(false);
  const [isSearch, setIsSearch] = React.useState(false);
  const [isNewGroup, setIsNewGroup] = React.useState(false);
  const [isNotification, setIsNotification] = React.useState(false);



  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  };

  const openSearch = () => {
    setIsSearch((prev) => !prev);
  };

  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev);
  };

  const openNotification = () => {
    setIsNotification((prev) => !prev);
  };

  const navigateToGroup = () => {
    navigate("/Groups");
  };

  const LogoutHandler = () => {
    console.log("Logout");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"} >
        <AppBar position='static'
          sx={{
            bgcolor: orange,
            height: "4rem",
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Chat-App
            </Typography>

            <Box
              sx={{
                display: { xs: 'block', sm: 'none' }
              }}
            >
              <MUIIconButton color='inherit' onClick={handleMobile}>
                <MenuIcon />
              </MUIIconButton>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            <Box>
              <CustomIconButton
                title={"Search"}
                icon={<SearchIcon />}
                onClick={openSearch}
              />

              <CustomIconButton
                title={"New Group"}
                icon={<AddIcon />}
                onClick={openNewGroup}
              />

              <CustomIconButton
                title={"Manage Groups"}
                icon={<GroupIcon />}
                onClick={navigateToGroup}
              />

              <CustomIconButton
                title={"Notifications"}
                icon={<NotifactionIcon />}
                onClick={openNotification}
              />

              <CustomIconButton
                title={"Logout"}
                icon={<LogoutIcon />}
                onClick={LogoutHandler}
              />
            </Box>

          </Toolbar>

        </AppBar>

      </Box>

      {isSearch && 
        <Suspense fallback={<div>Loading...</div>}>
          <SearchDialog />
        </Suspense>
      }

      {isNotification &&
        <Suspense fallback={<div>Loading...</div>}>
          <NotificationDialog />
        </Suspense>
      }

      {isNewGroup &&
        <Suspense fallback={<div>Loading...</div>}>
          <NewGroup />
        </Suspense>
      }
    </>
  );
};


const CustomIconButton = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <MUIIconButton color='inherit' size='large' onClick={onClick}>
        {icon}
      </MUIIconButton>
    </Tooltip>
  );
};

export default Header;
