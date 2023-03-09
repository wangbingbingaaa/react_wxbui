import React, { useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types'
import useAutoResize from './autoResize';
import { deepMerge, deepClone } from './util';

const defaultColor = ['#0fffc0', '#00a08b'];

const Rbox10 = forwardRef(({ children, style, color = [], backgroundColor = 'transparent' }, ref) => {
    const { width, height, domRef } = useAutoResize(ref)

    const mergedColor = useMemo(() => deepMerge(deepClone(defaultColor, true), color || []), [color])
    const border = ['left-top', 'right-top', 'left-bottom', 'right-bottom']

    return (
        <>
            <style >
                {
                    `
        .box10 {
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
            <div className="box10" style={style} ref={domRef}>
                {width ?
                    <>
                        <svg className="dev-border" width={width} height={height}>
                            <defs>

                                <filter id="fiterBorder10" height="150%" width="150%" x="-25%" y="-25%">
                                    <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken" />
                                    <feGaussianBlur in="thicken" stdDeviation="3" result="blurred" />
                                    <feFlood floodColor={mergedColor[1]} result="glowColor" />
                                    <feComposite in="glowColor" in2="blurred" operator="in" result="softGlowColored" />
                                    <feMerge>
                                        <feMergeNode in="softGlowColored" />
                                        <feMergeNode in="SourceGraphic" />

                                    </feMerge>
                                </filter>
                            </defs>
                            <polygon fill={backgroundColor} stroke={mergedColor[1]} strokeWidth="1" filter="url(#fiterBorder10)"
                                points={`0, 0 ${width}, 0 ${width}, ${height} 0, ${height} 0, 0`} />
                            <polygon fill={backgroundColor} stroke={mergedColor[0]} strokeWidth="2"
                                points={`10, 10 ${width - 10}, 10 ${width - 10}, ${height - 10} 10, ${height - 10} 10, 10`} />
                        </svg>
                        {border.map(borderName => (
                            <svg width={width/2} height={height/2} key={borderName} className={`${borderName} border`}>
                                <polyline stroke={mergedColor[1]} strokeWidth="4" fill=" none" points={`20 ,50  20 ,20  50,20`} />
                                <circle id="myCircle" cx="20" cy={height / 2} r="4" fill={mergedColor[0]}></circle>
                            </svg>
                        ))}

                    </>
                    : <></>}
                <div className='slot-content'>{children}</div>
            </div >
        </>
    )


})
Rbox10.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    color: PropTypes.array,
    backgroundColor: PropTypes.string
}
export default Rbox10;
