import React, { useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types'
import useAutoResize from './autoResize';
import { deepMerge, deepClone } from './util';

const defaultColor = ['#0fffc0', '#00a08b'];

const Rline6 = forwardRef(({ children, style, color = [], backgroundColor = 'transparent' }, ref) => {
    const { width, height, domRef } = useAutoResize(ref)

    const mergedColor = useMemo(() => deepMerge(deepClone(defaultColor, true), color || []), [color])
    const border = ['left-top', 'right-top', 'left-bottom', 'right-bottom']

    return (
        <>
            <style >
                {
                    `
        .line6 {
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
            <div className="line6" style={style} ref={domRef}>
                {width ?
                    <>
                        <svg className="dev-border" width={width} height={height}>
                            <path stroke={mergedColor[0]} strokeWidth="1" fill="none" strokeLinecap="round"
                                strokeLinejoin="round" d={`M ${width / 2} 0 L ${width / 2}, ${height} `} />

                            <circle id="myCircle" cx={`${width / 2}`} cy={`${height / 4 * 3}`} r="3" fill={mergedColor[0]}></circle>
                            <circle id="myCircle" cx={`${width / 2}`} cy={`${height / 4}`} r="3" fill={mergedColor[0]}></circle>

                            <circle id="myCircle" cx={`${width / 2}`} cy={`0`} r="3" fill={mergedColor[1]}>
                                <animateMotion path={`M0 0 L 0 ${height} Z`} dur="8s" repeatCount="indefinite" />
                            </circle>
                        </svg>

                    </>
                    : <></>}
                <div className='slot-content'>{children}</div>
            </div >
        </>
    )


})
Rline6.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    color: PropTypes.array,
    backgroundColor: PropTypes.string
}
export default Rline6;
