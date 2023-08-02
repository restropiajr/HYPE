import { useState } from 'react';

export function Accordion({ accordionTopics }) {
  const [expandTopic, setExpandTopic] = useState('');

  function handleClick(id) {
    if (expandTopic === id) {
      setExpandTopic('');
    } else {
      setExpandTopic(id);
    }
  }

  return (
    <>
      {accordionTopics.map(({ id, topic, description }) => {
        return (
          <div
            className="flex w-full flex-col items-center justify-center"
            key={id}>
            <button
              onClick={() => handleClick(id)}
              className={`w-3/4 rounded border-2 border-solid border-black md:w-1/6 ${
                expandTopic === id ? 'bg-white' : 'bg-red-600'
              } text-md font-bold transition-colors duration-200 ease-in-out`}>
              {topic}
            </button>
            {expandTopic === id && (
              <p
                className={`w-3/4 rounded border-2 border-solid border-black p-2 text-justify text-xs transition-opacity duration-500 ease-in-out md:w-1/6 ${
                  expandTopic === id ? 'opacity-100' : 'opacity-0'
                }`}>
                {description}
              </p>
            )}
          </div>
        );
      })}
    </>
  );
}
