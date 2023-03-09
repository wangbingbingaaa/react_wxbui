import React, { useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types'
import useAutoResize from './autoResize';
import { deepMerge, deepClone } from './util';

const defaultColor = ['#0fffc0', '#00a08b'];

const Rbox5 = forwardRef(({ children, style, color = [], backgroundColor = 'transparent' }, ref) => {
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
        .box5 {
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
            <div className="box5" style={style} ref={domRef}>
                {width ?
                    <>
                        <svg className="dev-border" width={width} height={height}>
                            <polygon fill={backgroundColor} stroke={mergedColor[1]} strokeWidth="1"
                                points={`0, 0 ${width}, 0 ${width}, ${height} 0, ${height} 0, 0`} />
                            <polygon fill={backgroundColor} stroke={mergedColor[0]} strokeWidth="2"
                                points={`5, 5 ${width - 5}, 5 ${width - 5}, ${height - 5} 5, ${height - 5} 5, 5`} />
                        </svg>

                        {border.map(borderName => (
                            <svg width="100px" height="100px" key={borderName} className={`${borderName} border`}>
                                <polyline stroke={mergedColor[1]} strokeWidth="1" fill="none" points={`10 ,50  10 ,10  50,10`} />
                                <circle id="myCircle" cx="10" cy={height / 2} r="3" fill={mergedColor[0]}></circle>
                            </svg>))}
                    </>
                    : <></>}
                <div className='slot-content'>{children}</div>
            </div>
        </>
    )


})
Rbox5.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    color: PropTypes.array,
    backgroundColor: PropTypes.string
}
export default Rbox5;
