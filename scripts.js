const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = Math.floor(dividend / divider);
  
  /*
   *  this section will look to see if any of the input values are empty and if it is
   * it will act accordinly by stopping the calculation
   * 
   */
  if (dividend === '' || divider === '') {
   try {
    throw new Error('no inputs');
   } catch (error) {
    result .innerText ='Division not performed. Both values are required in inputs. Try again'
   }
   
    
  }
  /*
   *  this section will look to see if any of the input values are less than 0 and if it is
   * it will act accordinly by  stopping the calculation and output an error in the
   * console
   * 
   */
  if (dividend < 0 || divider < 0) {
    try {
      throw new Error('the number you have provided is invalid');
    } catch (error) {
      result .innerText ='Division not performed. Invalid number provided. Try again'
      console.error(error)
    }
    
    
   }
   /*
   *  this section will look to see if any of the input values are NaN and if it is
   * it will act accordinly by clearing the page  to display a message and output an error in the
   * console
   * 
   */
   if (isNaN(dividend) || isNaN(divider)){
    document.body.style.fontSize = '25px'
    document.body.innerHTML = 'Something critical went wrong. Please reload the page'
    throw new Error('the input value  inputs result into a NAN ');
   }
  
});