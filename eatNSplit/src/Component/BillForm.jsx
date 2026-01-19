import Button from "./Button";
import { useState } from "react";

export default function BillForm({ selectedFriend }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  return (
    <>
      <form className="form-split-bill">
        <h2> split a bill with {selectedFriend.name}</h2>
        <label> 💰Bill Value</label>
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />

        <label>🧍Your Expense</label>
        <input
          type="text"
          value={paidByUser}
          onChange={(e) =>
            setPaidByUser(
              Number(e.target.value) > bill
                ? paidByUser
                : Number(e.target.value),
            )
          }
        />

        <label> 🧑‍🤝‍🧑{selectedFriend.name}'s Expense</label>
        <input type="text" disabled value={paidByFriend} />
        <label>🤑 Who is paying the bill </label>
        <select
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>

        <Button>Split Bill</Button>
      </form>
    </>
  );
}
