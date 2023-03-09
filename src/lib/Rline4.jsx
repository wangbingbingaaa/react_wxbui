import React, { useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types'
import useAutoResize from './autoResize';
import { deepMerge, deepClone } from './util';

const defaultColor = ['#0fffc0', '#00a08b'];

const Rline4 = forwardRef(({ children, style, color = [], backgroundColor = 'transparent' }, ref) => {
    const { width, height, domRef } = useAutoResize(ref)

    const mergedColor = useMemo(() => deepMerge(deepClone(defaultColor, true), color || []), [color])
    const border = ['left-top', 'right-top', 'left-bottom', 'right-bottom']

    return (
        <>
            <style >
                {
                    `
        .line4 {
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
        .right-top {
            right: 0px;
            transform: rotateY(180deg);
          }
        
          .left-bottom {
            bottom: 0px;
            transform: rotateX(180deg);
          }
          .right-bottom {
            right: 0px;
            bottom: 0px;
            transform: rotateX(180deg) rotateY(180deg);
          }
        `
                }
            </style>
            <div className="line4" style={style} ref={domRef}>
                {width ?
                    <>
                        <svg className="dev-border" width={width} height={height}>
                            <path stroke={mergedColor[0]} strokeWidth="3"  fill=" none" strokeLinecap="round"
                            strokeLinejoin="round" d={`M ${height / 2 + 6}, 0 L 6,${height / 2} L ${height / 2 + 6}, ${height} `}/>

                            <path stroke={mergedColor[0]} strokeWidth="3"  fill=" none" strokeLinecap="round"
                            strokeLinejoin="round" d={`M ${height / 2 + 12}, 0 L 12,${height / 2} L ${height / 2 + 12}, ${height} `} />

                            <circle id="myCircle" cx="20" cy={`${height / 2}`} r="2" fill={mergedColor[1]}></circle>

                            <path stroke={mergedColor[0]} strokeWidth="3" fill="none" strokeLinecap="round"
                            strokeLinejoin="round" d={`M ${width - height / 2 - 6}, 0 L ${width - 6},${height / 2} L ${width - height / 2 - 6} ${height} `} />

                            <path stroke={mergedColor[0]} strokeWidth="3" fill="none" strokeLinecap="round"
                            strokeLinejoin="round" d={`M ${width - height / 2 - 12}, 0 L ${width - 12},${height / 2} L ${width - height / 2 - 12} ${height} `}/>
                            <circle id="myCircle" cx={`${width - 20}`} cy={`${height / 2}`} r="2" fill={mergedColor[1]}></circle>
                        </svg>

        </>
                    : <></>}
<div className='slot-content'>{children}</div>
            </div >
        </>
    )


})
Rline4.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    color: PropTypes.array,
    backgroundColor: PropTypes.string
}
export default Rline4;
