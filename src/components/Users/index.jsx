import React from 'react';
import { Skeleton } from './Skeleton';
import { User } from './User';

export const Users = ({ items,
       isLoading,
       onChangeSearchValue,
       searchValue,
       onClickInvite, invites,
       setSuc               }) => {
  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input value={searchValue} onChange={onChangeSearchValue} type="text" placeholder="Найти пользователя..." />
      </div>
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
            {items.filter(obj => {
                const fullName = (obj.firstName + obj.lastName).toLowerCase();
                return fullName.includes(searchValue.toLowerCase()) || obj.email.includes(searchValue)
            }).map(obj => <User isInvited={invites.includes(obj.id)} onClickInvite={onClickInvite}  key={obj.id} {...obj}/>)}
        </ul>
      )}
        {invites.length > 0 && <button onClick={setSuc} className="send-invite-btn">Отправить приглашение</button>}
        </>
  );
};
