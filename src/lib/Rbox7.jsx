import React, { useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types'
import useAutoResize from './autoResize';
import { deepMerge, deepClone } from './util';

const defaultColor = ['#0fffc0', '#00a08b'];

const Rbox7 = forwardRef(({ children, style, color = [], backgroundColor = 'transparent' }, ref) => {
    const { width, height, domRef } = useAutoResize(ref)

    const mergedColor = useMemo(() => deepMerge(deepClone(defaultColor, true), color || []), [color])
    const border = ['left-top', 'right-top', 'left-bottom', 'right-bottom']

    return (
        <>
            <style >
                {
                    `
        .box7 {
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
            <div className="box7" style={style} ref={domRef}>
                {width ?
                    <>
                        <svg className="dev-border" width={width} height={height}>
                            <path fill={backgroundColor} stroke={mergedColor[0]} strokeWidth="3"
                                d={`M 140,20 ${width - 20},20 ${width} ,40 ${width},${height - 20} ${width},${height} 20,${height} 0,${height - 20} 0 ,20`} />
                            <path fill={backgroundColor} stroke={mergedColor[1]} strokeWidth="3" d={`M 0 ,20 20,0 120 ,0 140,20 `} />
                            <rect x="20" y="10" width="16" height="6" fill={mergedColor[1]} rx="5" ry="5"></rect>
                            <rect x="40" y="10" width="16" height="6" fill={mergedColor[1]} rx="5" ry="5"></rect>
                            <rect x="60" y="10" width="16" height="6" fill={mergedColor[1]} rx="5" ry="5"></rect>
                            <rect x="80" y="10" width="16" height="6" fill={mergedColor[1]} rx="5" ry="5"></rect>
                            <rect x="100" y="10" width="16" height="6" fill={mergedColor[1]} rx="5" ry="5"></rect>
                            <polyline stroke={mergedColor[1]} strokeWidth="8" fill="none"
                                points={`${width} ,${height - 60}   ${width} ,${height}   ${width - 60} ,${height}`} />
                            <polyline stroke={mergedColor[1]} strokeWidth="4" fill="none"
                                points={`${width - 10} ,${height - 40}   ${width - 10} ,${height - 10}   ${width - 40} ,${height - 10}`} />

                        </svg>
                    </>
                    : <></>}
                <div className='slot-content'>{children}</div>
            </div >
        </>
    )


})
Rbox7.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    color: PropTypes.array,
    backgroundColor: PropTypes.string
}
export default Rbox7;
