import { Fallback } from './index';
import { DataType } from './data-type';

export namespace AtRule {
  export interface CounterStyle<
    TLength = (string & {}) | 0,
    TTime = string & {}
  > {
    additiveSymbols?: string | undefined;
    fallback?: string | undefined;
    negative?: string | undefined;
    pad?: string | undefined;
    prefix?: string | undefined;
    range?: Range | undefined;
    speakAs?: SpeakAs | undefined;
    suffix?: string | undefined;
    symbols?: string | undefined;
    system?: System | undefined;
  }

  export interface CounterStyleHyphen<
    TLength = (string & {}) | 0,
    TTime = string & {}
  > {
    'additive-symbols'?: string | undefined;
    fallback?: string | undefined;
    negative?: string | undefined;
    pad?: string | undefined;
    prefix?: string | undefined;
    range?: Range | undefined;
    'speak-as'?: SpeakAs | undefined;
    suffix?: string | undefined;
    symbols?: string | undefined;
    system?: System | undefined;
  }

  export type CounterStyleFallback<
    TLength = (string & {}) | 0,
    TTime = string & {}
  > = Fallback<CounterStyle<TLength, TTime>>;

  export type CounterStyleHyphenFallback<
    TLength = (string & {}) | 0,
    TTime = string & {}
  > = Fallback<CounterStyleHyphen<TLength, TTime>>;

  export interface FontFace<TLength = (string & {}) | 0, TTime = string & {}> {
    MozFontFeatureSettings?: FontFeatureSettings | undefined;
    ascentOverride?: AscentOverride | undefined;
    descentOverride?: DescentOverride | undefined;
    fontDisplay?: FontDisplay | undefined;
    fontFamily?: string | undefined;
    fontFeatureSettings?: FontFeatureSettings | undefined;
    fontStretch?: FontStretch | undefined;
    fontStyle?: FontStyle | undefined;
    fontVariant?: FontVariant | undefined;
    fontVariationSettings?: FontVariationSettings | undefined;
    fontWeight?: FontWeight | undefined;
    lineGapOverride?: LineGapOverride | undefined;
    sizeAdjust?: string | undefined;
    src?: string | undefined;
    unicodeRange?: string | undefined;
  }

  export interface FontFaceHyphen<
    TLength = (string & {}) | 0,
    TTime = string & {}
  > {
    '-moz-font-feature-settings'?: FontFeatureSettings | undefined;
    'ascent-override'?: AscentOverride | undefined;
    'descent-override'?: DescentOverride | undefined;
    'font-display'?: FontDisplay | undefined;
    'font-family'?: string | undefined;
    'font-feature-settings'?: FontFeatureSettings | undefined;
    'font-stretch'?: FontStretch | undefined;
    'font-style'?: FontStyle | undefined;
    'font-variant'?: FontVariant | undefined;
    'font-variation-settings'?: FontVariationSettings | undefined;
    'font-weight'?: FontWeight | undefined;
    'line-gap-override'?: LineGapOverride | undefined;
    'size-adjust'?: string | undefined;
    src?: string | undefined;
    'unicode-range'?: string | undefined;
  }

  export type FontFaceFallback<
    TLength = (string & {}) | 0,
    TTime = string & {}
  > = Fallback<FontFace<TLength, TTime>>;

  export type FontFaceHyphenFallback<
    TLength = (string & {}) | 0,
    TTime = string & {}
  > = Fallback<FontFaceHyphen<TLength, TTime>>;

  export interface FontPaletteValues<
    TLength = (string & {}) | 0,
    TTime = string & {}
  > {
    basePalette?: BasePalette | undefined;
    fontFamily?: string | undefined;
    overrideColors?: string | undefined;
  }

  export interface FontPaletteValuesHyphen<
    TLength = (string & {}) | 0,
    TTime = string & {}
  > {
    'base-palette'?: BasePalette | undefined;
    'font-family'?: string | undefined;
    'override-colors'?: string | undefined;
  }

  export type FontPaletteValuesFallback<
    TLength = (string & {}) | 0,
    TTime = string & {}
  > = Fallback<FontPaletteValues<TLength, TTime>>;

  export type FontPaletteValuesHyphenFallback<
    TLength = (string & {}) | 0,
    TTime = string & {}
  > = Fallback<FontPaletteValuesHyphen<TLength, TTime>>;

  export interface Page<TLength = (string & {}) | 0, TTime = string & {}> {
    bleed?: Bleed<TLength> | undefined;
    marks?: Marks | undefined;
    pageOrientation?: PageOrientation | undefined;
    size?: Size<TLength> | undefined;
  }

  export interface PageHyphen<
    TLength = (string & {}) | 0,
    TTime = string & {}
  > {
    bleed?: Bleed<TLength> | undefined;
    marks?: Marks | undefined;
    'page-orientation'?: PageOrientation | undefined;
    size?: Size<TLength> | undefined;
  }

  export type PageFallback<
    TLength = (string & {}) | 0,
    TTime = string & {}
  > = Fallback<Page<TLength, TTime>>;

  export type PageHyphenFallback<
    TLength = (string & {}) | 0,
    TTime = string & {}
  > = Fallback<PageHyphen<TLength, TTime>>;

  export interface Property<TLength = (string & {}) | 0, TTime = string & {}> {
    inherits?: Inherits | undefined;
    initialValue?: string | undefined;
    syntax?: string | undefined;
  }

  export interface PropertyHyphen<
    TLength = (string & {}) | 0,
    TTime = string & {}
  > {
    inherits?: Inherits | undefined;
    'initial-value'?: string | undefined;
    syntax?: string | undefined;
  }

