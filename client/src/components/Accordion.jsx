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
              className={`w-5/6 rounded border-2 border-solid border-black md:w-1/4 ${
                expandTopic === id ? 'bg-red-600' : 'bg-white'
              } text-md font-bold transition-colors duration-200 ease-in-out md:hover:bg-red-600`}>
              {topic}
            </button>
            {expandTopic === id && (
              <p className="text-md w-5/6 rounded border-2 border-solid border-black p-2 text-justify md:w-1/4">
                {description}
              </p>
            )}
          </div>
        );
      })}
    </>
  );
}
