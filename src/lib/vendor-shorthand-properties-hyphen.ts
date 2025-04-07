import { Property } from './property';

export interface VendorShorthandPropertiesHyphen<
  TLength = (string & {}) | 0,
  TTime = string & {}
> {
  /**
   * The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.
   *
   * **Syntax**: `<single-animation>#`
   */
  '-moz-animation'?: Property.Animation<TTime> | undefined;
  /**
   * The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.
   *
   * **Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`
   */
  '-moz-border-image'?: Property.BorderImage | undefined;
  /**
   * The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.
   *
   * **Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`
   */
  '-moz-column-rule'?: Property.ColumnRule<TLength> | undefined;
  /**
   * The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.
   *
   * **Syntax**: `<'column-width'> || <'column-count'>`
   */
  '-moz-columns'?: Property.Columns<TLength> | undefined;
  /**
   * In Mozilla applications like Firefox, the **`-moz-outline-radius`** CSS shorthand property can be used to give an element's `outline` rounded corners.
   *
   * **Syntax**: `<outline-radius>{1,4} [ / <outline-radius>{1,4} ]?`
   */
  '-moz-outline-radius'?: Property.MozOutlineRadius<TLength> | undefined;
  /**
   * The **`-ms-content-zoom-limit`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-limit-min` and `-ms-content-zoom-limit-max` properties.
   *
   * **Syntax**: `<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>`
   */
  '-ms-content-zoom-limit'?: Property.MsContentZoomLimit | undefined;
  /**
   * The **`-ms-content-zoom-snap`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-snap-type` and `-ms-content-zoom-snap-points` properties.
   *
   * **Syntax**: `<'-ms-content-zoom-snap-type'> || <'-ms-content-zoom-snap-points'>`
   */
  '-ms-content-zoom-snap'?: Property.MsContentZoomSnap | undefined;
  /**
   * The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.
   *
   * **Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`
   */
  '-ms-flex'?: Property.Flex<TLength> | undefined;
  /**
   * The **\-ms-scroll-limit** CSS property is a Microsoft extension that specifies values for the `-ms-scroll-limit-x-min`, `-ms-scroll-limit-y-min`, `-ms-scroll-limit-x-max`, and `-ms-scroll-limit-y-max` properties.
   *
   * **Syntax**: `<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>`
   */
  '-ms-scroll-limit'?: Property.MsScrollLimit | undefined;
  /**
   * The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-x` properties.
   *
   * **Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>`
   */
  '-ms-scroll-snap-x'?: Property.MsScrollSnapX | undefined;
  /**
   * The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-y` properties.
   *
   * **Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>`
   */
  '-ms-scroll-snap-y'?: Property.MsScrollSnapY | undefined;
  /**
   * The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.
   *
   * **Syntax**: `<single-transition>#`
   */
  '-ms-transition'?: Property.Transition<TTime> | undefined;
  /**
   * The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.
   *
   * **Syntax**: `<single-animation>#`
   */
  '-webkit-animation'?: Property.Animation<TTime> | undefined;
  /**
   * The **`-webkit-border-before`** CSS property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet.
   *
   * **Syntax**: `<'border-width'> || <'border-style'> || <color>`
   */
  '-webkit-border-before'?: Property.WebkitBorderBefore<TLength> | undefined;
  /**
   * The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.
   *
   * **Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`
   */
  '-webkit-border-image'?: Property.BorderImage | undefined;
  /**
   * The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
   *
   * **Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`
   */
  '-webkit-border-radius'?: Property.BorderRadius<TLength> | undefined;
  /**
   * The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.
   *
   * **Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`
   */
  '-webkit-column-rule'?: Property.ColumnRule<TLength> | undefined;
  /**
   * The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.
   *
   * **Syntax**: `<'column-width'> || <'column-count'>`
   */
  '-webkit-columns'?: Property.Columns<TLength> | undefined;
  /**
   * The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.
   *
   * **Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`
   */
  '-webkit-flex'?: Property.Flex<TLength> | undefined;
  /**
   * The **`flex-flow`** CSS shorthand property specifies the direction of a flex container, as well as its wrapping behavior.
   *
   * **Syntax**: `<'flex-direction'> || <'flex-wrap'>`
   */
  '-webkit-flex-flow'?: Property.FlexFlow | undefined;
  /**
   * The **`mask`** CSS shorthand property hides an element (partially or fully) by masking or clipping the image at specific points.
   *
   * **Syntax**: `[ <mask-reference> || <position> [ / <bg-size> ]? || <repeat-style> || [ <box> | border | padding | content | text ] || [ <box> | border | padding | content ] ]#`
   */
  '-webkit-mask'?: Property.WebkitMask<TLength> | undefined;
  /**
   * The **`mask-border`** CSS shorthand property lets you create a mask along the edge of an element's border.
   *
   * **Syntax**: `<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>`
   */
  '-webkit-mask-box-image'?: Property.MaskBorder | undefined;
  /**
   * The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.
   *
   * **Syntax**: `<'text-emphasis-style'> || <'text-emphasis-color'>`
   */
  '-webkit-text-emphasis'?: Property.TextEmphasis | undefined;
  /**
   * The **`-webkit-text-stroke`** CSS property specifies the width and color of strokes for text characters. This is a shorthand property for the longhand properties `-webkit-text-stroke-width` and `-webkit-text-stroke-color`.
   *
   * **Syntax**: `<length> || <color>`
   */
  '-webkit-text-stroke'?: Property.WebkitTextStroke<TLength> | undefined;
  /**
   * The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.
   *
   * **Syntax**: `<single-transition>#`
   */
  '-webkit-transition'?: Property.Transition<TTime> | undefined;
}
