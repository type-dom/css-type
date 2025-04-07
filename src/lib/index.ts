import { AdvancedPseudos } from './advanced-pseudos';
import { SimplePseudos } from './simple-pseudos';
import { ObsoleteProperties } from './obsolete-properties';
import { ObsoletePropertiesHyphen } from './obsolete-properties-hyphen';
import { StandardLonghandProperties } from './standard-longhand-properties';
import { StandardShorthandProperties } from './standard-shorthand-properties';
import { StandardLonghandPropertiesHyphen } from './standard-longhand-properties-hyphen';
import { StandardShorthandPropertiesHyphen } from './standard-shorthand-properties-hyphen';
import { SvgProperties } from './svg-properties';
import { SvgPropertiesHyphen } from './svg-properties-hyphen';
import { VendorLonghandProperties } from './vendor-longhand-properties';
import { VendorShorthandProperties } from './vendor-shorthand-properties';
import { VendorLonghandPropertiesHyphen } from './vendor-longhand-properties-hyphen';
import { VendorShorthandPropertiesHyphen } from './vendor-shorthand-properties-hyphen';

export interface Properties<TLength = string | 0, TTime = string>
  extends StandardProperties<TLength, TTime>,
    VendorProperties<TLength, TTime>,
    ObsoleteProperties<TLength, TTime>,
    SvgProperties<TLength, TTime> {}

export interface PropertiesHyphen<
  TLength = string | 0,
  TTime = string
> extends StandardPropertiesHyphen<TLength, TTime>,
    VendorPropertiesHyphen<TLength, TTime>,
    ObsoletePropertiesHyphen<TLength, TTime>,
    SvgPropertiesHyphen<TLength, TTime> {}

export type PropertyValue<TValue> = TValue extends Array<infer AValue>
  ? Array<AValue extends infer TUnpacked ? TUnpacked : AValue>
  : TValue extends infer TUnpacked
  ? TUnpacked
  : TValue;

export type Fallback<T> = {
  [P in keyof T]: T[P] | readonly NonNullable<T[P]>[];
};

export interface StandardProperties<
  TLength = string | 0,
  TTime = string
> extends StandardLonghandProperties<TLength, TTime>,
    StandardShorthandProperties<TLength, TTime> {}

export interface VendorProperties<
  TLength = string | 0,
  TTime = string
> extends VendorLonghandProperties<TLength, TTime>,
    VendorShorthandProperties<TLength, TTime> {}

export interface StandardPropertiesHyphen<
  TLength = string | 0,
  TTime = string
> extends StandardLonghandPropertiesHyphen<TLength, TTime>,
    StandardShorthandPropertiesHyphen<TLength, TTime> {}

export interface VendorPropertiesHyphen<
  TLength = string | 0,
  TTime = string
> extends VendorLonghandPropertiesHyphen<TLength, TTime>,
    VendorShorthandPropertiesHyphen<TLength, TTime> {}

export type StandardLonghandPropertiesFallback<
  TLength = string | 0,
  TTime = string
> = Fallback<StandardLonghandProperties<TLength, TTime>>;

export type StandardShorthandPropertiesFallback<
  TLength = string | 0,
  TTime = string
> = Fallback<StandardShorthandProperties<TLength, TTime>>;

export interface StandardPropertiesFallback<
  TLength = string | 0,
  TTime = string
> extends StandardLonghandPropertiesFallback<TLength, TTime>,
    StandardShorthandPropertiesFallback<TLength, TTime> {}

export type VendorLonghandPropertiesFallback<
  TLength = string | 0,
  TTime = string
> = Fallback<VendorLonghandProperties<TLength, TTime>>;

export type VendorShorthandPropertiesFallback<
  TLength = string | 0,
  TTime = string
> = Fallback<VendorShorthandProperties<TLength, TTime>>;

export interface VendorPropertiesFallback<
  TLength = string | 0,
  TTime = string
> extends VendorLonghandPropertiesFallback<TLength, TTime>,
    VendorShorthandPropertiesFallback<TLength, TTime> {}

export type ObsoletePropertiesFallback<
  TLength = string | 0,
  TTime = string
> = Fallback<ObsoleteProperties<TLength, TTime>>;

export type SvgPropertiesFallback<
  TLength = string | 0,
  TTime = string
> = Fallback<SvgProperties<TLength, TTime>>;

export interface PropertiesFallback<
  TLength = string | 0,
  TTime = string
> extends StandardPropertiesFallback<TLength, TTime>,
    VendorPropertiesFallback<TLength, TTime>,
    ObsoletePropertiesFallback<TLength, TTime>,
    SvgPropertiesFallback<TLength, TTime> {}

export type StandardLonghandPropertiesHyphenFallback<
  TLength = string | 0,
  TTime = string
> = Fallback<StandardLonghandPropertiesHyphen<TLength, TTime>>;

export type StandardShorthandPropertiesHyphenFallback<
  TLength = string | 0,
  TTime = string
> = Fallback<StandardShorthandPropertiesHyphen<TLength, TTime>>;

export interface StandardPropertiesHyphenFallback<
  TLength = string | 0,
  TTime = string
> extends StandardLonghandPropertiesHyphenFallback<TLength, TTime>,
    StandardShorthandPropertiesHyphenFallback<TLength, TTime> {}

export type VendorLonghandPropertiesHyphenFallback<
  TLength = string | 0,
  TTime = string
> = Fallback<VendorLonghandPropertiesHyphen<TLength, TTime>>;

export type VendorShorthandPropertiesHyphenFallback<
  TLength = string | 0,
  TTime = string
> = Fallback<VendorShorthandPropertiesHyphen<TLength, TTime>>;

export interface VendorPropertiesHyphenFallback<
  TLength = string | 0,
  TTime = string
> extends VendorLonghandPropertiesHyphenFallback<TLength, TTime>,
    VendorShorthandPropertiesHyphenFallback<TLength, TTime> {}

export type ObsoletePropertiesHyphenFallback<
  TLength = string | 0,
  TTime = string
> = Fallback<ObsoletePropertiesHyphen<TLength, TTime>>;

export type SvgPropertiesHyphenFallback<
  TLength = string | 0,
  TTime = string
> = Fallback<SvgPropertiesHyphen<TLength, TTime>>;

export interface PropertiesHyphenFallback<
  TLength = string | 0,
  TTime = string
> extends StandardPropertiesHyphenFallback<TLength, TTime>,
    VendorPropertiesHyphenFallback<TLength, TTime>,
    ObsoletePropertiesHyphenFallback<TLength, TTime>,
    SvgPropertiesHyphenFallback<TLength, TTime> {}

export type Pseudos = AdvancedPseudos | SimplePseudos;

export type Globals =
  | '-moz-initial'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'revert-layer'
  | 'unset';
