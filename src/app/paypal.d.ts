interface PaypalScript {
    Buttons: (options: any) => { render: (target: HTMLElement) => void };
  }
  
  interface Window {
    paypal?: PaypalScript;
  }
  
  
  
  
  
  