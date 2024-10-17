import React from 'react';
import JsonFetch from './components/JsonFetch';

function App() {
  return (
    <div className={'wrapper'}>
      <header className={'header'} id={'header'}>
        <div className={'header__body _container'}>
          <h2 className={'header__title'}>Домашнее задание «Hooks, Context API»</h2>
        </div>
      </header>

      <main className={'main'}>
        <div className={'main__item task _container'} id={'task2'}>
          <header className={'task__header'}>
            <h3 className={'task__title'}>useJsonFetch</h3>
          </header>
          <div className={'task__body task__body_task2'}>
            <JsonFetch />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
