import React, { useState } from 'react';
import swal from 'sweetalert';
import styles from './Timer.module.css';

const Timer = (props) => {

    const [swalAlert, setSwalAlert] = useState(true);

    var date = new Date();
    var timestamp = date.getTime();

    let howTimeLeftMinutes = Math.floor((props.end - timestamp) / 60000);
    let howTimeLeftSecond = Math.floor((props.end - timestamp) / 1000);
    let howTimeLeft;
    let secondLeft;

    let remind = Math.floor(howTimeLeftSecond % 60);

    if (howTimeLeftSecond > 0) {
        howTimeLeft = howTimeLeftMinutes;
        secondLeft = remind;
     } else if (howTimeLeftSecond === 0 && swalAlert === true) {
        swal("The Machine is Done" , "You can now pick up your lanudry", "success", {
            button: "Done",
          })
        setSwalAlert(false);
    } else {
        howTimeLeft = '00';
        secondLeft = '00';
    } 

    return (
        <>
            <div>
                <span className={styles.minutes}>{howTimeLeft}</span><span className={styles.colone}>:</span><span className={styles.seconds} >{secondLeft}</span>
            </div> 
        </>
    );
};

export default Timer;