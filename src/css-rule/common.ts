import { ICSSColorRule } from './color';

export type ICSSRule =
  | 'initial'
  | 'inherit'
  | 'unset'
  | '-moz-initial'
  | 'revert'
  | 'revert-layer';

// See CSS 3 <percentage> type https://drafts.csswg.org/css-values-3/#percentages
export type ICSSPercentageRule = string;

// See CSS 3 <length> type https://drafts.csswg.org/css-values-3/#lengths
export type ICSSPixelUnitRule = string | number;

// See CSS <baseline-position> type https://www.w3.org/TR/css-align-3/#typedef-baseline-position
export type ICSSBaselinePositionRule =
  | 'baseline'
  | 'last baseline'
  | 'first baseline';

// See CSS <overflow-position> type https://www.w3.org/TR/css-align-3/#typedef-overflow-position
// See CSS <self-position> type https://www.w3.org/TR/css-align-3/#typedef-self-position
export type ICSSOverflowAndSelfPositionRule =
  // <self-position>
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end'
  // <self-position> prefixed with <overflow-position> value 'safe'
  | 'safe center'
  | 'safe start'
  | 'safe end'
  | 'safe self-start'
  | 'safe self-end'
  | 'safe flex-start'
  | 'safe flex-end'
  // <self-position> prefixed with <overflow-position> value 'unsafe'
  | 'unsafe center'
  | 'unsafe start'
  | 'unsafe end'
  | 'unsafe self-start'
  | 'unsafe self-end'
  | 'unsafe flex-start'
  | 'unsafe flex-end';

export type IMixBlendModes =
  | ICSSRule
  | 'normal'
  | 'multiply'
  | 'screen'
  | 'overlay'
  | 'darken'
  | 'lighten'
  | 'color-dodge'
  | 'color-burn'
  | 'hard-light'
  | 'soft-light'
  | 'difference'
  | 'exclusion'
  | 'hue'
  | 'saturation'
  | 'color'
  | 'luminosity';

type AbsoluteSize =
  | 'large'
  | 'medium'
  | 'small'
  | 'x-large'
  | 'x-small'
  | 'xx-large'
  | 'xx-small'
  | 'xxx-large';

type AnimateableFeature = 'contents' | 'scroll-position' | string;

type Attachment = 'fixed' | 'local' | 'scroll';

type BgPosition<TLength> =
  | TLength
  | 'bottom'
  | 'center'
  | 'left'
  | 'right'
  | 'top'
  | string;

type BgSize<TLength> = TLength | 'auto' | 'contain' | 'cover' | string;

type BlendMode =
  | 'color'
  | 'color-burn'
  | 'color-dodge'
  | 'darken'
  | 'difference'
  | 'exclusion'
  | 'hard-light'
  | 'hue'
  | 'lighten'
  | 'luminosity'
  | 'multiply'
  | 'normal'
  | 'overlay'
  | 'saturation'
  | 'screen'
  | 'soft-light';

type Box = 'border-box' | 'content-box' | 'padding-box';

type CompatAuto =
  | 'button'
  | 'checkbox'
  | 'listbox'
  | 'menulist'
  | 'meter'
  | 'progress-bar'
  | 'push-button'
  | 'radio'
  | 'searchfield'
  | 'slider-horizontal'
  | 'square-button'
  | 'textarea';

type CompositeStyle =
  | 'clear'
  | 'copy'
  | 'destination-atop'
  | 'destination-in'
  | 'destination-out'
  | 'destination-over'
  | 'source-atop'
  | 'source-in'
  | 'source-out'
  | 'source-over'
  | 'xor';

type CompositingOperator = 'add' | 'exclude' | 'intersect' | 'subtract';

type ContentDistribution =
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'stretch';

type ContentList = Quote | 'contents' | string;

type ContentPosition = 'center' | 'end' | 'flex-end' | 'flex-start' | 'start';

type Dasharray<TLength> = TLength | string | number;

type EastAsianVariantValues =
  | 'jis04'
  | 'jis78'
  | 'jis83'
  | 'jis90'
  | 'simplified'
  | 'traditional';

type FinalBgLayer<TLength> =
  | ICSSColorRule
  | BgPosition<TLength>
  | RepeatStyle
  | Attachment
  | Box
  | 'none'
  | string;

type FontStretchAbsolute =
  | 'condensed'
  | 'expanded'
  | 'extra-condensed'
  | 'extra-expanded'
  | 'normal'
  | 'semi-condensed'
  | 'semi-expanded'
  | 'ultra-condensed'
  | 'ultra-expanded'
  | string;

type FontWeightAbsolute = 'bold' | 'normal' | number | string;

type GenericFamily =
  | 'cursive'
  | 'fantasy'
  | 'monospace'
  | 'sans-serif'
  | 'serif';

type GeometryBox = Box | 'fill-box' | 'margin-box' | 'stroke-box' | 'view-box';

type GridLine = 'auto' | string | number;

type LineStyle =
  | 'dashed'
  | 'dotted'
  | 'double'
  | 'groove'
  | 'hidden'
  | 'inset'
  | 'none'
  | 'outset'
  | 'ridge'
  | 'solid';

type LineWidth<TLength> = TLength | 'medium' | 'thick' | 'thin';

type MaskLayer<TLength> =
  | Position<TLength>
  | RepeatStyle
  | GeometryBox
  | CompositingOperator
  | MaskingMode
  | 'no-clip'
  | 'none'
  | string;

type MaskingMode = 'alpha' | 'luminance' | 'match-source';

type PageSize =
  | 'A3'
  | 'A4'
  | 'A5'
  | 'B4'
  | 'B5'
  | 'JIS-B4'
  | 'JIS-B5'
  | 'ledger'
  | 'legal'
  | 'letter';

type Paint =
  | ICSSColorRule
  | 'child'
  | 'context-fill'
  | 'context-stroke'
  | 'none'
  | string;

type Position<TLength> =
  | TLength
  | 'bottom'
  | 'center'
  | 'left'
  | 'right'
  | 'top'
  | string;

type Quote = 'close-quote' | 'no-close-quote' | 'no-open-quote' | 'open-quote';

type RepeatStyle =
  | 'no-repeat'
  | 'repeat'
  | 'repeat-x'
  | 'repeat-y'
  | 'round'
  | 'space'
  | string;

type SelfPosition =
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'self-end'
  | 'self-start'
  | 'start';
