import { useEffect, useState, useRef } from "react";

function useSticky () {
 const [isSticky, setSticky] = useState(false);
  const element = useRef(null)

  const handleScroll = () => {
    if(!element.current) return
    window.scrollY > element.current.getBoundingClientRect().bottom
    ? setSticky(true)
    : setSticky(false);
  }

    // This function handle the scroll performance issue
    const debounce = (func, wait = 20, immediate = true) => {
      let timeOut;
      return () => {
        let context = this,
          args = arguments;
        const later = () => {
          timeOut = null;
          if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeOut;
        clearTimeout(timeOut);
        timeOut = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };
  
    useEffect(() =>{
      window.scrollTo(0, 0)
    },[])

useEffect(() => {

  window.addEventListener("scroll", debounce(handleScroll))
  if(handleScroll)  window.removeEventListener("scroll", () => handleScroll);
  return () => {
          window.removeEventListener("scroll", () => handleScroll);
        }  
}, [debounce, handleScroll])


  return { isSticky, element }
}

export default useSticky
