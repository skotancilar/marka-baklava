import React from 'react';
import './BankAccounts.scss'
import CallIcon from '@material-ui/icons/Call';

const BankAccounts = () => {
   return (
      <section className="accounts">
         <div className="container">
            <div className="row">
               <div className="col">
                  <h1  >Banka Hesaplarımız</h1>
                  <table class="minimalistBlack">

                     <thead>
                        <tr>
                           <th>Banka</th>
                           <th>IBAN</th>
                           <th>Hesap Sahibi</th>
                        </tr>
                     </thead>
                     {/* <tfoot>
                        <tr>
                           <td>Akbank</td>
                           <td></td>
                           <td>foot3</td>
                        </tr>
                     </tfoot> */}
                     <tbody>
                        <tr>
                           <td>Akbank</td>
                           <td>TR03 0004 6006 4288 8000 2098 07</td>
                           <td>Mustafa Aydoğan</td>
                        </tr>
                     </tbody>
                  </table>
                  <div className="accounts__button">
                     <button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = `https://api.whatsapp.com/send?phone=905517462326`;
                     }} className="shopier" > <CallIcon /> <h4>EFT ile Ödemeyi Bildir</h4></button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default BankAccounts;
