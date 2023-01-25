import React, { useState, useContext, useEffect } from 'react';
import moment from "moment";
import "moment/locale/ru";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CartContext } from "../../shared/context/CartContext";
import { LanguageContext } from "../../shared/context/Language";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import './BookCalendar.css';

function BookCalendar(props) {
    const cart = useContext(CartContext);
    const lang = useContext(LanguageContext);
    const sectionData = lang.dictionary["booking_words"][0];
    const [value, onChange] = useState();
    const [error, setError] = useState(false);
    const [markDates, setMarkDates] = useState(['2023/02/23', '2023/02/24', '2023/02/25', '2023/02/26']);

    function expandDates(startDate, stopDate) {
        let dateArray = [];
        let currentDate = moment(new Date(startDate));
        let stop_Date = moment(new Date(stopDate));
        while (currentDate <= stop_Date) {
            dateArray.push(moment(new Date(currentDate)).format("YYYY/MM/DD"));
            currentDate = moment(new Date(currentDate)).add(1, "days");
        }
        return dateArray;
    }
    let checker = (src, target) => target.some((v) => src.includes(v));

    useEffect(() => {
        if (!value) return
        let selectedRange = expandDates(moment(new Date(value[0])).format("YYYY/MM/DD"), moment(new Date(value[1])).format("YYYY/MM/DD"))
        if (checker(selectedRange, markDates)) {
            setError(true)
        }
        else (
            cart.setDates(selectedRange)
        )
    }, [value, markDates]);

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    return (
        <div className='calendar-modal' style={props.style}>
            <div className="calendar-modal-wrapper">
                <Calendar
                    onChange={onChange}
                    value={value}
                    locale={props.lang}
                    nextLabel={<MdOutlineArrowForwardIos className='calendar-arrow' />}
                    prevLabel={<MdOutlineArrowBackIos className='calendar-arrow' />}
                    selectRange={true}
                    showDoubleView={windowSize.innerWidth > 768 ? true : false}
                    showNavigation={true}
                    showNeighboringMonth={false}
                    showFixedNumberOfWeeks={false}
                    allowPartialRange={false}
                    tileClassName={({ date, view }) => {
                        if (
                            moment(date).format("YYYY/MM/DD") <
                            moment().format("YYYY/MM/DD")
                        ) {
                            return "passed";
                        } else if (markDates && markDates.find((x) => x === moment(date).format("YYYY/MM/DD"))) {
                            return "passed";
                        }
                    }}
                    tileDisabled={({ activeStartDate, date, view }) => markDates && expandDates(markDates[0], markDates[1]).find((x) => x === moment(date).format("YYYY/MM/DD"))}

                />
                <div className="calendar-btns-wrapper">
                    <button onClick={() => onChange(null)} className="clear-dates">{sectionData.clear}</button>
                    <button onClick={props.close} className="close-calendar">{sectionData.close}</button>
                </div>
                <div className="error_modal"
                    style={error ? { display: "flex" } : null}
                    onClick={() => setError(false)}
                >
                    <p>{sectionData.error_dates}</p>
                </div>
            </div>
        </div>
    );
}

export default BookCalendar;