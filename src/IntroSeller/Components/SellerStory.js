
import React from 'react';

class SellerStory extends React.Component {
 
  
  render() {
      
    return <div className='wrapper-content4'>
        <div class='block'>
        <div className='header-ct4'>
            <h2 className='capitalize'>Seller stories</h2>
            <p>
            Spend less time managing your shop and more time on the fun stuff. We have tools to help you whether you're just getting started or about to make your ten-thousandth sale.</p>
        </div>

        <div className='main-ct4'>
            <div className='content-ct4'>
                <div className="sellerImg"> <img className='seller' src='./Images/erin.png' alt='author'/></div>
                <div className='seller-content'>
                   <div className="imgNgoac"> <img className='ngoac' src='./Images/QuotationMark.png' alt='Quotation'></img></div>
                    <div className="pseller"><p> Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
                    <p>Erin from <a href=''>Yellow House Handmade</a></p></div>
                </div>
            </div>

            <div class='content-ct4'>
                <div className='seller-content'>
                  <div className="imgNgoac"> <img className='ngoac' src='./Images/QuotationMark.png' alt='Quotation'></img></div> 
                  <div className="pseller"> <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.  </p>
                    <p>Carol from <a href=''>Violette Field Threads</a></p></div> 
                </div>
                <div className="sellerImg"> <img className='seller' src='./Images/carol.png' alt='someImg'/></div>
            </div>
        </div>
        </div>
    </div>
  }
}
export default SellerStory;
