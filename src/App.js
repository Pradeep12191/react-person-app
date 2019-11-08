import React from 'react';
import logo from './logo.svg';
import * as styles from './App.module.scss';
import PersonList from './containers/PersonList/PersonList';
import AddPerson from './components/AddPerson/AddPerson';

function App() {
  return (
    <div className={styles.App}>
      <AddPerson />
      <PersonList />
    </div>
  );
}

export default App;
