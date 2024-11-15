declare module 'react-circular-progressbar' {
    import { CSSProperties } from 'react';
  
    export interface CircularProgressbarProps {
      value: number;
      text?: string;
      styles?: any;
    }
  
    export function buildStyles(styles: Record<string, CSSProperties>): any;
  
    const CircularProgressbar: React.FC<CircularProgressbarProps>;
    export default CircularProgressbar;
  }
  