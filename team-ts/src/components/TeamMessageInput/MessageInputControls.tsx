import React, { forwardRef, MouseEventHandler } from 'react';
import clsx from 'clsx';
import { MessageInputControlType } from './hooks/useMessageInputCompositionControls';

type MessageInputControlButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  type: MessageInputControlType;
  active?: boolean;
};

const EmojiIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    fill='none'
    viewBox='0 0 16 16'
  >
    <path
      fillRule='evenodd'
      d='M1.6 8a6.4 6.4 0 1112.8 0A6.4 6.4 0 011.6 8zM8 0a8 8 0 100 16A8 8 0 008 0zM6 7.2a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4zM11.2 6a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0zM5.455 9.141a.8.8 0 10-1.31.918c.542.774 1.578 1.737 2.962 2.024 1.46.303 3.1-.184 4.688-1.948a.8.8 0 00-1.19-1.07C9.313 10.5 8.22 10.68 7.433 10.517c-.863-.18-1.586-.817-1.978-1.376z'
      clipRule='evenodd'
    ></path>
  </svg>
);

const BoldIcon = () => (
  <svg
    width='10'
    height='12'
    viewBox='0 0 10 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M7.63 5.82C8.46 5.24 9 4.38 9 3.5C9 1.57 7.43 0 5.5 0H0V12H6.25C8.04 12 9.5 10.54 9.5 8.75C9.5 7.45 8.73 6.34 7.63 5.82ZM2.5 2H5.25C6.08 2 6.75 2.67 6.75 3.5C6.75 4.33 6.08 5 5.25 5H2.5V2ZM5.75 10H2.5V7H5.75C6.58 7 7.25 7.67 7.25 8.5C7.25 9.33 6.58 10 5.75 10Z'
    />
  </svg>
);

const CodeSnippetIcon = () => (
  <svg
    width='20'
    height='12'
    viewBox='0 0 20 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M7.4 10.6L2.8 6L7.4 1.4L6 0L0 6L6 12L7.4 10.6ZM12.6 10.6L17.2 6L12.6 1.4L14 0L20 6L14 12L12.6 10.6Z'
    />
  </svg>
);

const ItalicsIcon = () => (
  <svg
    width='12'
    height='12'
    viewBox='0 0 12 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M4 0V2H6.58L2.92 10H0V12H8V10H5.42L9.08 2H12V0H4Z'
    />
  </svg>
);

const StrikeThroughIcon = () => (
  <svg
    width='16'
    height='14'
    viewBox='0 0 16 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M3.76889 5.11111C3.53778 4.68444 3.42222 4.19556 3.42222 3.62667C3.42222 3.08444 3.53778 2.59556 3.77778 2.14222C4.00889 1.69778 4.33778 1.31556 4.76444 0.995555C5.19111 0.684444 5.69778 0.435556 6.27556 0.257778C6.86222 0.0888889 7.51111 0 8.21333 0C8.93333 0 9.58222 0.0977777 10.1778 0.302222C10.7644 0.497778 11.2711 0.782222 11.68 1.13778C12.0978 1.49333 12.4178 1.92 12.64 2.40889C12.8622 2.89778 12.9778 3.43111 12.9778 4.01778H10.3022C10.3022 3.74222 10.2578 3.49333 10.1689 3.26222C10.0889 3.02222 9.95556 2.82667 9.77778 2.65778C9.6 2.48889 9.37778 2.36444 9.11111 2.26667C8.84444 2.17778 8.52444 2.12444 8.16889 2.12444C7.82222 2.12444 7.51111 2.16 7.25333 2.24C6.99556 2.32 6.78222 2.42667 6.61333 2.56C6.44444 2.70222 6.31111 2.86222 6.22222 3.04889C6.13333 3.23556 6.08889 3.43111 6.08889 3.63556C6.08889 4.06222 6.31111 4.41778 6.74667 4.71111C7.08444 4.93333 7.43111 5.13778 8 5.33333H3.90222C3.85778 5.26222 3.80444 5.18222 3.76889 5.11111ZM16 8V6.22222H0V8H8.55111C8.71111 8.06222 8.90667 8.12444 9.04 8.17778C9.36889 8.32889 9.62667 8.48 9.81333 8.63111C10 8.78222 10.1244 8.95111 10.1956 9.13778C10.2578 9.31556 10.2933 9.52 10.2933 9.75111C10.2933 9.95556 10.2489 10.1511 10.1689 10.3378C10.0889 10.5156 9.96445 10.6756 9.79556 10.8089C9.62667 10.9422 9.42222 11.04 9.16444 11.12C8.90667 11.1911 8.60444 11.2356 8.26667 11.2356C7.88444 11.2356 7.52889 11.2 7.21778 11.12C6.90667 11.04 6.63111 10.9156 6.40889 10.7467C6.18667 10.5778 6.00889 10.3556 5.88444 10.08C5.76 9.80444 5.66222 9.40444 5.66222 9.00445H3.02222C3.02222 9.49333 3.09333 10.0089 3.23556 10.4089C3.37778 10.8089 3.56444 11.1644 3.81333 11.4844C4.06222 11.7956 4.34667 12.0711 4.68444 12.3022C5.01333 12.5333 5.37778 12.7289 5.76889 12.88C6.16 13.0311 6.56889 13.1467 6.99556 13.2267C7.42222 13.2978 7.84889 13.3422 8.27556 13.3422C8.98667 13.3422 9.63556 13.2622 10.2133 13.0933C10.7911 12.9244 11.2889 12.6933 11.6978 12.3911C12.1067 12.0889 12.4267 11.7067 12.6489 11.2622C12.8711 10.8178 12.9867 10.3111 12.9867 9.74222C12.9867 9.20889 12.8978 8.72889 12.7111 8.31111C12.6667 8.21333 12.6133 8.10667 12.56 8.01778H16V8Z'
    />
  </svg>
);

const ControlsIcons: Record<MessageInputControlType, React.ComponentType> = {
  bold: BoldIcon,
  code: CodeSnippetIcon,
  emoji: EmojiIcon,
  italics: ItalicsIcon,
  'strike-through': StrikeThroughIcon,
};


export const MessageInputControlButton = forwardRef<HTMLButtonElement, MessageInputControlButtonProps>((
  { active, onClick, type }, ref,
) => {
  const Icon = ControlsIcons[type];

  if (!Icon) return null;

  return (
    <button className={clsx('message-input__controls-button', type, { 'active': active })} onClick={onClick} ref={ref}>
      <Icon />
    </button>
  );
});