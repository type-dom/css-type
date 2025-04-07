import { Properties, PropertiesHyphen } from './index';

export interface IStyle<TLength = string | 0, TTime = string>
  extends Properties<TLength, TTime>,
    PropertiesHyphen<TLength, TTime> {}
