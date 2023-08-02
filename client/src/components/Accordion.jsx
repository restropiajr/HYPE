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
              className={`w-3/4 rounded border-2 border-solid border-black ${
                expandTopic === id ? 'bg-white' : 'bg-red-600'
              } text-md font-bold`}>
              {topic}
            </button>
            {expandTopic === id && (
              <p className="w-3/4 rounded border-2 border-solid border-black p-2 text-justify text-xs">
                {description}
              </p>
            )}
          </div>
        );
      })}
    </>
  );
}
