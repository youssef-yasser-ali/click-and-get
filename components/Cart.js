import React from "react";
import { Container, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearCarts, deleteFromCart } from "../store/slices/cartSlice";

function Cart() {
  const carts = useSelector((store) => store.carts);
  const dispach = useDispatch();
  const maxDitals = 200;
  const totalPrice = carts.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  const deleteProduct = (pro) => {
    dispach(deleteFromCart(pro));
  };

  const productRend = carts.map((pro) => {
    return (
      <tr key={pro.id}>
        <td>{pro.id}</td>
        <td>
          <p>{pro.title}</p>
        </td>
        <td style={{ maxWidth: 300 }}>
          {pro.description.length < maxDitals
            ? pro.description
            : pro.description.slice(0, maxDitals) + " ....."}
        </td>
        <td>
          <img src={pro.image} height={120} width={100} alt="" />
        </td>
        <td>
          <p>{pro.price}</p>
        </td>
        <td>
          <p>{pro.quantity}</p>
        </td>
        <td>{pro.price * pro.quantity}</td>
        <td>
          <button
            className="btn btn-danger  btn-sm  mx-2"
            onClick={() => {
              deleteProduct(pro);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <Container>
      <h2 className="py-3">Welcome To Carts</h2>
      <div className="d-flex justify-content-between">
        <Button
          className="my-3"
          variant="warning"
          onClick={() => {
            dispach(clearCarts());
          }}
        >
          Clear all Carts
        </Button>

        <Alert className="d-inline-block" variant="dark">
          total Price = {totalPrice.toFixed(2)} $
        </Alert>
      </div>

      <table className="table board-table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>{productRend}</tbody>
      </table>
    </Container>
  );
}

export default Cart;
