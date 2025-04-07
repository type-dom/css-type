import { ICSSPercentageRule, ICSSPixelUnitRule, ICSSRule } from './common';
import { IFontWeightRule } from './font-weight';

/**
 * The base font style.
 * {@docCategory IRawFontStyle}
 */
export interface IRawFontStyle {
  /**
   * The font property is shorthand that allows you to do one of two things: you can
   * either set up six of the most mature font properties in one line, or you can set
   *  one of a choice of keywords to adopt a system font setting.
   */
  font?:
    | ICSSRule
    | 'caption'
    | 'icon'
    | 'menu'
    | 'message-box'
    | 'small-caption'
    | 'status-bar'
    | string;

  /**
   * The font-family property allows one or more font family names and/or generic family
   * names to be specified for usage on the selected element(s)' text. The browser then
   * goes through the list; for each character in the selection it applies the first
   * font family that has an available glyph for that character.
   */
  fontFamily?:
    | ICSSRule
    | 'cursive'
    | 'fantasy'
    | 'monospace'
    | 'sans-serif'
    | 'serif'
    | string;

  /**
   * The font-kerning property allows contextual adjustment of inter-glyph spacing, i.e.
   * the spaces between the characters in text. This property controls <bold>metric
   * kerning</bold> - that utilizes adjustment data contained in the font. Optical
   * Kerning is not supported as yet.
   */
  fontKerning?: ICSSRule | 'auto' | 'none' | 'normal' | string;

  /**
   * Specifies the size of the font. Used to compute em and ex units.
   * See CSS 3 font-size property https://www.w3.org/TR/css-fonts-3/#propdef-font-size
   */
  fontSize?:
    | ICSSRule
    | 'xx-small'
    | 'x-small'
    | 'small'
    | 'medium'
    | 'large'
    | 'x-large'
    | 'xx-large'
    | 'larger'
    | 'smaller'
    | ICSSPixelUnitRule
    | ICSSPercentageRule;

  /**
   * The font-size-adjust property adjusts the font-size of the fallback fonts defined
   * with font-family, so that the x-height is the same no matter what font is used.
   * This preserves the readability of the text when fallback happens.
   * See CSS 3 font-size-adjust property
   * https://www.w3.org/TR/css-fonts-3/#propdef-font-size-adjust
   */
  fontSizeAdjust?: ICSSRule | 'none' | number | string;

  /**
   * Allows you to expand or condense the widths for a normal, condensed, or expanded
   * font face.
   * See CSS 3 font-stretch property
   * https://drafts.csswg.org/css-fonts-3/#propdef-font-stretch
   */
  fontStretch?:
    | ICSSRule
    | 'normal'
    | 'ultra-condensed'
    | 'extra-condensed'
    | 'condensed'
    | 'semi-condensed'
    | 'semi-expanded'
    | 'expanded'
    | 'extra-expanded'
    | 'ultra-expanded'
    | string;

  /**
   * The font-style property allows normal, italic, or oblique faces to be selected.
   * Italic forms are generally cursive in nature while oblique faces are typically
   * sloped versions of the regular face. Oblique faces can be simulated by artificially
   * sloping the glyphs of the regular face.
   * See CSS 3 font-style property https://www.w3.org/TR/css-fonts-3/#propdef-font-style
   */
  fontStyle?: ICSSRule | 'normal' | 'italic' | 'oblique' | string;

  /**
   * This value specifies whether the user agent is allowed to synthesize bold or
   *  oblique font faces when a font family lacks bold or italic faces.
   */
  fontSynthesis?: ICSSRule | string;

  /**
   * The font-variant property enables you to select the small-caps font within a font
   * family.
   */
  fontVariant?: ICSSRule | string;

  /**
   * Fonts can provide alternate glyphs in addition to default glyph for a character.
   * This property provides control over the selection of these alternate glyphs.
   */
  fontVariantAlternates?: ICSSRule | string;

  /**
   * Specifies the weight or boldness of the font.
   * See CSS 3 'font-weight' property https://www.w3.org/TR/css-fonts-3/#propdef-font-weight
   */
  fontWeight?: IFontWeightRule | string;

  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-feature-settings) */
  fontFeatureSettings?: string;

  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-optical-sizing) */
  fontOpticalSizing?: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-palette) */
  fontPalette?: string;

  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis-small-caps) */
  fontSynthesisSmallCaps?: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis-style) */
  fontSynthesisStyle?: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis-weight) */
  fontSynthesisWeight?: string;

  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-caps) */
  fontVariantCaps?: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian) */
  fontVariantEastAsian?: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures) */
  fontVariantLigatures?: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric) */
  fontVariantNumeric?: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-position) */
  fontVariantPosition?: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variation-settings) */
  fontVariationSettings?: string;
}
