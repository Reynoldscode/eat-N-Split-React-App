import { useState } from "react";
import initialFriends from "./data.js";
import FriendList from "./Component/FriendList.jsx";
import AddFriendForm from "./Component/AddFriendForm.jsx";
import Button from "./Component/Button.jsx";
import BillForm from "./Component/BillForm.jsx";

export default function App() {
  const [friends, setFriends] = useState(initialFriends);

  const [showAddfriend, setShowAddFriend] = useState(false);

  function handleShowAddfriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendList friends={friends} />
          {showAddfriend && <AddFriendForm onAddFriend={handleAddFriend} />}
          <Button onClick={handleShowAddfriend}>
            {showAddfriend ? "close" : "Add Friend"}
          </Button>
        </div>
        <BillForm />
      </div>
    </>
  );
}
