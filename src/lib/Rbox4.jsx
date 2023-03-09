import React, { useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types'
import useAutoResize from './autoResize';
import { deepMerge, deepClone } from './util';

const defaultColor = ['#0fffc0', '#00a08b'];

const Rbox4 = forwardRef(({ children, style, color = [], backgroundColor = 'transparent' }, ref) => {
    const { width, height, domRef } = useAutoResize(ref)

    const mergedColor = useMemo(() => deepMerge(deepClone(defaultColor, true), color || []), [color])
    const border = ['left-top', 'right-top', 'left-bottom', 'right-bottom']
    const borderLeft = ['left-top', 'right-bottom'];
    const borderRight = ['right-top', 'left-bottom'];

    return (
        <>
            <style >
                {
                    `
        .box4 {
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
            <div className="box4" style={style} ref={domRef}>
                {width ?
                    <>
                        {borderLeft.map(borderName => (
                            <svg width="100px" height="100px" key={borderName} className={`${borderName} border`}>
                                <polyline stroke={mergedColor[1]} strokeWidth="4" fill='none'
                                    points={`10 ,40  10 ,18 18, 10 40,10`} />
                            </svg>
                        ))}

                        {borderRight.map(borderName => (
                            <svg width="100px" height="100px" key={borderName} className={`${borderName} border`}>
                                <polyline stroke={mergedColor[0]} strokeWidth="4" fill="none"
                                    points={`0 ,${width / 2}  0 ,16 16, 0 ${width / 2},0`} />
                                <polygon fill={mergedColor[1]} stroke={mergedColor[1]} strokeWidth="1" points={`24, 8  28 ,12 24,15  `} />
                                <polygon fill={mergedColor[1]} stroke={mergedColor[1]} strokeWidth="1" points={`34, 8  38 ,12 34,15  `} />
                                <polygon fill={mergedColor[1]} stroke={mergedColor[1]} strokeWidth="1" points={`44, 8  48 ,12 44,15  `} />
                                <polygon fill={mergedColor[1]} stroke={mergedColor[1]} strokeWidth="1" points={`54, 8  58 ,12 54,15  `} />
                                <polygon fill={mergedColor[1]} stroke={mergedColor[1]} strokeWidth="1" points={`64, 8  68 ,12 64,15  `} />
                                <polygon fill={mergedColor[1]} stroke={mergedColor[1]} strokeWidth="1" points={`74, 8  78 ,12 74,15  `} />
                            </svg>))}
                    </>
                    : <></>}
                <div className='slot-content'>{children}</div>
            </div>
        </>
    )


})
Rbox4.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    color: PropTypes.array,
    backgroundColor: PropTypes.string
}
export default Rbox4;
