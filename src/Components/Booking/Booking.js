import React from 'react'
import { InlineWidget } from "react-calendly";
const Booking = () => {
    return (
        <div >
              <InlineWidget
              pageSettings={{
                backgroundColor: 'ffffff',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: '00a2ff',
                textColor: '4d5055'
              }}
              url="https://calendly.com/tasrif/book-a-schedule-call" />
        </div>
    )
}

export default Booking