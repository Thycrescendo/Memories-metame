import React, { useEffect } from 'react';

const UnrealComponent = () => {
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');
    ws.onopen = () => {
      console.log('WebSocket Client Connected');
      ws.send('Hello Unreal Engine!');
    };
    ws.onmessage = (message) => {
      console.log(message.data);
    };
  }, []);

  return <div id="unreal-engine-container"></div>;
};

export default UnrealComponent;
