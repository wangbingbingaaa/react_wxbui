import React, { useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames'
import useAutoResize from './autoResize';
import { deepMerge } from './util';
import { deepClone } from './util';

const defaultColor= ['#0fffc0', '#00a08b'];

const Rbox1 = forwardRef(({ children, className, style, color = [], backgroundColor = 'transparent' }, ref) => {
    const { width, height, domRef } = useAutoResize(ref)

    const mergedColor = useMemo(() => deepMerge(deepClone(defaultColor, true), color || []), [color])
    const classNames = useMemo(() => classnames('box1', className), [className]);
    const border = ['left-top', 'right-top', 'left-bottom', 'right-bottom']

   return (
   <>
   <style >
    {
        `
        .box1 {
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
  
    <div className={classNames} style={style} ref={domRef}>
        <svg className="dev-border" width={width} height={height} >
            <defs>
                <filter id="innerShadow" height="100%" width="100%" x="0" y="0">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blurred"/>
                </filter>
            </defs>
            {width ?
            <polygon fill={backgroundColor} stroke={mergedColor[0]} strokeWidth="3" filter={"url(#innerShadow)"}
                points={`0,22 22, 0 ${width - 22}, 0 ${width}, 22 ${width} ,${height - 22} ${width - 22}, ${height} 22,${height} 0, ${height - 22} 0, 22`}/>
            :<div></div>}
                </svg>

                {border.map(borderName => (
                    <svg width="100px" height="100px" key={borderName} className={`${borderName} border`}>
                        <polygon fill={mergedColor[0]} points="6,40 0,50 0,20 20,0 100,0 90,6 26,6 6 ,26 6,40" />
                    </svg>

                     ))}
                
      <div className='slot-content'>{children}</div>
    </div>
    
    </>
  )


})
Rbox1.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    color: PropTypes.array,
    backgroundColor: PropTypes.string
  }
export default Rbox1;
