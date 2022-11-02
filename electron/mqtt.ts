import { ipcMain } from 'electron';
import mqtt from 'mqtt';

const host = 'mqtt://broker.emqx.io:1883';

const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8);

const options: mqtt.IClientOptions = {
  keepalive: 30,
  clientId: clientId,
  protocolId: 'MQTT',
  protocolVersion: 5,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  will: {
    topic: 'WillMsg',
    payload: 'Connection Closed abnormally..!',
    qos: 0,
    retain: false,
  },
  rejectUnauthorized: false,
};

type payloadType = {
  sensor: string;
  data: string | number;
};

export async function mqttInit(webContents: Electron.WebContents) {
  const client = mqtt.connect(host, options);

  client.on('error', (err) => {
    console.log('Connection error: ', err);
    client.end();
  });

  client.on('reconnect', () => {
    console.log('Reconnecting...');
  });

  client.on('connect', () => {
    console.log('Client connected:' + clientId);
    client.subscribe('BueRacingTeam', {
      qos: 0,
    });
  });

  webContents.on('did-finish-load', () => {
    client.on('message', (_topic, message) => {
      const payload: payloadType = JSON.parse(message.toString());
      console.log(payload);

      webContents.send(payload.sensor, payload.data);
    });
  });

  ipcMain.on('message', (_, message) => {
    console.log(message);
  });
}
