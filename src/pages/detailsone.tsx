import { useEffect } from "react";
import api from "@/pages/api";
export default function DetailOne() {
    useEffect(()=>{
        console.log('DetailOne');
        api.test()
    },[])
  return (
    <>
      <div>DetailOne</div>
    </>
  );
}
