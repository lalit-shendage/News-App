import React,{ useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { UserAuth } from '../../context/authContext';
import News from './News';

const Home = () => {

  const navigate = useNavigate();
  const { user, logout } = UserAuth();
  const [favpage, setFavpage]=useState(false)
  console.log(user)
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };


  if (!user) {
    navigate('/');
    return null; 
  }

  return (
    <div>
      
    <News/>
      <button onClick={handleLogout}>Logout</button>
      
    </div>
  );
};

export default Home;
