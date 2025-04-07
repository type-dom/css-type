/**
 * 定义了CSS中的各种At-Rules类型。
 *
 * At-Rules是以"@"开头的CSS规则，用于引入外部资源、定义动画、媒体查询等特殊功能。
 * 这里列举了CSS规范中支持的大部分At-Rules类型，以便在TypeScript中进行类型检查和使用。
 *
 * @charset 用于指定文件的字符编码。
 * @counter-style 用于定义计数器的样式。
 * @document 规则允许条件地对文档进行样式化。
 * @font-face 允许定义新的字体。
 * @font-feature-values 用于定义字体的高级特性。
 * @font-palette-values 允许定义字体的颜色调色板。
 * @import 用于引入外部样式表。
 * @keyframes 定义动画的关键帧。
 * @layer 允许创建CSS层，以改善样式表的组织。
 * @media 规则用于定义媒体查询，以根据设备类型应用不同的样式。
 * @namespace 规则用于定义XML或SVG命名空间。
 * @page 规则用于定义打印样式。
 * @property 规则用于定义自定义CSS属性。
 * @scope 规则用于定义样式的作用域。
 * @scroll-timeline 规则用于定义与滚动相关的动画时间线。
 * @starting-style 规则定义了动画的初始状态。
 * @supports 规则允许根据浏览器对CSS特性的支持条件地应用样式。
 * @viewport 规则用于定义视口的属性，主要用于移动设备。
 */
export type AtRules =
  | '@charset'
  | '@counter-style'
  | '@document'
  | '@font-face'
  | '@font-feature-values'
  | '@font-palette-values'
  | '@import'
  | '@keyframes'
  | '@layer'
  | '@media'
  | '@namespace'
  | '@page'
  | '@property'
  | '@scope'
  | '@scroll-timeline'
  | '@starting-style'
  | '@supports'
  | '@viewport';
