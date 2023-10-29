import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { Stack, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
type CartItemProps = {
  id: number;
  quantity: number;
};

export const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const items = storeItems.find((i) => i.id === id);
  if (items === null) return null;

  return (
    <>
      <Stack
        direction="horizontal"
        gap={2}
        className="d-flex align-items-center"
      >
        <img
          src={items?.imgUrl}
          style={{ width: "125px", height: "75px", objectFit: "cover" }}
        />
        <div className="me-auto">
          <div>
            {items?.name}
            {""}
            {quantity > 1 && (
              <span className="text-muted ms-2" style={{ fontSize: ".65rem" }}>
                {quantity}x
              </span>
            )}
          </div>
          <div className="text-muted" style={{ fontSize: ".75rem" }}>
            {formatCurrency(items?.price || 0)}
          </div>
        </div>
        <div> {formatCurrency((items?.price || 0) * quantity)}</div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeFromCart(id)}
        >
          &times;
        </Button>
      </Stack>
    </>
  );
};
