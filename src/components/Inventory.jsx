import React, { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSnackbar } from "notistack";
import {
  deleteAction,
  getAction,
  postAction,
  putAction,
} from "../axios/AxiosOpration";
import { Link } from "react-router-dom";
const Inventory = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [addProd, setAddProd] = useState(false);
  const [renderControl, setRenderControl] = useState(false);
  const [delProd, setDelProd] = useState(false);
  const [delId, setDelId] = useState("");
  const [addProduct, setAddProduct] = useState({
    name: "",
    qty: "",
  });

  const [qtyUpdateForm, updateQtyUpdateForm] = useState({
    id: null, // Track the id of the item being edited
    vis: false, // Indicates whether the update form is visible
  });
  const [itemQty, updateItemQty] = useState("");

  const handleEditClick = (itemId, upQty) => {
    // When the "edit" button is clicked, show the update form for the selected item
    updateQtyUpdateForm({
      id: itemId,
      vis: true,
    });

    updateItemQty(upQty);
  };

  const handleUpdateClick = async () => {
    if (isNaN(itemQty)) {
      enqueueSnackbar("Qty. Should be a Number", { variant: "warning" });
      return; // Don't proceed with the update
    }
    await putAction({ qty: itemQty }, `/products/${qtyUpdateForm.id}`);
    // Update the local data and reset the update form state
    updateItemQty("");
    updateQtyUpdateForm({
      id: null,
      vis: false,
    });
    setRenderControl(!renderControl);
  };

  const [dummyData, setDummyData] = useState([]);
  useEffect(() => {
    const onLoad = async () => {
      try {
        console.log(`render happen`);
        const response = await getAction(`/products`);
        
        setDummyData(response);
      } catch (error) {
        console.log(error);
      }
    };
    onLoad();
  }, [renderControl]);

  const handleNewProductAdd = async (data) => {
    if (data.name === "") {
      enqueueSnackbar("Name is Required", { variant: "warning" });
      return;
    }
    if (isNaN(itemQty)) {
      enqueueSnackbar("Qty. Should be a Number", { variant: "warning" });
      return; // Don't proceed with the update
    }
    if (data.qty === "") {
      enqueueSnackbar("Qty. is required", { variant: "warning" });
      return;
    }
    const res = await postAction(data, `/products`);
    setRenderControl(!renderControl);
  };
  const handleDeleteProduct = async (data) => {
    await deleteAction(data);
    setRenderControl(!renderControl);
  };

  return (
    <div className="">
      <Link to="/">
        <h3 className="uppercase text-4xl font-sans font-semibold">
          Welcome Admin
        </h3>
      </Link>
      <ul className="text-left p-4">
        <li className="text-2xl font-semibold">
          {addProd ? (
            <div className="w-[200px]">
              <div className="flex flex-col gap-2 my-2">
                <input
                  type="text"
                  className=" outline-none bg-transparent border-b-4 border-black "
                  name="name"
                  placeholder="Name"
                  value={addProduct.name}
                  required
                  onChange={(e) =>
                    setAddProduct({ ...addProduct, name: e.target.value })
                  }
                />
                <input
                  type="text"
                  required
                  className=" outline-none bg-transparent border-b-4 border-black "
                  name="qty"
                  placeholder="QTY"
                  value={addProduct.qty}
                  onChange={(e) =>
                    setAddProduct({ ...addProduct, qty: e.target.value })
                  }
                />
              </div>
              <button
                className="px-[5px] uppercase font-mono bg-slate-400 rounded-lg"
                onClick={() => {
                  handleNewProductAdd(addProduct);
                  setAddProd(!addProd);
                }}
              >
                ok{" "}
              </button>
              <button
                className="px-[5px] uppercase font-mono bg-slate-400 rounded-lg mx-2 "
                onClick={() => {
                  setAddProd(!addProd);
                }}
              >
                {" "}
                Cancle
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setAddProd(!addProd);
              }}
            >
              Add <AddCircleIcon />{" "}
            </button>
          )}
        </li>
        <li className="text-2xl font-semibold">
          {/* delete part */}
          {delProd ? (
            <div className="w-[200px]">
              <div className="flex flex-col gap-2 my-2">
                <input
                  type="text"
                  className=" outline-none bg-transparent border-b-4 border-black "
                  name="name"
                  placeholder="Product Id"
                  value={delId}
                  required
                  onChange={(e) => {
                    console.log(e.target.value);
                    setDelId(e.target.value)
                    }}
                />
              </div>
              <button
                className="px-[5px] uppercase font-mono bg-slate-400 rounded-lg"
                onClick={() => {
                  console.log(delId)
                  handleDeleteProduct(delId);
                  setDelProd(false)
                  setDelId("")
                  setDelProd(!addProd);
                }}
              >
                ok{" "}
              </button>
              <button
                className="px-[5px] uppercase font-mono bg-slate-400 rounded-lg mx-2 "
                onClick={() => {
                  setDelProd(!delProd);
                }}
              >
                {" "}
                Cancle
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setDelProd(!delProd);
              }}
            >
              Delete <DeleteIcon />{" "}
            </button>
          )}
        </li>
      </ul>
      <table className="border  border-black w-full ">
        <tr className="flex justify-between p-2 border  border-black ">
          <th className="uppercase">S.No</th>
          <th className="uppercase">id</th>
          <th className="uppercase">Product Name</th>
          <th className="uppercase">
            Qty. <AddIcon />/<RemoveIcon />{" "}
          </th>
        </tr>

        {dummyData.map((item, inx) => {
          const _id = item._id;
          return (
            <tr
              key={_id}
              className="flex justify-between  border border-1  border-black "
            >
              <td className="border  border-black w-[25%] text-2xl p-2">
                {inx}
              </td>
              <td className="border  border-black w-[25%] text-2xl p-2">
                {_id}
              </td>
              <td className="border  border-black w-[25%] text-2xl p-2">
                {item.name}
              </td>
              {qtyUpdateForm.vis && qtyUpdateForm.id === _id ? (
                <td className="border border-black w-[25%] text-2xl p-2">
                  <input
                    type="text"
                    value={itemQty}
                    onChange={(e) => updateItemQty(e.target.value)}
                  />
                  <button
                    className="px-[5px] uppercase font-mono bg-slate-400 rounded-lg"
                    onClick={handleUpdateClick}
                  >
                    ok
                  </button>
                  <button
                    className="px-[5px] uppercase font-mono bg-slate-400 rounded-lg"
                    onClick={() => {
                      updateQtyUpdateForm({
                        id: null,
                        vis: false,
                      });
                      updateItemQty("");
                    }}
                  >
                    cancel
                  </button>
                </td>
              ) : (
                <td className="border border-black w-[25%] text-2xl p-2">
                  {item.qty}{" "}
                  <button
                    className="px-[5px] uppercase font-mono bg-slate-400 rounded-lg"
                    onClick={() => {
                      // console.log(item.qty)
                      handleEditClick(_id, item.qty);
                    }}
                  >
                    edit
                  </button>
                </td>
              )}
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Inventory;
