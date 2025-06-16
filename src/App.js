import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
    const [users, setUsers] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [searchValue, setSearchValue] = React.useState('');
    const [invites, setInvites] = React.useState([]);
    const [succes, setSucces] = React.useState(false)



    React.useEffect( () => {
       fetch('https://684c1740ed2578be881d9efc.mockapi.io/users')
           .then(res => res.json())
           .then(data => setUsers(data))
           .catch(err => console.warn(err))
           .finally(() => setIsLoading(false)  )
    }, []);

    const onChangeSearchValue = (e) => {
        setSearchValue(e.target.value)
        console.log(searchValue)
    };


    const onClickInvite = (id) => {
        if (invites.includes(id)){
            setInvites(prevState => prevState.filter(_id => _id !== id) );
            console.log(invites)
        } else {
            setInvites(prevState => [...prevState, id])
        }
    };


    const setSuc = () => setSucces(true) ;

    // const addInvites = ()

  return (
    <div className="App">

        {succes ? <Success count={invites.length} /> :
            <Users
                setSuc={setSuc}
                searchValue={searchValue}
                onChangeSearchValue={onChangeSearchValue}
                items={users}
                isLoading={isLoading} onClickInvite={onClickInvite} invites={invites} />

        }

       {/*<Success />*/}
    </div>
  );
}

export default App;
