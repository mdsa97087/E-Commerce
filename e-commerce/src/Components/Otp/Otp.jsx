import React, { useEffect, useRef, useState } from "react";
import "./Otp.css";

const Otp = () => {
  const [otp, newOtp] = useState();
  const [verfied, setVerfied] = useState(false);
  const [otpVal, setOtpVal] = useState([]);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const textBase = useRef(null);

  //    ```       GENERATE OTP   ```
  const getOTP = () => newOtp(Math.floor(1000 + Math.random() * 9000));

  useEffect(() => {
    getOTP();
  }, []);

  // ------------     RESET OTP     ------------

  const resendOTP = () => {
    getOTP();
    setMinutes(1);
    setSeconds(30);
  };

  //    -----------     CLEAR OTP         ------------

  const clearAll = () => {
    textBase.current.classList.remove("otp-error");
    textBase.current.childNodes.forEach((child) => {
      child.value = "";
    });
    setOtpVal([]);
    setVerfied(false);
  };

  //  ---------------   GET OTP     -----------

  const getOtp = () => {
    if (parseInt(otpVal.join("")) === otp) {
      textBase.current.classList.remove("otp-error");
      setVerfied(true);
    } else {
      textBase.current.classList.add("otp-error");
      alert("Enter Correct Otp");
    }
  };

  //    --------------    PUT OTP IN INPUT TAG      ----------

  const focusNext = (e) => {
    const childCount = textBase.current.childElementCount;
    const currentIndex = [...e.target.parentNode.children].indexOf(e.target);
    if (currentIndex !== childCount - 1) {
      e.target.nextSibling.focus();
    }
  };

  //    ------------    SUBMIT OTP    -------------

  const submitbtn = () => {
    const values = [];
    textBase.current.childNodes.forEach((child) => {
      values.push(child.value);
    });
    if (values.length !== 0) {
      setOtpVal(values);
    }
  };

  useEffect(() => {
    if (otpVal.length === textBase.current.childElementCount) {
      getOtp();
    }
  }, [otpVal]);

  //      ----------------    TIMER       ------------

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="otpMainDiv">
      {!verfied ? (
        <>
          <h6>
            Please enter the one time password <br /> to verify your account
          </h6>
          <div>
            <span>A code has been sent to</span> <small>*******1234</small>{" "}
          </div>
          <h1> Enter OTP : {otp}</h1>

          <div className="otp-base" ref={textBase}>
            {new Array(4).fill(null).map((input) => {
              return (
                <input
                  className="inputData"
                  type="text"
                  maxLength="1"
                  placeholder="*"
                  onChange={(e) => focusNext(e)}
                />
              );
            })}
            <button
              className="btn btn-primary"
              type="button"
              onClick={submitbtn}
            >
              SUBMIT
            </button>

            <div className="countdown-text">
              {seconds > 0 || minutes > 0 ? (
                <p>
                  Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                  {seconds < 10 ? `0${seconds}` : seconds}
                </p>
              ) : (
                <>
                  <br />
                  <p>Didn't recieve code?</p>
                </>
              )}

              <button
                style={{
                  marginRight: "20px",
                }}
                className="btn btn-danger"
                disabled={seconds > 0 || minutes > 0}
                onClick={resendOTP}
              >
                Resend OTP
              </button>
              <button
                className={`btn btn-warning ${otpVal.length > 0 && "show"}`}
                onClick={() => clearAll()}
              >
                Clear OTP
              </button>
            </div>
          </div>
        </>
      ) : (
        <> verified</>
      )}
    </div>
  );
};

export default Otp;
