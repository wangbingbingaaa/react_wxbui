import React, { useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types'
import useAutoResize from './autoResize';
import { deepMerge, deepClone } from './util';

const defaultColor = ['#0fffc0', '#00a08b'];

const Rbox8 = forwardRef(({ children, style, color = [], backgroundColor = 'transparent' }, ref) => {
    const { width, height, domRef } = useAutoResize(ref)

    const mergedColor = useMemo(() => deepMerge(deepClone(defaultColor, true), color || []), [color])
    const border = ['left-top', 'right-top', 'left-bottom', 'right-bottom']
    const filterId = `box-filter`;

    return (
        <>
            <style >
                {
                    `
        .box8 {
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
            <div className="box8" style={style} ref={domRef}>
                {width ?
                    <>
                        <svg className="dev-border" width={width} height={height}>
                            <defs>
                                <filter id={filterId} height="150%" width="150%" x="-25%" y="-25%">
                                    <feMorphology operator="dilate" radius="1" in="SourceAlpha" result="thicken" />
                                    <feGaussianBlur in="thicken" stdDeviation="2" result="blurred" />
                                    <feFlood floodColor={mergedColor[1]} result="glowColor">
                                    </feFlood>
                                    <feComposite in="glowColor" in2="blurred" operator="in" result="softGlowColored" />
                                    <feMerge>
                                        <feMergeNode in="softGlowColored" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            <path fill={backgroundColor} strokeWidth="2" stroke={mergedColor[0]}
                                d={`M15 5 L ${width - 15} 5 Q ${width - 5} 5, ${width - 5} 15 L ${width - 5} ${height - 15} Q ${width - 5} ${height - 5}, ${width - 15} ${height - 5} L 15, ${height - 5} Q 5 ${height - 5} 5 ${height - 15} L 5 15 Q 5 5 15 5`} />
                            <path strokeWidth="2" fill="transparent" strokeLinecap="round" filter={`url(#${filterId})`}
                                stroke={mergedColor[1]} d={`M 40 5 L 15 5 Q 5 5 5 15 L 5 40`} />

                            <path strokeWidth="2" fill="transparent" strokeLinecap="round" filter={`url(#${filterId})`}
                                stroke={mergedColor[1]}
                                d={`M ${width - 20} 5 L ${width - 15} 5 Q ${width - 5} 5 ${width - 5} 15 L ${width - 5} 20`} />

                            <path strokeWidth="2" fill="transparent" strokeLinecap="round" filter={`url(#${filterId})`}
                                stroke={mergedColor[1]}
                                d={`M ${width - 40} ${height - 5} L ${width - 15} ${height - 5} Q ${width - 5} ${height - 5} ${width - 5} ${height - 15} L ${width - 5} ${height - 40} `} />

                            <path strokeWidth="2" fill="transparent" strokeLinecap="round" filter={`url(#${filterId})`}
                                stroke={mergedColor[1]}
                                d={`M 20 ${height - 5} L 15 ${height - 5} Q 5 ${height - 5} 5 ${height - 15} L 5 ${height - 20}`} />

                        </svg>
                    </>
                    : <></>}
                <div className='slot-content'>{children}</div>
            </div >
        </>
    )


})
Rbox8.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    color: PropTypes.array,
    backgroundColor: PropTypes.string
}
export default Rbox8;
