export type SingleAnimation =
  | EasingFunction
  | SingleAnimationDirection
  | SingleAnimationFillMode
  | SingleAnimationTimeline
  | 'infinite'
  | 'none'
  | 'paused'
  | 'running'
  | string
  | number;

export type StepTimingFunction = 'step-end' | 'step-start' | string;

export type CubicBezierTimingFunction =
  | 'ease'
  | 'ease-in'
  | 'ease-in-out'
  | 'ease-out'
  | string;

export type EasingFunction =
  | CubicBezierTimingFunction
  | StepTimingFunction
  | 'linear';

export type SingleAnimationComposition = 'accumulate' | 'add' | 'replace';

export type SingleAnimationDirection =
  | 'alternate'
  | 'alternate-reverse'
  | 'normal'
  | 'reverse';

export type SingleAnimationFillMode =
  | 'backwards'
  | 'both'
  | 'forwards'
  | 'none';

export type SingleAnimationTimeline = 'auto' | 'none' | string;
