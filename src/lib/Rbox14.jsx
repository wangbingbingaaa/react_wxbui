import React, { useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types'
import useAutoResize from './autoResize';
import { deepMerge, deepClone } from './util';

const defaultColor = ['#0fffc0', '#00a08b'];

const Rbox14 = forwardRef(({ children, style, color = [], backgroundColor = 'transparent' }, ref) => {
    const { width, height, domRef } = useAutoResize(ref)

    const mergedColor = useMemo(() => deepMerge(deepClone(defaultColor, true), color || []), [color])
    const border = ['left-top', 'right-top', 'left-bottom', 'right-bottom']

    return (
        <>
            <style >
                {
                    `
        .box14 {
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
            <div className="box14" style={style} ref={domRef}>
                {width ?
                    <>
                        {border.map(borderName => (
                            <svg width={width/2} height={height/2} key={borderName} className={`${borderName} border`}>
                                <circle id="myCircle" cx="3" cy="3" r="2" fill={mergedColor[1]}></circle>
                                <polyline stroke={mergedColor[0]} strokeWidth="1" fill="none" points={`10 ,1 ${width / 2} 0`} />
                                <polyline stroke={mergedColor[0]} strokeWidth="1" fill="none" points={`1 ,10 1 ${height / 3} `} />
                                <polyline stroke={mergedColor[1]} strokeWidth="1" fill="none"
                                    points={`5 ,${height / 3 - 15}  5 ${height / 2} `} />
                            </svg>
                        ))}

                    </>
                    : <></>}
                <div className='slot-content'>{children}</div>
            </div >
        </>
    )


})
Rbox14.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    color: PropTypes.array,
    backgroundColor: PropTypes.string
}
export default Rbox14;
