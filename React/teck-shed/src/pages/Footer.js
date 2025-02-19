import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Footer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleCategoryClick = (category) => {
        dispatch({ type: "SET_ACTIVE_CATEGORY", payload: category });
        dispatch({ type: "FILTER_PRODUCTS", payload: category });
        navigate(`/products/${category.replace(/\s+/g, "-").toLowerCase()}`);
      };
  return (
    <div>
        <div className='help-center'>
                <div className='help-center-left'>
                  <h4>Need Help? Check Out Our Help Center</h4><br></br>
                  <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p><br></br>
                  <button type='button'>Go to Help Center</button>
                </div>
                <img src='https://static.wixstatic.com/media/c22c23_de5cbbefa9104fc1a1604ea146ea523a~mv2.jpg/v1/fill/w_1033,h_556,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_de5cbbefa9104fc1a1604ea146ea523a~mv2.jpg'/>
            </div>
        <div className='footer-container'>
            <div className='footer'>
              <div>
                <h5>Store Location</h5><br></br>
                <p>500 Terry Francine Street</p>
                <p>San Francisco, CA 94158</p>
                <p>info@mysite.com</p>
                <p>123-456-7890</p>
              </div>
              <div>
                <h5>Shop</h5><br></br>
                  <p><a onClick={() => handleCategoryClick("All")}>Shop All</a></p>
                  <p><a onClick={() => handleCategoryClick("Computers")}>Computers</a></p>
                  <p><a onClick={() => handleCategoryClick("Tablets")}>Tablets</a></p>
                  <p><a onClick={() => handleCategoryClick("Drones & Cameras")}>Drones & Cameras</a></p>
                  <p><a onClick={() => handleCategoryClick("Audio")}>Audio</a></p>
                  <p><a onClick={() => handleCategoryClick("Mobile")}>Mobile</a></p>
                  <p><a onClick={() => handleCategoryClick("T.V & Home Cinema")}>T.V & Home Cinema</a></p>
                  <p><a onClick={() => handleCategoryClick("Wearable Tech")}>Wearable Tech</a></p>
                  <p><a onClick={() => handleCategoryClick("Sale")}>Sale</a></p>
              </div>
              <div>
                <h5>Customer Support</h5><br></br>
                  <p><a>Contact us</a></p>
                  <p><a>Help Center</a></p>
                  <p><a>About Us</a></p>
                  <p><a>Careers</a></p>
              </div>
              <div>
                <h5>Policy</h5><br></br>
                <p><a>Shipping & Returns</a></p>
                <p><a>Terms & Conditions</a></p>
                <p><a>Payment Methods</a></p>
                <p><a>FAQ</a></p>
              </div>
            </div><br></br>
            <div className='footer-links'>
              <p>We accept the following paying methods</p><br></br>
              <div>
                <img src='https://static.wixstatic.com/media/84770f_27001c40036842889a78a72766ad4700~mv2.png/v1/fill/w_69,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Visa.png'></img>
                <img src="https://static.wixstatic.com/media/84770f_70555dcb450a415d80322cb8d7e82a33~mv2.png/v1/fill/w_65,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Diners.png"></img>
                <img src='https://static.wixstatic.com/media/84770f_8445424a46ca49f39359bf19d4a3e537~mv2.png/v1/fill/w_69,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PayPal.png'></img>
                <img src="https://static.wixstatic.com/media/84770f_14f105815c3f47bf9001990706915501~mv2.png/v1/fill/w_69,h_44,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Discover.png"></img>
                <img src='https://static.wixstatic.com/media/c837a6_2bd3e20d1e214eccb5e106fc6d1f535d~mv2.png/v1/fill/w_69,h_36,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/brand-amex%403x.png'></img>
                <img src="https://static.wixstatic.com/media/c837a6_52115f99af28419d95a951f226e32e2b~mv2.png/v1/fill/w_69,h_43,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/brand-chinaunionpay%403x.png"></img>
                <img src='https://static.wixstatic.com/media/84770f_8445424a46ca49f39359bf19d4a3e537~mv2.png/v1/fill/w_69,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PayPal.png'></img>
                <img src="https://static.wixstatic.com/media/84770f_70555dcb450a415d80322cb8d7e82a33~mv2.png/v1/fill/w_65,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Diners.png"></img>
              </div>
            </div>
            </div>
            <div className='footer-last'>© 2035 by TechShed. Powered and secured by <a href='https://www.wix.com/?utm_campaign=vir_created_with'>Wix</a></div>
    </div>
  )
}
