import { nanoid } from '@reduxjs/toolkit';
import { addCash, getCash } from '../redux/cashSlice';
import { addUser, removeUser } from '../redux/userSlise.js';
import { useDispatch, useSelector } from 'react-redux';
export const App = () => {
  const cash = useSelector(state => state.toolkit.count);
  const loh = useSelector(state => state.loh.users);

  const dispatch = useDispatch();
  const add = () => {
    dispatch(addCash(5));
  };
  const get = () => {
    dispatch(getCash(5));
  };
  const addSomeOne = a => {
    const user = {
      id: nanoid(),
      name: a,
    };
    dispatch(addUser(user));
  };
  const removeloh = id => {
    dispatch(removeUser(id));
  };

  return (
    <div>
      <button
        onClick={() => {
          add();
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          get();
        }}
      >
        get
      </button>
      <p>{cash}</p>
      <div>
        <button
          onClick={() => {
            addSomeOne(prompt());
          }}
        >
          add Someone user
        </button>
        {loh.length > 0 ? (
          <ul>
            {loh.map(a => (
              <li
                key={a.id}
                onClick={() => {
                  removeloh(a.id);
                }}
              >
                {a.name}{' '}
              </li>
            ))}
          </ul>
        ) : (
          <p>nothing</p>
        )}
      </div>
    </div>
  );
};
