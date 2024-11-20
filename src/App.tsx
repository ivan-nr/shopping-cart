import { useSelector } from "react-redux";
import { Card } from "./components/ui/card";
import { RootState } from "./app/store";
import CartItem from "./components/cart-item";
import CartSummary from "./components/cart-summary";

function App() {
  const items = useSelector((state: RootState) => state.cart.items);

  return (
    <>
      <main className="max-w-6xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">Shopping cart</h1>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="p-2 md:p-4">
              <h2 className="font-medium mb-4">Cart ({items.length} items)</h2>
              {items.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </Card>
          </div>
          <div>
            <CartSummary />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
