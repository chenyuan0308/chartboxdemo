// const rootFontSize = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('font-size'));

const getRem = (value:number)=>{
    const rootFontSize = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('font-size'));
      return value/16*rootFontSize
    }
    export default getRem
    
    export const getComputedStyle = (value:number)=>{
    const rootFontSize = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('font-size'));
      return value/12.8*rootFontSize
    }
    
    export const getpx = (value:number)=>{
      const rootFontSize = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('font-size'));
        return value*rootFontSize
    }