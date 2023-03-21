import { useState, useCallback, useEffect, useRef, useImperativeHandle } from 'react'
import { debounce, observerDomResize } from './util'


export default function useAutoResize (ref) {
    const [state, setState] = useState(1)

    const domRef = useRef(null)

    const setWH = useCallback(() => {

        const { clientWidth, clientHeight } = domRef.current || { clientWidth: 0, clientHeight: 0 }

        setState({ width: clientWidth, height: clientHeight })

        // if (!domRef.current) {
        //     console.warn('DataV: Failed to get dom node, component rendering may be abnormal!')
        // } else if (!clientWidth || !clientHeight) {
        //     console.warn('DataV: Component width or height is 0px, rendering abnormality may occur!')
        // }
    }, [])

    useImperativeHandle(ref, () => ({ setWH }), [])


    // let timeOutToInterval = (fn) => {
    //     let num = 10
    //     let interv = function () {
    //         num = num - 1
    //         console.log(num)
    //         if (num < 0) {
    //             clearTimeout(interv)
    //             interv = null
    //         }
    //         const { clientWidth, clientHeight } = domRef.current || { clientWidth: 0, clientHeight: 0 }

    //         setState({ width: clientWidth, height: clientHeight })
    //         setTimeout(interv, 800)

    //     }

    //     setTimeout(interv, 600)


    // }


    let timeOutToInterval = () => {
        let num = 10
        let interv = function () {
            console.log('wxb初加载')
            num = num - 1
            const { clientWidth, clientHeight } = domRef.current || { clientWidth: 0, clientHeight: 0 }
            if (clientWidth || clientHeight || num < 0) {
                setState({ width: clientWidth, height: clientHeight })
                clearTimeout(interv)
                interv = null
                return
            }
            setTimeout(interv, 500)
        }
        setTimeout(interv, 500)
    }

    useEffect(() => {
        const debounceSetWHFun = debounce(setWH, 100)

        debounceSetWHFun()
        timeOutToInterval()

        const domObserver = observerDomResize(domRef.current, debounceSetWHFun)

        window.addEventListener('resize', debounceSetWHFun)

        return () => {
            window.removeEventListener('resize', debounceSetWHFun)

            if (!domObserver) {
                return
            }

            domObserver.disconnect()
            domObserver.takeRecords()
        }
    }, [])

    return { ...state, domRef, setWH }
}
