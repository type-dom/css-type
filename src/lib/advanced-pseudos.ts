/**
 * 定义了一个高级伪类和伪元素的集合。
 * 这些伪类和伪元素用于CSS选择器，以提供更复杂和精确的样式控制。
 * 它们涵盖了多种浏览器厂商的特定选择器，以及一些通用的伪类和伪元素。
 */
export type AdvancedPseudos =
  | ':-moz-any()'
  | ':-moz-dir'
  | ':-webkit-any()'
  | '::cue'
  | '::cue-region'
  | '::part'
  | '::slotted'
  | '::view-transition-group'
  | '::view-transition-image-pair'
  | '::view-transition-new'
  | '::view-transition-old'
  | ':dir'
  | ':has'
  | ':host'
  | ':host-context'
  | ':is'
  | ':lang'
  | ':matches()'
  | ':not'
  | ':nth-child'
  | ':nth-last-child'
  | ':nth-last-of-type'
  | ':nth-of-type'
  | ':where';
