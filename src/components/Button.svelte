<style type="text/scss">
  button { 
    background-color: #c59747; 
    border: none;    
    color: white; 
    padding: 10px 16px; 
    text-align: center; 
    text-decoration: none; 
    display: inline-block; 
    font-size: 18px;
    letter-spacing: 2.4px;    
    width: 175px; 
    margin-top: 10px;

    &:hover,
    &:active { 
      background-color: #000000;  
      color: #ffffff;  
      box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.26);  
    }
  }
</style>

<button on:click>
  <slot />
</button>