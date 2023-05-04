import logo from './logo.svg';
import './App.css';

 function App() {
  const apiUrl = 'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP';

  const input = 9975533384;

  function mobileOtp() {
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mobile: input,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {console.log(error)});
  }
  return (
    <div className="otpBtn">
      <input type="number" />
      <button onClick={mobileOtp}>OTP</button>
    </div>
  );
}

export default App;
