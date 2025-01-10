declare module "react-circular-progressbar" {
  import * as React from "react";

  export interface CircularProgressbarProps {
    value: number;
    text?: string;
    strokeWidth?: number;
    background?: boolean;
    backgroundPadding?: number;
    classes?: {
      root?: string;
      trail?: string;
      path?: string;
      text?: string;
      background?: string;
    };
    styles?: {
      root?: React.CSSProperties;
      trail?: React.CSSProperties;
      path?: React.CSSProperties;
      text?: React.CSSProperties;
      background?: React.CSSProperties;
    };
    counterClockwise?: boolean;
    circleRatio?: number;
  }

  const CircularProgressbar: React.FC<CircularProgressbarProps>;

  export default CircularProgressbar;
}