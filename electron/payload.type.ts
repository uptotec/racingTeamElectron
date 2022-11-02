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

export type viewPayloadDataType = 'analog' | 'digital' | 'camera';

type payloadType =
  | {
      type: 'metrics';
      data: metricsPayloadDataType;
    }
  | {
      type: 'indicators';
      data: indicatorPayloadDataType;
    }
  | {
      type: 'view';
      data: viewPayloadDataType;
    };

export default payloadType;
