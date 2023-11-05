import { SetQtyCompParams } from "@/app/typings";

const btStyles = "border-[1.2px] border-slate-300 px-2 rounded";


const SetQuantity: React.FC<SetQtyCompParams> = ({cartCounter, cartProduct, handleQtyIncrease, handleQtyDecrease}) => {
  return (
    <div className="flex gap-8 items-center">
      { cartCounter ? null: <div className="font-semibold">QUATITY:</div> }

      <div className="flex gap-4 items-center text-base">
        <button onClick={handleQtyDecrease} className={btStyles} >-</button>
        <div>{cartProduct.quantity}</div>
        <button onClick={handleQtyIncrease} className={btStyles}>+</button>
      </div>

    </div>



  )
}





export default SetQuantity;
