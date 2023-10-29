import { Card, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    removeFromCart,
    decreaseCartQuantity,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          alt={imgUrl}
          src={imgUrl}
          height="200px"
          style={{
            objectFit: "cover",
          }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-2">{name}</span>
            <span className="ms-2 text-muted">{formatCurrency(price)}</span>
          </Card.Title>
          <div className="mt-auto">
            {quantity === 0 ? (
              <Button
                onClick={() => increaseCartQuantity(id)}
                className="w-100 bg-success border border-warning font-arial"
              >
                Add To Cart
              </Button>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: ".5rem" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: ".5rem" }}
                >
                  <Button
                    onClick={() => increaseCartQuantity(id)}
                    className="bg-success border-success"
                  >
                    +
                  </Button>
                  <div>
                    <span className="fs-3">{quantity}</span>in cart
                  </div>
                  <Button
                    onClick={() => decreaseCartQuantity(id)}
                    className="bg-danger border-danger"
                  >
                    -
                  </Button>
                </div>
                <Button
                  onClick={() => removeFromCart(id)}
                  size="sm"
                  className="bg-danger border-danger"
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
