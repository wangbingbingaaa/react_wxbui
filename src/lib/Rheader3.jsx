import React, { useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types'
import useAutoResize from './autoResize';
import { deepMerge, deepClone } from './util';

const defaultColor = ['#0fffc0', '#00a08b'];

const Rheader3 = forwardRef(({ children, style, color = [], backgroundColor = 'transparent' }, ref) => {
    const { width, height, domRef } = useAutoResize(ref)

    const mergedColor = useMemo(() => deepMerge(deepClone(defaultColor, true), color || []), [color])
    const border = ['left-top', 'right-top', 'left-bottom', 'right-bottom']

    return (
        <>
            <style >
                {

                    `
        .xbh3progressDash {

            animation: movexbh3 3s linear infinite;
            stroke-dasharray: 50vw;
            stroke-dashoffset: 0;
        }
    
        @keyframes movexbh3 {
    
            from {
                stroke-dashoffset: 50vw;
            }
    
            to {
                stroke-dashoffset: 0;
            }
    
        }
        .xbheader3 {
            position: relative;
            width: 100%;
            height: 100%;
            border-radius: 6px;
        }
        .slot-content {
            position: relative;
            padding: 10px;
            width: calc(100% - 20px);
            height: calc(100% - 20px);
        }
    
        .dev-border {
            position: absolute;
            display: block;
        }
    
        .border-box-content {
            position: relative;
            width: 100%;
            height: 100%;
        }
        .border {
            position: absolute;
            display: block;
          }
       
        `
                }
            </style>
            <div className="xbheader3" style={style} ref={domRef}>
                {width ?
                    <>
                        <svg className="dev-border" width={width} height={height}>
                            <defs>
                                <filter id="filteRheader3" height="150%" width="150%" x="-25%" y="-25%">
                                    <feGaussianBlur stdDeviation="12" result="blurred" />
                                </filter>
                                <linearGradient id="linearGradient_x1_2" x1="0%" y1="10%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor={mergedColor[0]} stopOpacity="0" />
                                    <stop offset="100%" stopColor={mergedColor[0]} stopOpacity="1" />
                                </linearGradient>
                                <radialGradient id="radialGradient_f3" cx="50%" cy="50%" r="50%" fx="100%" fy="50%">
                                    <stop offset="0%" stopColor={mergedColor[0]} />
                                    <stop offset="100%" stopColor={mergedColor[1]} />
                                </radialGradient>
                            </defs>

                            <path stroke={mergedColor[1]} strokeWidth="2" fill="none" strokeLinecap="round"
                                strokeLinejoin="round"
                                d={`M 0 ${height / 2} L ${width / 3 - 70} ${height / 2} L ${width / 3 - 60} ${height / 3} L ${width / 3 - 50} ${height / 3} L ${width / 3 - 20} ${height / 3} L ${width / 3} 2 L ${width / 3 * 2} 2 L ${width / 3 * 2 + 20} ${height / 3} L ${width / 3 * 2 + 50} ${height / 3} L ${width / 3 * 2 + 60} ${height / 3} L ${width / 3 * 2 + 70} ${height / 2} L ${width} ${height / 2}`} />
                            <path stroke={mergedColor[1]} strokeWidth="2" fill="none" strokeLinecap="round"
                                strokeLinejoin="round"
                                d={`M ${width / 3 - 70} ${height / 2} L  ${width / 3 - 60} ${height / 3 * 2} L ${width / 3 - 20} ${height / 3 * 2}  L ${width / 3} ${height - 2} L ${width / 3 * 2} ${height - 2} L ${width / 3 * 2 + 20} ${height / 3 * 2} L ${width / 3 * 2 + 50} ${height / 3 * 2} L ${width / 3 * 2 + 60} ${height / 3 * 2} L ${width / 3 * 2 + 70} ${height / 2}`} />

                            <path stroke={mergedColor[1]} strokeWidth="4" fill="none" strokeLinejoin="round"
                                d={`M ${width / 3 - 70} ${height / 3} L ${width / 3 - 80} ${height / 2}`}>
                            </path>
                            <path stroke={mergedColor[1]} strokeWidth="4" fill="none" strokeLinejoin="round"
                                d={`M ${width / 3 - 80} ${height / 3} L ${width / 3 - 90} ${height / 2}`}>
                            </path>
                            <path stroke={mergedColor[1]} strokeWidth="4" fill="none" strokeLinejoin="round"
                                d={`M ${width / 3 - 90} ${height / 3} L ${width / 3 - 100} ${height / 2}`}>
                            </path>

                            <path stroke={mergedColor[1]} strokeWidth="4" fill="none" strokeLinejoin="round"
                                d={`M ${width / 3 * 2 + 70} ${height / 3} L ${width / 3 * 2 + 80} ${height / 2}`}>
                            </path>
                            <path stroke={mergedColor[1]} strokeWidth="4" fill="none" strokeLinejoin="round"
                                d={`M ${width / 3 * 2 + 80} ${height / 3} L ${width / 3 * 2 + 90} ${height / 2}`}>
                            </path>
                            <path stroke={mergedColor[1]} strokeWidth="4" fill="none" strokeLinejoin="round"
                                d={`M ${width / 3 * 2 + 90} ${height / 3} L ${width / 3 * 2 + 100} ${height / 2}`}>
                            </path>
                            <path stroke={mergedColor[0]} strokeWidth="2" fill="none" strokeLinejoin="round"
                                className="xbh3progressDash"
                                d={`M ${width / 2} ${height - 2} L ${width / 3} ${height - 2} L ${width / 3 - 20} ${height / 3 * 2} L  ${width / 3 - 60} ${height / 3 * 2} ${width / 3 - 70} ${height / 2} L 0 ${height / 2} `} />
                            <path stroke={mergedColor[0]} strokeWidth="2" fill="none" strokeLinecap="round"
                                strokeLinejoin="round" className="xbh3progressDash"
                                d={`M ${width / 2} ${height - 2} L ${width / 3 * 2} ${height - 2} L ${width / 3 * 2 + 20} ${height / 3 * 2} L  ${width / 3 * 2 + 60} ${height / 3 * 2} ${width / 3 * 2 + 70} ${height / 2} L ${width} ${height / 2}`} />

                            <circle id="myCircle1" cx={`${width / 5} `} cy={`${height / 2} `} r="3" fill={mergedColor[0]}></circle>
                            <circle id="myCircle2" cx={`${width / 5 * 4}`} cy={`${height / 2} `} r="3" fill={mergedColor[0]}>
                            </circle>

                            <polygon fill="url(#linearGradient_x1_2)" stroke="mergedColor[0]" strokeWidth="1" filter="url(#filterHeader1)"
                                points={`${width / 3 - 100} ${height / 3} ${width / 3 - 110} ${height / 2} 0   ${height / 2}`} />

                            <polygon fill="url(#linearGradient_x1_2)" stroke="mergedColor[0]" strokeWidth="1" filter="url(#filterHeader1)"
                                points={`${width / 3 * 2 + 100} ${height / 3} ${width / 3 * 2 + 110} ${height / 2} ${width}  ${height / 2}`} />



                        </svg>
                    </>
                    : <></>}
                <div className='slot-content'>{children}</div>
            </div >
        </>
    )


})
Rheader3.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    color: PropTypes.array,
    backgroundColor: PropTypes.string
}
export default Rheader3;
