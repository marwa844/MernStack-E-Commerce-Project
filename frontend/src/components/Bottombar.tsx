import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import { useNavigate } from 'react-router-dom';
import { HomeFilled, Person, ShoppingCart, Widgets } from '@mui/icons-material';
import { useAuth } from '../context/Auth/AuthContext';

export default function BottomBar() {
      const {  isAuthenticated } = useAuth();
  const [value, setValue] = React.useState('home');
  const navigate = useNavigate(); // هذه لتغيير الصفحة

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);

    switch (newValue) {
      case 'home':
        navigate('/');
        break;
      case 'category':
        navigate('/maincategories');
        break;
      case 'cart':
        navigate('/cart');
        break;
      case 'account':
    navigate(isAuthenticated ? '/order' : '/login');
        break;
      default:
        break;
    }
  };

  return (
    <BottomNavigation sx={{ width: "100%" , position:"fixed", left:0, right:0, bottom:0 , display: { xs: "flex", md: "none" } }} value={value} onChange={handleChange} className='bottomBar'>
      <BottomNavigationAction label="Home" value="home" icon={<HomeFilled />} />
      <BottomNavigationAction label="Categories" value="category" icon={<Widgets />} />
      <BottomNavigationAction label="Cart" value="cart" icon={<ShoppingCart />} />
      <BottomNavigationAction label="Account" value="account" icon={<Person />} />
    </BottomNavigation>
  );
}

