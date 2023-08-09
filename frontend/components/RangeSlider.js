import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'ion-rangeslider/css/ion.rangeSlider.scss'; 

const RangeSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    // Load the ion.rangeSlider once the component mounts
    if (sliderRef.current) {
      import('ion-rangeslider/js/ion.rangeSlider.min.js').then(() => {
        // Initialize the range slider once the script is loaded
        $(sliderRef.current).ionRangeSlider({
          skin: 'big',
          min: 0,
          max: 10000,
          from: 3130,
          onChange: function (data) {
            console.log(data.from, data.from_percent);
          },
        });
      });
    }
  }, []);

  return <input type="text" ref={sliderRef} />;
};

export default RangeSlider;