const SubscribeIcon = (props: JSX.IntrinsicElements["svg"]) => (
  <svg width="35" height="35" viewBox="0 0 38 38" stroke="#fff" fill="none" {...props}>
    <rect x="26.25" y="9.25" width="0.5" height="6.5" rx="0.25"></rect>
    <rect
      x="29.75"
      y="12.25"
      width="0.5"
      height="6.5"
      rx="0.25"
      transform="rotate(90 29.75 12.25)"
    ></rect>
    <path d="M19.5 12.5h-7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-5"></path>
    <path d="M11.5 14.5L19 20l4-3"></path>
  </svg>
);

export default SubscribeIcon;
