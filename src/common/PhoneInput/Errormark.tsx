import * as React from 'react'
export default function Checkmark() {
    return <svg xmlns="http://www.w3.org/2000/svg" className="errormark__icon" viewBox="0 0 90.27 90.27">
    <defs>
      <style dangerouslySetInnerHTML={{__html: `
      svg {
        fill: red;
      }
        .circle-2 {
          fill: #bcbec4;
    }
              .x {
          opacity: 0.5;
    }
              .x-single {
          fill: #fff;
    }
      `}}>
     </style>
    </defs>
    <title>icon-error</title>
    <circle className="circle-2" cx="45.14" cy="45.14" r="45.14" />
    <g className="x">
      <rect className="x-single" x="21.77" y="43.49" width="46.74" height="3.36" transform="translate(-18.72 45.15) rotate(-45)" />
      <rect className="x-single" x="43.47" y="21.81" width="3.36" height="46.74" transform="translate(-18.72 45.16) rotate(-45)" />
    </g>
  </svg>
}