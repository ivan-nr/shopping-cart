import {
  decrementQuantity,
  incrementQuantity,
  moveToWishlist,
  removeItem,
} from "@/features/cart/cartSlice";
import { Heart, Minus, Plus, Trash } from "lucide-react";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";

interface CartItemProps {
  id: number;
  name: string;
  category: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
}

const CartItem: React.FC<CartItemProps> = (item) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 md:gap-4 py-4 border-b">
      <img
        src={item.image}
        alt={item.name}
        width={100}
        height={100}
        className="object-cover rounded-md"
      />
      <div className="flex-1">
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-sm text-muted-foreground">{item.category}</p>
        <p className="text-sm text-muted-foreground">{item.size}</p>
        <div className="flex gap-0 md:gap-4 mt-2">
          <Button
            variant="ghost"
            onClick={() => dispatch(removeItem(item.id))}
            className="hover:text-red-600"
          >
            <Trash className="w-3 h-3" />
            <span className="hidden md:inline">REMOVE ITEM</span>
          </Button>
          <Button
            variant="ghost"
            onClick={() => dispatch(moveToWishlist(item.id))}
            className="hover:text-blue-600"
          >
            <Heart className="w-3 h-3" />
            <span className="hidden md:inline">MOVE TO WISH LIST</span>
          </Button>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-around items-center md:items-end">
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            onClick={() => dispatch(decrementQuantity(item.id))}
            className="w-8 h-8 flex items-center justify-center border rounded-md"
          >
            <Minus className="w-4 h-4" />
          </Button>
          <span className="w-8 text-center">{item.quantity}</span>
          <Button
            variant="outline"
            onClick={() => dispatch(incrementQuantity(item.id))}
            className="w-8 h-8 flex items-center justify-center border rounded-md"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex items-center">
          <span className="font-medium">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
