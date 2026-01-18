import { useState } from "react";
import Button from "./Button";

export default function AddFriendForm({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=499476");

  const id = crypto.randomUUID();

  function handlSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;
    const newFriend = { id, name, image: `${image}?=${id}`, balance: 0 };
    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48?u=499476");
  }

  return (
    <>
      <form onSubmit={handlSubmit} className="form-add-friend">
        <label>🧑‍🤝‍🧑Friend Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Button>Add</Button>
      </form>
    </>
  );
}
