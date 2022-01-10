import React, {useState, useEffect} from 'react';
import axios from 'axios';
import User from '../User';
import s from './userList.module.css';

function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}

export default function UserList(){
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async() =>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setData(response.data);
    await sleep(5000);
    // console.log("23");
    setIsLoading(false);
  }, []);


  return(
    <div className={s.userBox}>
      { data.map(user => {
        return ( isLoading ?
          <div className={s.loadingSpinner} key={user.id.toString()}>
            <div className={s.loading}>
              <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>
          </div>:
          <div className={s.userBox} key={user.id.toString()}>
               <User name={user.name} email={user.email} phone={user.phone} website={user.website}></User>
          </div>)
      })
      }
    </div>
  );
}
