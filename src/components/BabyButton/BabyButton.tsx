import { MouseEventHandler } from "react";

interface IBabyButton {
  text: string;
  onClick : MouseEventHandler;
}

function BabyButton(props: IBabyButton){
  return (
    <button 
      onClick={props.onClick}
      className="w-full bg-purple-500 hover:bg-purple-two focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-card" type="button">
      {props.text}
    </button>
  )

}

export default BabyButton