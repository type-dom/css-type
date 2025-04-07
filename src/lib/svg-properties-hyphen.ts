import { Property } from './property';

export interface SvgPropertiesHyphen<
  TLength = (string & {}) | 0,
  TTime = string & {}
> {
  'alignment-baseline'?: Property.AlignmentBaseline | undefined;
  'baseline-shift'?: Property.BaselineShift<TLength> | undefined;
  clip?: Property.Clip | undefined;
  'clip-path'?: Property.ClipPath | undefined;
  'clip-rule'?: Property.ClipRule | undefined;
  color?: Property.Color | undefined;
  'color-interpolation'?: Property.ColorInterpolation | undefined;
  'color-rendering'?: Property.ColorRendering | undefined;
  cursor?: Property.Cursor | undefined;
  direction?: Property.Direction | undefined;
  display?: Property.Display | undefined;
  'dominant-baseline'?: Property.DominantBaseline | undefined;
  fill?: Property.Fill | undefined;
  'fill-opacity'?: Property.FillOpacity | undefined;
  'fill-rule'?: Property.FillRule | undefined;
  filter?: Property.Filter | undefined;
  'flood-color'?: Property.FloodColor | undefined;
  'flood-opacity'?: Property.FloodOpacity | undefined;
  font?: Property.Font | undefined;
  'font-family'?: Property.FontFamily | undefined;
  'font-size'?: Property.FontSize<TLength> | undefined;
  'font-size-adjust'?: Property.FontSizeAdjust | undefined;
  'font-stretch'?: Property.FontStretch | undefined;
  'font-style'?: Property.FontStyle | undefined;
  'font-variant'?: Property.FontVariant | undefined;
  'font-weight'?: Property.FontWeight | undefined;
  'glyph-orientation-vertical'?: Property.GlyphOrientationVertical | undefined;
  'image-rendering'?: Property.ImageRendering | undefined;
  'letter-spacing'?: Property.LetterSpacing<TLength> | undefined;
  'lighting-color'?: Property.LightingColor | undefined;
  'line-height'?: Property.LineHeight<TLength> | undefined;
  marker?: Property.Marker | undefined;
  'marker-end'?: Property.MarkerEnd | undefined;
  'marker-mid'?: Property.MarkerMid | undefined;
  'marker-start'?: Property.MarkerStart | undefined;
  mask?: Property.Mask<TLength> | undefined;
  opacity?: Property.Opacity | undefined;
  overflow?: Property.Overflow | undefined;
  'paint-order'?: Property.PaintOrder | undefined;
  'pointer-events'?: Property.PointerEvents | undefined;
  'shape-rendering'?: Property.ShapeRendering | undefined;
  'stop-color'?: Property.StopColor | undefined;
  'stop-opacity'?: Property.StopOpacity | undefined;
  stroke?: Property.Stroke | undefined;
  'stroke-dasharray'?: Property.StrokeDasharray<TLength> | undefined;
  'stroke-dashoffset'?: Property.StrokeDashoffset<TLength> | undefined;
  'stroke-linecap'?: Property.StrokeLinecap | undefined;
  'stroke-linejoin'?: Property.StrokeLinejoin | undefined;
  'stroke-miterlimit'?: Property.StrokeMiterlimit | undefined;
  'stroke-opacity'?: Property.StrokeOpacity | undefined;
  'stroke-width'?: Property.StrokeWidth<TLength> | undefined;
  'text-anchor'?: Property.TextAnchor | undefined;
  'text-decoration'?: Property.TextDecoration<TLength> | undefined;
  'text-rendering'?: Property.TextRendering | undefined;
  'unicode-bidi'?: Property.UnicodeBidi | undefined;
  'vector-effect'?: Property.VectorEffect | undefined;
  visibility?: Property.Visibility | undefined;
  'white-space'?: Property.WhiteSpace | undefined;
  'word-spacing'?: Property.WordSpacing<TLength> | undefined;
  'writing-mode'?: Property.WritingMode | undefined;
}
