import OBSWebSocket from 'obs-websocket-js';

const obs = new OBSWebSocket();

const asynch = async () => {
  await obs.connect('ws://192.168.0.8:4455');
  const res = await obs.call('SetCurrentProgramScene',
    {sceneName: 'Valorant'})
  console.log(res)
  await obs.disconnect();
}

asynch();
