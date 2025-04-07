import { ICSSRule } from './common';
import { IRawFontStyle } from './raw-font-style';

/**
 * Font face definition.
 *
 * @public
 * {@docCategory IFontFace}
 */
export interface IFontFace extends IRawFontStyle {
  /**
   * Specifies the src of the font.
   */
  src?: string;

  /**
   * unicode-range allows you to set a specific range of characters to be downloaded
   * from a font (embedded using \@font-face) and made available for use on the current
   * page.
   */
  unicodeRange?: ICSSRule | string;

  /**
   * Determines how a font face is displayed based on whether and when it is downloaded
   * and ready to use.
   */
  fontDisplay?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional';

  /**
   * Feature settings for the font.
   */
  fontFeatureSettings?: string;
}
