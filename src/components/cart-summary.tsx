import { useSelector } from "react-redux";
import { Card } from "./ui/card";
import { RootState } from "@/app/store";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const CartSummary = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const temporaryAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 0;
  const total = temporaryAmount + shipping;

  return (
    <Card className="p-4">
      <h2 className="font-medium mb-4">The total amount of</h2>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Temporary amount</span>
          <span>${temporaryAmount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping</span>
          <span>Gratis</span>
        </div>
        <div className="flex justify-between font-medium pt-2 border-t">
          <span>
            The total amount of
            <br />
            (including VAT)
          </span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
        GO TO CHECKOUT
      </Button>
      <Select>
        <SelectTrigger className="mt-4">
          <SelectValue placeholder="Add a discount code (optional)" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="summer">SUMMER</SelectItem>
          <SelectItem value="winter">WINTER</SelectItem>
        </SelectContent>
      </Select>
    </Card>
  );
};

export default CartSummary;
