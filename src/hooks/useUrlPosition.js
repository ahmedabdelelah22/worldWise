import { useSearchParams } from "react-router-dom";

export function useUrlPosition (){
const [searchParams ] =useSearchParams();
  const Lng = searchParams.get("lng")
  const Lat = searchParams.get("lat")
  return [Lat,Lng]
}