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
    const onClickInvites = (id) => {
        const stringId = String(id); // 👈 приводим к строке

        setInvites((prev) =>
            prev.includes(stringId)
                ? prev.filter((_id) => _id !== stringId)
                : [...prev, stringId]
        );

    };


    // const addInvites = ()

  return (
    <div className="App">
      <Users
          onClickInvites={onClickInvites}
          invites={invites}
          searchValue={searchValue}
          onChangeSearchValue={onChangeSearchValue}
          items={users}
          isLoading={isLoading} />
       {/*<Success />*/}
    </div>
  );
}

export default App;
