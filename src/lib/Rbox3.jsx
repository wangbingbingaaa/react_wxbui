import React, { useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types'
import useAutoResize from './autoResize';
import { deepMerge,deepClone } from './util';

const defaultColor = ['#0fffc0', '#00a08b'];

const Rbox3 = forwardRef(({ children, style, color = [], backgroundColor = 'transparent' }, ref) => {
    const { width, height, domRef } = useAutoResize(ref)

    const mergedColor = useMemo(() => deepMerge(deepClone(defaultColor, true), color || []), [color])
    const border = ['left-top', 'right-top', 'left-bottom', 'right-bottom']

    return (
        <>
            <style >
                {
                    `
        .box3 {
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
            <div className="box3" style={style} ref={domRef}>
                {width?
                <>
                <svg className="dev-border" width={width} height={height} >
                       <polygon fill={backgroundColor} stroke={mergedColor[0]} strokeWidth="2"
                       points={`0, 0 ${width / 5 - 8}, 0 ${width / 5}, 10 ${width / 5 * 4}, 10 ${width / 5 * 4 + 8}, 0 ${width},0 ${width}, ${height} ${width / 8 * 5},${height} ${width / 8 * 5 - 8},${height - 10} ${width / 8 * 3},${height - 10} ${width / 8 * 3 - 8},${height} 0, ${height} `} />
                   <polyline stroke={mergedColor[1]} strokeWidth="2"  fill='none'
                       points={`${width / 5 + 2}, 0 ${width / 5 + 8}, 4 ${width / 5 * 4 - 8}, 4 ${width / 5 * 4 - 2}, 2`} />
                   <polyline stroke={mergedColor[1]} strokeWidth="2" fill='none' strokeLinecap="round"
                       points={`${width / 8 * 3}, ${height - 4} ${width / 8 * 5 - 8}, ${height - 4} `}/>
                      
                </svg>
                </>
                : <></>}

                {border.map(borderName => (
                    <svg width="100px" height="100px" key={borderName} className={`${borderName} border`}>
                        <circle id="myCircle" cx="10" cy="10" r="2" fill={mergedColor[1]}></circle>
                        <circle id="myCircle" cx="25" cy="10" r="3" fill={mergedColor[1]}></circle>
                        <circle id="myCircle" cx="45" cy="10" r="3" fill={mergedColor[1]}></circle>
                    </svg>))}
                <div className='slot-content'>{children}</div>
            </div>
        </>
    )


})
Rbox3.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    color: PropTypes.array,
    backgroundColor: PropTypes.string
}
export default Rbox3;
