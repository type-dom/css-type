/**
 * 鼠标样式
 * 值          描述
 * url         需使用的自定义光标的 URL。注释：请在此列表的末端始终定义一种普通的光标，以防没有由 URL 定义的可用光标。
 * default     默认光标（通常是一个箭头）
 * auto        默认。浏览器设置的光标。
 * crosshair   光标呈现为十字线。
 * pointer     光标呈现为指示链接的指针（一只手）
 * move        此光标指示某对象可被移动。
 * e-resize    此光标指示矩形框的边缘可被向右（东）移动。
 * ne-resize   此光标指示矩形框的边缘可被向上及向右移动（北/东）。
 * nw-resize   此光标指示矩形框的边缘可被向上及向左移动（北/西）。
 * n-resize    此光标指示矩形框的边缘可被向上（北）移动。
 * se-resize   此光标指示矩形框的边缘可被向下及向右移动（南/东）。
 * sw-resize   此光标指示矩形框的边缘可被向下及向左移动（南/西）。
 * s-resize    此光标指示矩形框的边缘可被向下移动（南）。
 * w-resize    此光标指示矩形框的边缘可被向左移动（西）。
 * text        此光标指示文本。
 * wait        此光标指示程序正忙（通常是一只表或沙漏）。
 * help        此光标指示可用的帮助（通常是一个问号或一个气球）。
 */
export type ICSSCursorRule =
  | 'auto'
  | 'default'
  | 'none'
  | 'context-menu'
  | 'help'
  | 'pointer'
  | 'progress'
  | 'wait'
  | 'cell'
  | 'crosshair'
  | 'text'
  | 'vertical-text'
  | 'alias'
  | 'copy'
  | 'move'
  | 'no-drop'
  | 'not-allowed'
  | 'grab'
  | 'grabbing'
  | 'col-resize'
  | 'row-resize'
  | 'n-resize'
  | 'e-resize'
  | 's-resize'
  | 'w-resize'
  | 'ne-resize'
  | 'nw-resize'
  | 'se-resize'
  | 'sw-resize'
  | 'ew-resize'
  | 'ns-resize'
  | 'nesw-resize'
  | 'nwse-resize'
  | 'all-scroll'
  | 'zoom-in'
  | 'zoom-out'
  | '-moz-grab'
  | '-webkit-grab';
