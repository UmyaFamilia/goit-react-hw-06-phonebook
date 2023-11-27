import css from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { removeContact } from '../redux/reduseContact';
import { useSelector } from 'react-redux';
import React from 'react';
export function ContactList() {
  let array = useSelector(state => state.addgetContact.contacts);
  let filterValue = useSelector(state => state.filter.filter);

  const dispatch = useDispatch();
  const remove = id => {
    dispatch(removeContact(id));
  };

  const arrayFiltration = () => {
    if (filterValue.filter) {
      return array.filter(e =>
        e.name.toLowerCase().includes(filterValue.filter)
      );
    } else {
      return array;
    }
  };

  return (
    <>
      <h4>Contacts:</h4>
      <ul>
        {array ? (
          arrayFiltration().map(a => (
            <li key={a.id} className={css.number}>
              {`name:  ${a.name} number:  ${a.number}`}
              <button
                onClick={() => {
                  remove(a.id);
                }}
                className={css.button}
              >
                delete
              </button>
            </li>
          ))
        ) : (
          <>nothing</>
        )}
      </ul>
    </>
  );
}
