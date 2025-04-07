/**
 * 定义了一组简单的伪类和伪元素，用于在CSS中进行选择和样式化。
 * 这些伪类和伪元素涵盖了各种浏览器厂商特定的扩展以及通用的伪类和伪元素。
 * 它们提供了对元素状态、位置和呈现方式的精细控制，使得开发者可以在不改变元素内容的情况下改变其样式。
 */
export type SimplePseudos =
  | ':-khtml-any-link' // WebKit浏览器中的任何链接伪类。
  | ':-moz-any-link' // Mozilla浏览器中的任何链接伪类。
  | ':-moz-focusring' // Mozilla浏览器中获得焦点的元素的伪类。
  | ':-moz-full-screen' // Mozilla浏览器中全屏元素的伪类。
  | ':-moz-placeholder' // Mozilla浏览器中输入框的占位符文本的伪类。
  | ':-moz-read-only' // Mozilla浏览器中只读输入元素的伪类。
  | ':-moz-read-write' // Mozilla浏览器中可读写输入元素的伪类。
  | ':-moz-ui-invalid' // Mozilla浏览器中表单元素无效时的伪类。
  | ':-moz-ui-valid' // Mozilla浏览器中表单元素有效时的伪类。
  | ':-ms-fullscreen' // Internet Explorer浏览器中全屏元素的伪类。
  | ':-ms-input-placeholder' // Internet Explorer浏览器中输入框的占位符文本的伪类。
  | ':-webkit-any-link' // WebKit浏览器中的任何链接伪类。
  | ':-webkit-full-screen' // WebKit浏览器中全屏元素的伪类。
  | '::-moz-placeholder' // Mozilla浏览器中输入框的占位符文本的伪元素。
  | '::-moz-progress-bar' // Mozilla浏览器中进度条的进度部分的伪元素。
  | '::-moz-range-progress' // Mozilla浏览器中滑块的进度部分的伪元素。
  | '::-moz-range-thumb' // Mozilla浏览器中滑块的滑块部分的伪元素。
  | '::-moz-range-track' // Mozilla浏览器中滑块的轨道部分的伪元素。
  | '::-moz-selection' // Mozilla浏览器中被选择的文本的伪元素。
  | '::-ms-backdrop' // Internet Explorer浏览器中全屏元素背景的伪元素。
  | '::-ms-browse' // Internet Explorer浏览器中文件输入元素的浏览按钮的伪元素。
  | '::-ms-check' // Internet Explorer浏览器中复选框的伪元素。
  | '::-ms-clear' // Internet Explorer浏览器中清除按钮的伪元素。
  | '::-ms-expand' // Internet Explorer浏览器中下拉列表的展开按钮的伪元素。
  | '::-ms-fill' // Internet Explorer浏览器中滑块的填充部分的伪元素。
  | '::-ms-fill-lower' // Internet Explorer浏览器中滑块的下部填充部分的伪元素。
  | '::-ms-fill-upper' // Internet Explorer浏览器中滑块的上部填充部分的伪元素。
  | '::-ms-input-placeholder' // Internet Explorer浏览器中输入框的占位符文本的伪元素。
  | '::-ms-reveal' // Internet Explorer浏览器中密码输入元素的眼睛按钮的伪元素。
  | '::-ms-thumb' // Internet Explorer浏览器中滑块的滑块部分的伪元素。
  | '::-ms-ticks-after' // Internet Explorer浏览器中滑块的右侧刻度的伪元素。
  | '::-ms-ticks-before' // Internet Explorer浏览器中滑块的左侧刻度的伪元素。
  | '::-ms-tooltip' // Internet Explorer浏览器中滑块的提示文本的伪元素。
  | '::-ms-track' // Internet Explorer浏览器中滑块的轨道部分的伪元素。
  | '::-ms-value' // Internet Explorer浏览器中输入元素的当前值的伪元素。
  | '::-webkit-backdrop' // WebKit浏览器中全屏元素背景的伪元素。
  | '::-webkit-input-placeholder' // WebKit浏览器中输入框的占位符文本的伪元素。
  | '::-webkit-progress-bar' // WebKit浏览器中进度条的容器的伪元素。
  | '::-webkit-progress-inner-value' // WebKit浏览器中进度条的当前值的伪元素。
  | '::-webkit-progress-value' // WebKit浏览器中进度条的进度部分的伪元素。
  | '::-webkit-slider-runnable-track' // WebKit浏览器中滑块的轨道部分的伪元素。
  | '::-webkit-slider-thumb' // WebKit浏览器中滑块的滑块部分的伪元素。
  | '::after' // 元素之后的伪元素。
  | '::backdrop' // 全屏元素背景的伪元素。
  | '::before' // 元素之前的伪元素。
  | '::cue' // 包含cue的音频或视频元素的伪元素。
  | '::cue-region' // 包含cue的音频或视频元素的伪元素。
  | '::first-letter' // 元素第一个字母的伪元素。
  | '::first-line' // 元素第一行的伪元素。
  | '::grammar-error' // 输入元素中语法错误部分的伪元素。
  | '::marker' // 列表项的标记的伪元素。
  | '::placeholder' // 输入元素的占位符文本的伪元素。
  | '::selection' // 用户选择的文本的伪元素。
  | '::spelling-error' // 输入元素中拼写错误部分的伪元素。
  | '::target-text' // 表单元素的伪元素。
  | '::view-transition' // 视图转换的伪元素。
  | ':active' // 活跃状态的伪类。
  | ':after' // 元素之后的伪类。
  | ':any-link' // 任何链接的伪类。
  | ':before' // 元素之前的伪类。
  | ':blank' // 空白的伪类。
  | ':checked' // 已选中的伪类。
  | ':current' // 当前状态的伪类。
  | ':default' // 默认按钮的伪类。
  | ':defined' // 已定义的伪类。
  | ':disabled' // 禁用状态的伪类。
  | ':empty' // 空元素的伪类。
  | ':enabled' // 可用状态的伪类。
  | ':first' // 集合中的第一个元素的伪类。
  | ':first-child' // 父元素的第一个子元素的伪类。
  | ':first-letter' // 元素第一个字母的伪类。
  | ':first-line' // 元素第一行的伪类。
  | ':first-of-type' // 父元素中第一个此类元素的伪类。
  | ':focus' // 获得焦点的伪类。
  | ':focus-visible' // 当用户与元素交互时获得焦点的伪类。
  | ':focus-within' // 其内部元素获得焦点的元素的伪类。
  | ':fullscreen' // 全屏元素的伪类。
  | ':future' // 将来时间的伪类。
  | ':hover' // 鼠标悬停状态的伪类。
  | ':in-range' // 输入元素值在指定范围内的伪类。
  | ':indeterminate' // 输入元素的值不确定的伪类。
  | ':invalid' // 无效表单元素的伪类。
  | ':last-child' // 父元素的最后一个子元素的伪类。
  | ':last-of-type' // 父元素中最后一个此类元素的伪类。
  | ':left' // 左侧定位元素的伪类。
  | ':link' // 链接的伪类。
  | ':local-link' // 本地链接的伪类。
  | ':nth-col' // 列位置的伪类。
  | ':nth-last-col' // 从末尾开始的列位置的伪类。
  | ':only-child' // 父元素的唯一子元素的伪类。
  | ':only-of-type' // 父元素中唯一此类元素的伪类。
  | ':optional' // 可选表单元素的伪类。
  | ':out-of-range' // 输入元素值超出指定范围的伪类。
  | ':past' // 过去时间的伪类。
  | ':paused' // 暂停状态的伪类。
  | ':picture-in-picture' // 图片-in-picture模式的伪类。
  | ':placeholder-shown' // 占位符文本显示的伪类。
  | ':playing' // 播放状态的伪类。
  | ':read-only' // 只读输入元素的伪类。
  | ':read-write' // 可读写输入元素的伪类。
  | ':required' // 必填表单元素的伪类。
  | ':right' // 右侧定位元素的伪类。
  | ':root' // 文档根元素的伪类。
  | ':scope' // 具有作用域的元素的伪类。
  | ':target' // URL目标的伪类。
  | ':target-within' // URL目标内部元素的伪类。
  | ':user-invalid' // 用户认为无效的表单元素的伪类。
  | ':user-valid' // 用户认为有效的表单元素的伪类。
  | ':valid' // 有效表单元素的伪类。
  | ':visited' // 已访问链接的伪类；
