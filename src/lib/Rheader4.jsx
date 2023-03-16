import React, { useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types'
import useAutoResize from './autoResize';
import { deepMerge, deepClone } from './util';

const defaultColor = ['#0fffc0', '#00a08b'];

const Rheader4 = forwardRef(({ children, style, color = [], backgroundColor = 'transparent' }, ref) => {
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
        .xbheader4 {
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
            <div className="xbheader4" style={style} ref={domRef}>
                {width ?
                    <>
                        <svg className="dev-border" width={width} height={height}>
                            <defs>
                                <filter id="filterHeader1" height="150%" width="150%" x="-25%" y="-25%">
                                    <feGaussianBlur stdDeviation="12" result="blurred" />
                                </filter>
                                <linearGradient id="h4linearGradient_x1_2" x1="0%" y1="10%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor={mergedColor[0]} stopOpacity="0" />
                                    <stop offset="100%" stopColor={mergedColor[0]} stopOpacity="1" />
                                </linearGradient>
                                <radialGradient id="radialGradient_f3" cx="50%" cy="50%" r="50%" fx="100%" fy="50%">
                                    <stop offset="0%" stopColor={mergedColor[0]} />
                                    <stop offset="100%" stopColor={mergedColor[1]} />
                                </radialGradient>
                            </defs>
                            <polygon fill="url(#h4linearGradient_x1_2)"
                points={`0 0 0 ${height / 3} ${width / 3 - 50} ${height / 3} ${width / 3} ${height - 4} ${width / 3 * 2} ${height - 4} ${width / 3 * 2 + 50} ${height / 3} ${width} ${height / 3} ${width} 0`}/>

                            <path stroke={mergedColor[1]} strokeWidth="2" fill="none" strokeLinecap="round"
                                strokeLinejoin="round"
                                d={`M ${width / 3 - 28} ${height / 3 * 2} L ${width / 3 - 4} ${height - 2} L ${width / 3 + 8} ${height - 2}`} />
                           
                           <path stroke={mergedColor[1]} strokeWidth="2" fill="none" strokeLinecap="round"
                                strokeLinejoin="round"
                                d={`M ${width / 3 * 2 + 28} ${height / 3 * 2} L ${width / 3 * 2 + 4} ${height - 2} L ${width / 3 * 2 - 8} ${height - 2}`} />

                        </svg>
                    </>
                    : <></>}
                <div className='slot-content'>{children}</div>
            </div >
        </>
    )


})
Rheader4.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    color: PropTypes.array,
    backgroundColor: PropTypes.string
}
export default Rheader4;
