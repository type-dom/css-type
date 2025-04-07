type DisplayInside =
  | '-ms-flexbox'
  | '-ms-grid'
  | '-webkit-flex'
  | 'flex'
  | 'flow'
  | 'flow-root'
  | 'grid'
  | 'ruby'
  | 'table';

type DisplayInternal =
  | 'ruby-base'
  | 'ruby-base-container'
  | 'ruby-text'
  | 'ruby-text-container'
  | 'table-caption'
  | 'table-cell'
  | 'table-column'
  | 'table-column-group'
  | 'table-footer-group'
  | 'table-header-group'
  | 'table-row'
  | 'table-row-group';

type DisplayLegacy =
  | '-ms-inline-flexbox'
  | '-ms-inline-grid'
  | '-webkit-inline-flex'
  | 'inline-block'
  | 'inline-flex'
  | 'inline-grid'
  | 'inline-list-item'
  | 'inline-table';

type DisplayOutside = 'block' | 'inline' | 'run-in';

// See CSS Box Layout Modes: the 'display' property https://www.w3.org/TR/css-display-3/#the-display-properties
export type ICSSDisplayRule =
  // <display-outside> values
  | DisplayOutside
  // <display-inside> values
  | DisplayInside
  // <display-outside> plus <display-inside> values
  | 'block flow'
  | 'inline table'
  | 'flex run-in'
  // <display-listitem> values
  | 'list-item'
  | 'list-item block'
  | 'list-item inline'
  | 'list-item flow'
  | 'list-item flow-root'
  | 'list-item block flow'
  | 'list-item block flow-root'
  | 'flow list-item block'
  // <display-internal> values
  | DisplayInternal
  // <display-box> values
  | 'contents'
  | 'none'
  // <display-legacy> values
  | DisplayLegacy;
