import { useState } from 'react';

export default function SlideAxisX(props) {

    const [positionSlide, setPositionSlide] = useState(0)
    let offsetX;
    const move = e => {
        if (e.pageX - offsetX > 1065 || e.pageX - offsetX < 0) return
        const el = e.target
        el.style.left = `${e.pageX - offsetX}px`
        setPositionSlide((e.pageX - offsetX) * 100)
        // console.log((e.pageX - offsetX) * 100)
        // el.style.top = `${e.pageY - offsetY}px`
        // console.log(el.style.left)
    }
    const add = e => {
        const el = e.target
        if (e.target.offsetLeft < 73) {
            offsetX = e.clientX - e.target.offsetLeft
        }


        console.log(e.target.offsetLeft)

        // offsetY = e.clientY - el.getBoundingClientRect().top
        el.addEventListener('mousemove', move)
    }
    const remove = e => {
        const el = e.target
        el.removeEventListener('mousemove', move)
    }
    return { add, remove, positionSlide }

    // (
    //     <div className="shopping_content">
    //         <div className="carouselbar_wrapper">
    //             <div className="carouselbar">
    //                 <div className='carouselbar_btn' onMouseDown={add} onMouseUp={remove}></div>
    //             </div>
    //         </div>
    //         <div className="shopping_items" style={{ left: `-${positionSlide}%` }}>

    //         </div>

    //     </div>
    // );
}
