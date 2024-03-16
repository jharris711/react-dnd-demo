import { useState, useCallback } from 'react';
import update from 'immutability-helper';

import { DraggableComponent } from './components/draggable-component';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

interface Item {
  id: number;
  content: React.ReactNode;
}

function App() {
  const [els, setEls] = useState<Item[]>([
    {
      id: 1,
      content: (
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <>
          <h1>React DnD Example</h1>
          <p>Drag anything here to test it out</p>
        </>
      ),
    },
    {
      id: 3,
      content: (
        <div className="card">
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      ),
    },
  ]);

  const moveEl = useCallback((dragIndex: number, hoverIndex: number) => {
    setEls((prevEls: Item[]) =>
      update(prevEls, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevEls[dragIndex] as Item],
        ],
      })
    );
  }, []);

  return (
    <>
      {els.map((el, index) => {
        return (
          <>
            <DraggableComponent
              key={el.id}
              id={el.id}
              index={index}
              type="landing-page-element"
              onDrop={moveEl}
            >
              {el.content}
            </DraggableComponent>
          </>
        );
      })}
    </>
  );
}

export default App;
