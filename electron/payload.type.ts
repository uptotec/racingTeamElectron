export type indicatorPayloadDataType = {
  doors: boolean;
  temp: boolean;
  seatbelt: boolean;
  smoke: boolean;
};

export type metricsPayloadDataType = {
  speed: number;
  battery: number;
  voltage: number;
  current: number;
  temp: number;
  range: number;
};

type payloadType =
  | {
      type: 'metrics';
      data: metricsPayloadDataType;
    }
  | {
      type: 'indicators';
      data: indicatorPayloadDataType;
    };

export default payloadType;
