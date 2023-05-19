import { ButtonCountRequest } from '../../../http';

export const mapUpdateCount = (count: number): ButtonCountRequest => ({
  count,
});
