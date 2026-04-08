import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
//import '../data/cart-class.js';
// import '../data/backend-practice.js';
import { loadProducts, loadProductsFetch} from '../data/products.js';
import { loadCartFetch } from '../data/cart.js';

async function loadPage(){
  try {

   //throw 'error 1'
   await Promise.all(
    [
      loadProductsFetch(),
      loadCartFetch()
    ]);
  }
  catch(error){
     console.log('Unexpected error. Please try again later');
  } 
  
   renderOrderSummary();
   renderPaymentSummary();
}

loadPage();
//practice promises
 
/*
Promise.all([
 loadProductsFetch(), 
  new Promise((resolve)=>{
    loadCart(()=>{
      resolve('value2');
    });
  })

]).then((value)=>{
    console.log(value);
    renderOrderSummary();
    renderPaymentSummary();
});

/*
new Promise((resolve)=>{
   
    loadProducts(()=>{
    resolve('value1');
  });

}).then((value)=>{
  console.log(value);

  return new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });

  }).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/ 

/*
loadProducts(()=>{
//anonymous function (function without a name)
  loadCart(()=>{
    renderOrderSummary();
    renderPaymentSummary();
  });
  
});
*/


