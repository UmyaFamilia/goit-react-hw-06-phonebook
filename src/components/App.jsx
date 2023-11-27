import { ContactList } from './ContactList/ContactLIst';

import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';

export function App() {
  localStorage.clear();
  return (
    <div className="container">
      <Form />
      <Filter />
      {/* <ContactList contacts={forContactList()} /> */}
      <ContactList />
    </div>
  );
}
