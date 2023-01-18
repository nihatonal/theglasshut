import React, { useState, useContext } from 'react';
import moment from "moment";
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
    const [value, onChange] = useState(new Date());
    const [markDates, setMarkDates] = useState(['2023/01/22', '2023/01/25']);

    function expandDates(startDate, stopDate) {
        let dateArray = [];
        let currentDate = moment(startDate);
        let stop_Date = moment(stopDate);
        while (currentDate <= stop_Date) {
            dateArray.push(moment(currentDate).format("YYYY/MM/DD"));
            currentDate = moment(currentDate).add(1, "days");
        }
        return dateArray;
    }

    return (
        <div className='calendar-modal'>
            <Calendar
                onChange={onChange}
                value={value}
                nextLabel={<MdOutlineArrowForwardIos className='calendar-arrow' />}
                prevLabel={<MdOutlineArrowBackIos className='calendar-arrow' />}
                selectRange={true}
                showDoubleView={true}
                showNavigation={true}
                showNeighboringMonth={false}
                showFixedNumberOfWeeks={false}
                allowPartialRange={true}
                tileClassName={({ date, view }) => {
                    if (
                        moment(date).format("YYYY/MM/DD") <
                        moment().format("YYYY/MM/DD")
                    ) {
                        return "passed";
                    } else if (markDates && expandDates(markDates[0], markDates[1]).find((x) => x === moment(date).format("YYYY/MM/DD"))) {
                        return "passed";
                    }
                }}
            // goToRangeStartOnSelect={false}
            />
            <div className="calendar-btns-wrapper">
                <button onClick={() => onChange(null)} className="clear-dates">{sectionData.clear}</button>
                <button onClick={props.close} className="close-calendar">{sectionData.close}</button>
            </div>
        </div>
    );
}

export default BookCalendar;