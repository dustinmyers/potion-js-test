import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pack } from '@potion/layout';
import { Svg, Circle } from '@potion/element';

import { skills as data } from './data';

import './styles.css';

// const data = {
//   children: [
//     { value: 1, key: '1' },
//     { value: 2, key: '2' },
//     { value: 3, key: '3' }
//   ]
// };

function App() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    setSkills(data);
  }, []);
  const colors = ['blue', 'green', 'purple', 'yellow', 'orange', 'red'];

  const formattedSkills = skills.map(skill => {
    return {
      value: skill.level,
      key: skill.name
    };
  });
  return (
    <div className="App">
      <Svg width={400} height={400}>
        <Pack
          data={{ children: formattedSkills }}
          sum={datum => datum.value}
          size={[400, 400]}
          includeRoot={false}
          nodeEnter={d => ({ ...d, r: 0 })}
          animate
          padding={15}
        >
          {nodes =>
            nodes.map(({ x, y, r, key }, i) => (
              <Circle key={key} cx={x} cy={y} r={r} fill={colors[i]} />
            ))
          }
        </Pack>
      </Svg>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
