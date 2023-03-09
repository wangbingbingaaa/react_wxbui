import React, { useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types'
import useAutoResize from './autoResize';
import { deepMerge, deepClone } from './util';

const defaultColor = ['#0fffc0', '#00a08b'];

const Rline3 = forwardRef(({ children, style, color = [], backgroundColor = 'transparent' }, ref) => {
    const { width, height, domRef } = useAutoResize(ref)

    const mergedColor = useMemo(() => deepMerge(deepClone(defaultColor, true), color || []), [color])
    const border = ['left-top', 'right-top', 'left-bottom', 'right-bottom']

    return (
        <>
            <style >
                {
                    `
        .line3 {
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
            <div className="line3" style={style} ref={domRef}>
                {width ?
                    <>
                        <svg className="dev-border" width={width} height={height}>
                            <path stroke={mergedColor[1]} strokeWidth="3" fill=" none" strokeLinecap="round"
                            strokeLinejoin="round" d={`M 0 ${height / 5 * 2} L ${height / 2} ${height / 5 * 2}`} />

                            <path stroke={mergedColor[1]} strokeWidth="3" fill=" none" strokeLinecap="round"
                            strokeLinejoin="round" d={`M 0 ${height / 5 * 3} L ${height / 2} ${height / 5 * 3} `}/>

                            <path stroke={mergedColor[0]} strokeWidth="4" fill=" none" strokeLinecap="round"
                            strokeLinejoin="round" d={`M 16, 0 L ${height / 2 + 16},${height / 2} L 16, ${height} `}/>

                            <path stroke={mergedColor[0]} strokeWidth="4" fill="none" strokeLinecap="round"
                            strokeLinejoin="round" d={`M ${width - 16}, 0 L ${width - height / 2 - 16},${height / 2} L ${width - 16},${height} `}/>

                            <path stroke={mergedColor[1]} strokeWidth="3" fill=" none" strokeLinecap="round"
                            strokeLinejoin="round" d={`M ${width} ${height / 5 * 2} L ${width - height / 2} ${height / 5 * 2}`}/>

                            <path stroke={mergedColor[1]} strokeWidth="3" fill=" none" strokeLinecap="round"
                            strokeLinejoin="round" d={`M ${width - height / 2}  ${height / 5 * 3} L ${width} ${height / 5 * 3} `}/>
                        </svg>

                    </>
                    : <></>}
                <div className='slot-content'>{children}</div>
            </div >
        </>
    )


})
Rline3.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    color: PropTypes.array,
    backgroundColor: PropTypes.string
}
export default Rline3;
