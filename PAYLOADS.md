# Payloads Between Screen and Sensors

all data between sensors and screen will be sent throw MQTT Broker on a single channel called **`BueRacingTeam`** and depending on the payload the screen state will change.

there is four type of payloads

1. metrics payload
2. indicators payload
3. laps payload
4. view payload

all payloads will be in **_JSON format_** and will follow the following structure while changing the data object type.

```typescript
{
  type: string;
  data: object;
}
```

**_! IMPORTANT_**
**_Sensors should send all data as retained messages_**
**_Sensors should send all payloads periodicly (Ex. every second)_**

## 1. Metrics Payload

this payload will update all sensors readings on the screen. the payload structure as follow.

```typescript
{
  type: 'metrics';
  data: {
    speed: number;
    battery: number;
    voltage: number;
    current: number;
    temp: number;
    range: number;
  }
}
```

example

```JSON
{
  "type": "metrics",
  "data": {
    "speed": 55,
    "battery": 85,
    "voltage": 3.3,
    "current": 53,
    "temp": 70,
    "range": 40
  }
}
```

## 2. Indicators Payload

this payload will update all indicators on the screen. the payload structure as follow.

```typescript
{
  type: 'indicators';
  data: {
    doors: boolean;
    temp: boolean;
    seatbelt: boolean;
    smoke: boolean;
  }
}
```

example

```JSON
{
  "type": "indicators",
  "data": {
    "doors": true,
    "seatbelt": true,
    "temp": false,
    "smoke": true
  }
}
```

## 3. Laps Payload

## 4. View Payload

this payload will update all view on the screen between digital, analog and camera. the payload structure as follow.

```typescript
{
  type: 'view';
  data: 'analog' | 'digital' | 'camera';
}
```

example

```JSON
{
  "type": "view",
  "data": "analog"
}
```
