import React, { useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types'
import useAutoResize from './autoResize';
import { deepMerge, deepClone } from './util';

const defaultColor = ['#0fffc0', '#00a08b'];

const Rheader1 = forwardRef(({ children, style, color = [], backgroundColor = 'transparent' }, ref) => {
    const { width, height, domRef } = useAutoResize(ref)

    const mergedColor = useMemo(() => deepMerge(deepClone(defaultColor, true), color || []), [color])
    const border = ['left-top', 'right-top', 'left-bottom', 'right-bottom']

    return (
        <>
            <style >
                {

                    `
        .progressDash {
            animation: move 5s linear infinite;
            stroke-dasharray: 100vw;
            stroke-dashoffset: 0;
        
        }
        
        @keyframes move {
        
            from {
                stroke-dashoffset: 100vw;
            }
        
            to {
                stroke-dashoffset: 0;
            }
        
        }
        .xbheader1 {
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
            <div className="xbheader1" style={style} ref={domRef}>
                {width ?
                    <>
                        <svg className="dev-border" width={width} height={height}>
                            <defs>
                                <filter id="filterHeader1" height="150%" width="150%" x="-25%" y="-25%">
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
                                d={`M 0 10 L ${width / 4 - 40} 10 Q ${width / 4 - 15} 10  ${width / 4} ${height / 2} L ${width / 4} ${height / 2} Q ${width / 4 + 20} ${height - 10} ${width / 4 + 60} ${height - 10} L ${width / 4 * 3 - 40} ${height - 10} Q ${width / 4 * 3 - 20} ${height - 10} ${width / 4 * 3} ${height / 2} L ${width / 4 * 3} ${height / 2} Q ${width / 4 * 3 + 15} 10 ${width / 4 * 3 + 40} 10 L ${width / 4 * 3 + 40} 10 L ${width} 10`} />
                            <path stroke={mergedColor[0]} strokeWidth="2" fill="none" strokeLinecap="round"
                                strokeLinejoin="round" className="progressDash"
                                d={`M 0 5 L ${width / 4 - 40} 5 Q ${width / 4 - 15} 5  ${width / 4} ${height / 2} L ${width / 4} ${height / 2} Q ${width / 4 + 20} ${height - 5} ${width / 4 + 60} ${height - 5} L ${width / 4 * 3 - 40} ${height - 5} Q ${width / 4 * 3 - 20} ${height - 5} ${width / 4 * 3} ${height / 2} L ${width / 4 * 3} ${height / 2} Q ${width / 4 * 3 + 15} 5 ${width / 4 * 3 + 40} 5 L ${width / 4 * 3 + 40} 5 L ${width} 5`} />
                            <rect x={`${width / 4}`} y="0" width={`${width / 2}`} height={`${height / 4 * 3}`} rx={`${height / 2}`}
                                ry={`${height / 2}`} fill="url(#linearGradient_x1_2)" filter="url(#filterHeader1)" />
                        </svg>
                    </>
                    : <></>}
                <div className='slot-content'>{children}</div>
            </div >
        </>
    )


})
Rheader1.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    color: PropTypes.array,
    backgroundColor: PropTypes.string
}
export default Rheader1;
