import React, { useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types'
import useAutoResize from './autoResize';
import { deepMerge, deepClone } from './util';

const defaultColor = ['#0fffc0', '#00a08b'];

const Rbox13 = forwardRef(({ children, style, color = [], backgroundColor = 'transparent' }, ref) => {
    const { width, height, domRef } = useAutoResize(ref)

    const mergedColor = useMemo(() => deepMerge(deepClone(defaultColor, true), color || []), [color])
    const border = ['left-top', 'right-top', 'left-bottom', 'right-bottom']

    return (
        <>
            <style >
                {
                    `
        .box13 {
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
            <div className="box13" style={style} ref={domRef}>
                {width ?
                    <>

                        {border.map(borderName => (
                            <svg width={width/2} height={height/2} key={borderName} className={`${borderName} border`}>
                                <polyline stroke={mergedColor[1]} strokeWidth="3" fill="none" points={`15 ,1  1 ,1  1,15`} />
                                <polyline stroke={mergedColor[0]} strokeWidth="1" fill="none" points={`25 ,1 ${width / 2} 0`} />
                                <polyline stroke={mergedColor[0]} strokeWidth="1" fill="none" points={`1 ,25 1 ${height / 2} `} />
                            </svg>
                        ))}

                    </>
                    : <></>}
                <div className='slot-content'>{children}</div>
            </div >
        </>
    )


})
Rbox13.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    color: PropTypes.array,
    backgroundColor: PropTypes.string
}
export default Rbox13;
