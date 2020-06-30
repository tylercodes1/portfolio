import React from 'react'
import './drawing.css'


class Drawing extends React.Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="210mm"
        height="297mm"
        version="1.1"
        viewBox="0 0 210 297"
        className="first"
      >
        <g className="second" fillRule="evenodd">
          <path
            fill="#ff0"
            strokeWidth="0.265"
            d="M55.185 191.256l-13.67-5.01-11.876 8.42.541-14.548-11.677-8.693 14.003-3.982 4.659-13.792 8.113 12.088 14.558.169-8.99 11.451z"
          ></path>
          <g className="abc" stroke="none" strokeLinejoin="round">
            <path
              fill="#e9e9ff"
              d="M77.294 175.695l76.536-86.308v106.647l-76.536 30.505z"
            ></path>
            <path
              fill="#353564"
              d="M59.836 165.908v57.171l17.458 3.46v-50.844z"
            ></path>
            <path
              fill="#4d4d9f"
              d="M59.836 165.908L134.56 39.51l19.27 49.876-76.536 86.308z"
            ></path>
            <path
              fill="#afafde"
              d="M59.836 223.08l74.724-44.675 19.27 17.629-76.536 30.505z"
            ></path>
            <path
              fill="#d7d7ff"
              d="M134.56 39.51v138.895l19.27 17.629V89.387z"
            ></path>
            <path
                className="leftWall"
            //   fill="#8686bf"
              d="M59.836 165.908L134.56 39.51v138.894l-74.724 44.674z"
            ></path>
          </g>
          <g stroke="none" strokeLinejoin="round">
            <path
              fill="#e9e9ff"
              d="M90.3 208.734l22.953-12.65v54.197l-22.953.88z"
            ></path>
            <path
              fill="#353564"
              d="M71.06 201.84v48.842l19.24.48v-42.428z"
            ></path>
            <path
              fill="#4d4d9f"
              d="M71.06 201.84l21.166-17.499 21.027 11.743-22.953 12.65z"
            ></path>
            <path
              fill="#afafde"
              d="M71.06 250.682l21.166-1.218 21.027.817-22.953.88z"
            ></path>
            <path
              fill="#d7d7ff"
              d="M92.226 184.341v65.123l21.027.817v-54.197z"
            ></path>
            <path
              fill="#8686bf"
              d="M71.06 201.84l21.166-17.499v65.123l-21.166 1.218z"
            ></path>
          </g>
        </g>
      </svg>
    );
  }
}

export default Drawing
