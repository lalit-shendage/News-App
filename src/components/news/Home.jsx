import React,{ useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { UserAuth } from '../../context/authContext';
import News from './News';

const Home = () => {

  const navigate = useNavigate();
  const { user, logout } = UserAuth();
  const [favpage, setFavpage]=useState(false)
 
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
   
      <>
     
    <div className="container-fluid">
       <div className="title  px-4 py-2">
      <div className="row">
        <div className="col-md-6">
          <h1>News-App</h1>
        </div>
        <div className="col-md-6 text-end">
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      </div>
      <News/>
    </div>
    </>
    
  );
};

export default Home;
