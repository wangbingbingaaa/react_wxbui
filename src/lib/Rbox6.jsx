import React, { useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types'
import useAutoResize from './autoResize';
import { deepMerge, deepClone } from './util';

const defaultColor = ['#0fffc0', '#00a08b'];

const Rbox6 = forwardRef(({ children, style, color = [], backgroundColor = 'transparent' }, ref) => {
    const { width, height, domRef } = useAutoResize(ref)

    const mergedColor = useMemo(() => deepMerge(deepClone(defaultColor, true), color || []), [color])
    const border = ['left-top', 'right-top', 'left-bottom', 'right-bottom']

    return (
        <>
            <style >
                {
                    `
        .box6 {
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
            <div className="box6" style={style} ref={domRef}>
                {width ?
                    <>
                        <svg className="dev-border" width={width} height={height}>
                            <polygon fill={backgroundColor} stroke={mergedColor[0]} strokeWidth="3"
                                points={`0, ${height / 2} ${width / 14},  0 ${width - width / 14}, 0  ${width}, ${height / 2} ${width - width / 14},${height}  ${width / 14},${height}  0, ${height / 2}`} />
                            <polyline stroke={mergedColor[1]} strokeWidth="2" fill=" none"
                                points={`${width / 14 * 3}, ${height - 6} ${width / 14 * 11},${height - 6}`} />
                            <circle id="myCircle" cx={`${width / 14 * 3 - 10}`} cy={`${height - 6}`} r="3" fill={mergedColor[0]}>
                            </circle>
                            <circle id="myCircle" cx={`${width / 14 * 11 + 10}`} cy={`${height - 6}`} r="3" fill={mergedColor[0]}>
                            </circle>
                        </svg>

                        {border.map(borderName => (
                            <svg width="100px" height="100px" key={borderName} className={`${borderName} border`}>
                               <polyline stroke={mergedColor[1]} strokeWidth="2" fill="none"
                points={`10, ${height / 2} ${width / 14 + 6},  6 `} />
                            </svg>))}
                    </>
                    : <></>}
                <div className='slot-content'>{children}</div>
            </div >
        </>
    )


})
Rbox6.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    color: PropTypes.array,
    backgroundColor: PropTypes.string
}
export default Rbox6;
