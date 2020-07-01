import React from "react";

function PersonalLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsOsb="http://www.openswatchbook.org/uri/2009/osb"
      width="210mm"
      height="297mm"
      version="1.1"
      viewBox="0 0 210 297"
      className="personal_logo"
    >
      <defs>
        <linearGradient osbPaint="solid">
          <stop offset="0" stopColor="#dd4c65" stopOpacity="1"></stop>
        </linearGradient>
        <linearGradient osbPaint="gradient">
          <stop offset="0" stopColor="#000" stopOpacity="1"></stop>
          <stop offset="1" stopColor="#000" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient osbPaint="solid">
          <stop offset="0" stopColor="#000" stopOpacity="1"></stop>
        </linearGradient>
        <linearGradient osbPaint="solid">
          <stop offset="0" stopColor="#30475e" stopOpacity="1"></stop>
        </linearGradient>
        <linearGradient osbPaint="gradient">
          <stop offset="0" stopColor="#f77067" stopOpacity="1"></stop>
          <stop offset="1" stopColor="#f77067" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
      <g>
        <g
          fillOpacity="1"
          strokeWidth="0.275"
          transform="translate(22.056 3.823)"
        >
          <g fill="#f77067">
            <rect
              width="40"
              height="115"
              x="61"
              y="-141.5"
              ry="19.471"
              transform="rotate(90)"
            ></rect>
            <rect width="40" height="115" x="64" y="86" ry="19.471"></rect>
          </g>
          <g fill="#f58a66">
            <rect
              width="40"
              height="115"
              x="68"
              y="-134.5"
              ry="19.471"
              transform="rotate(90)"
            ></rect>
            <rect width="40" height="115" x="57" y="93" ry="19.471"></rect>
          </g>
          <rect
            width="40"
            height="115"
            x="50"
            y="100"
            fill="#f2a365"
            ry="19.471"
          ></rect>
          <rect
            width="40"
            height="115"
            x="75"
            y="-127.5"
            fill="#f2a365"
            ry="19.471"
            transform="rotate(90)"
          ></rect>
          <g fill="#f2a365">
            <rect width="40" height="115" x="50" y="100" ry="19.471"></rect>
            <rect
              width="40"
              height="115"
              x="75"
              y="-127.5"
              ry="19.471"
              transform="rotate(90)"
            ></rect>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default PersonalLogo;