  export type PropertyFallback<
    TLength = (string & {}) | 0,
    TTime = string & {}
  > = Fallback<Property<TLength, TTime>>;

  export type PropertyHyphenFallback<
    TLength = (string & {}) | 0,
    TTime = string & {}
  > = Fallback<PropertyHyphen<TLength, TTime>>;

  export interface Viewport<TLength = (string & {}) | 0, TTime = string & {}> {
    height?: Height<TLength> | undefined;
    maxHeight?: MaxHeight<TLength> | undefined;
    maxWidth?: MaxWidth<TLength> | undefined;
    maxZoom?: MaxZoom | undefined;
    minHeight?: MinHeight<TLength> | undefined;
    minWidth?: MinWidth<TLength> | undefined;
    minZoom?: MinZoom | undefined;
    orientation?: Orientation | undefined;
    userZoom?: UserZoom | undefined;
    viewportFit?: ViewportFit | undefined;
    width?: Width<TLength> | undefined;
    zoom?: Zoom | undefined;
  }

  export interface ViewportHyphen<
    TLength = (string & {}) | 0,
    TTime = string & {}
  > {
    height?: Height<TLength> | undefined;
    'max-height'?: MaxHeight<TLength> | undefined;
    'max-width'?: MaxWidth<TLength> | undefined;
    'max-zoom'?: MaxZoom | undefined;
    'min-height'?: MinHeight<TLength> | undefined;
    'min-width'?: MinWidth<TLength> | undefined;
    'min-zoom'?: MinZoom | undefined;
    orientation?: Orientation | undefined;
    'user-zoom'?: UserZoom | undefined;
    'viewport-fit'?: ViewportFit | undefined;
    width?: Width<TLength> | undefined;
    zoom?: Zoom | undefined;
  }

  export type ViewportFallback<
    TLength = (string & {}) | 0,
    TTime = string & {}
  > = Fallback<Viewport<TLength, TTime>>;

  export type ViewportHyphenFallback<
    TLength = (string & {}) | 0,
    TTime = string & {}
  > = Fallback<ViewportHyphen<TLength, TTime>>;

  export type Range = 'auto' | (string & {});

  export type SpeakAs =
    | 'auto'
    | 'bullets'
    | 'numbers'
    | 'spell-out'
    | 'words'
    | (string & {});

  export type System =
    | 'additive'
    | 'alphabetic'
    | 'cyclic'
    | 'fixed'
    | 'numeric'
    | 'symbolic'
    | (string & {});

  export type FontFeatureSettings = 'normal' | (string & {});

  export type AscentOverride = 'normal' | (string & {});

  export type DescentOverride = 'normal' | (string & {});

  export type FontDisplay = 'auto' | 'block' | 'fallback' | 'optional' | 'swap';

  export type FontStretch = DataType.FontStretchAbsolute | (string & {});

  export type FontStyle = 'italic' | 'normal' | 'oblique' | (string & {});

  export type FontVariant =
    | DataType.EastAsianVariantValues
    | 'all-petite-caps'
    | 'all-small-caps'
    | 'common-ligatures'
    | 'contextual'
    | 'diagonal-fractions'
    | 'discretionary-ligatures'
    | 'full-width'
    | 'historical-forms'
    | 'historical-ligatures'
    | 'lining-nums'
    | 'no-common-ligatures'
    | 'no-contextual'
    | 'no-discretionary-ligatures'
    | 'no-historical-ligatures'
    | 'none'
    | 'normal'
    | 'oldstyle-nums'
    | 'ordinal'
    | 'petite-caps'
    | 'proportional-nums'
    | 'proportional-width'
    | 'ruby'
    | 'slashed-zero'
    | 'small-caps'
    | 'stacked-fractions'
    | 'tabular-nums'
    | 'titling-caps'
    | 'unicase'
    | (string & {});

  export type FontVariationSettings = 'normal' | (string & {});

  export type FontWeight = DataType.FontWeightAbsolute | (string & {});

  export type LineGapOverride = 'normal' | (string & {});

  export type BasePalette = 'dark' | 'light' | (number & {}) | (string & {});

  export type Bleed<TLength> = TLength | 'auto';

  export type Marks = 'crop' | 'cross' | 'none' | (string & {});

  export type PageOrientation = 'rotate-left' | 'rotate-right' | 'upright';

  export type Size<TLength> =
    | DataType.PageSize
    | TLength
    | 'auto'
    | 'landscape'
    | 'portrait'
    | (string & {});

  export type Inherits = 'false' | 'true';

  export type Height<TLength> =
    | DataType.ViewportLength<TLength>
    | (string & {});

  export type MaxHeight<TLength> = DataType.ViewportLength<TLength>;

  export type MaxWidth<TLength> = DataType.ViewportLength<TLength>;

  export type MaxZoom = 'auto' | (string & {}) | (number & {});

  export type MinHeight<TLength> = DataType.ViewportLength<TLength>;

  export type MinWidth<TLength> = DataType.ViewportLength<TLength>;

  export type MinZoom = 'auto' | (string & {}) | (number & {});

  export type Orientation = 'auto' | 'landscape' | 'portrait';

  export type UserZoom = 'fixed' | 'zoom';

  export type ViewportFit = 'auto' | 'contain' | 'cover';

  export type Width<TLength> = DataType.ViewportLength<TLength> | (string & {});

  export type Zoom = 'auto' | (string & {}) | (number & {});
}
