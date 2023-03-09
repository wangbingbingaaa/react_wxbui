import React, { useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types'
import useAutoResize from './autoResize';
import { deepMerge, deepClone } from './util';

const defaultColor = ['#0fffc0', '#00a08b'];

const Rbox2 = forwardRef(({ children, style, color = [], backgroundColor = 'transparent' }, ref) => {
    const { width, height, domRef } = useAutoResize(ref)

    const mergedColor = useMemo(() => deepMerge(deepClone(defaultColor, true), color || []), [color])
    const border = ['left-top', 'right-top', 'left-bottom', 'right-bottom']

    return (
        <>
            <style >
                {
                    `
        .box2 {
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
            <div className="box2" style={style} ref={domRef} >
                <svg className="dev-border" width={width} height={height}>
                {width ?
                    <polygon fill={backgroundColor} stroke={mergedColor[0]} strokeWidth="1"
                        points={`0, 0 ${width}, 0 ${width}, ${height} 0, ${height} 0, 0`} />
                        :<></>
                }
                </svg>
                {border.map(item => (
                    <svg width="100px" height="100px" key={item} v-for="item in border" className={`${item} dev-border`}>
                        <polygon fill={mergedColor[1]} points="40, 0 0, 0 0, 40 2, 26 6, 5 5, 6 26, 2" />
                        <circle id="myCircle" cx="10" cy="10" r="2" fill={mergedColor[1]}></circle>
                    </svg>
                ))}
                <div className='slot-content'>{children}</div>
            </div>
        </>
    )


})
Rbox2.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    color: PropTypes.array,
    backgroundColor: PropTypes.string
}
export default Rbox2;
