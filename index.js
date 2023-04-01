import OBSWebSocket from 'obs-websocket-js';
process.argv.forEach(function (val, index, array) {
  if(index === 2) {

    const obs = new OBSWebSocket();

    const asynch = async () => {
      await obs.connect('ws://192.168.0.8:4455');
      const res = await obs.call('SetCurrentProgramScene',
        {sceneName: val})
      console.log(res)
      await obs.disconnect();
    }

    asynch();
  } 
});
