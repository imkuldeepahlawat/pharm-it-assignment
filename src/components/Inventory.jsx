import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import dummyData from "./data";
import { useSnackbar } from "notistack";
const Inventory = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [addProduct, updateAddProduct] = useState({
    name: "",
    qty: "",
  });
  const [deleteProduct, updateDeleteProduct] = useState({
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

  const handleUpdateClick = () => {
    if (isNaN(itemQty)) {
      // Display an error message or take appropriate action
      enqueueSnackbar("Qty. Should be a Number", { variant: "warning" });
      return; // Don't proceed with the update
    }
    const updatedData = dummyData.map((item) =>
      item.id === qtyUpdateForm.id ? { ...item, qty: itemQty } : item
    );
    // Update the local data and reset the update form state
    // dummyData = updatedData;
    updateQtyUpdateForm({
      id: null,
      vis: false,
    });
  };
  return (
    <div className="w-full h-full bg-[#99f6e4]">
      <h3 className="uppercase text-4xl font-sans font-semibold">
        Welcome Admin
      </h3>
      <ul className="text-left p-4">
        <li className="text-2xl font-semibold">
          <button>
            Add <AddCircleIcon />{" "}
          </button>
        </li>
        <li className="text-2xl font-semibold">
          <button>
            Delete
            <DeleteIcon />
          </button>
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
          const _id = item.id;
          return (
            <tr className="flex justify-between  border border-1  border-black ">
              <td className="border  border-black w-[25%] text-2xl p-2">
                {inx}
              </td>
              <td className="border  border-black w-[25%] text-2xl p-2">
                {_id}
              </td>
              <td className="border  border-black w-[25%] text-2xl p-2">
                {item.name}
              </td>
              {qtyUpdateForm.vis && qtyUpdateForm.id === item.id ? (
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
                      handleEditClick(item.id, item.qty);
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
