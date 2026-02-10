import './Macbanner.css'
import apple from '../../assets/cutebanner.png' 

const MacBanner = () => {
  return (
    <div className="mac_banner">
      <div className="mac_left">
        <img className="mac_logo" src={apple} alt="apple" />
<p></p>
        <h2>Apple MacBook<br />Air M1 256GB 2023</h2>

        <ul>
          <li>24 months warranty</li>
          <li>Interest installment payment</li>
          <li>100% original seal</li>
        </ul>
      </div>

      <div className="mac_right">
        <p className="old_price">$755.00</p>
        <p className="credit">10% off when paying<br />by credit card</p>
        <button>Shop Now</button>
      </div>
    </div>
  )
}

export default MacBanner
