import { useState } from "react";
import initialFriends from "./data.js";
import FriendList from "./Component/FriendList.jsx";
import AddFriendForm from "./Component/AddFriendForm.jsx";
import Button from "./Component/Button.jsx";
import BillForm from "./Component/BillForm.jsx";

export default function App() {
  const [friends, setFriends] = useState(initialFriends);

  const [showAddfriend, setShowAddFriend] = useState(false);

  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddfriend() {
    setShowAddFriend((show) => !show);
  }

  function handleSelect(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleAddFriend(friend) {
    setFriends((prev) => [...prev, friend]);
    setShowAddFriend(false);
  }
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendList
            friends={friends}
            selectedFriend={selectedFriend}
            onSelection={handleSelect}
          />

          {showAddfriend && <AddFriendForm onAddFriend={handleAddFriend} />}

          <Button onClick={handleShowAddfriend}>
            {showAddfriend ? "close" : "Add Friend"}
          </Button>
        </div>
        {selectedFriend && <BillForm selectedFriend={selectedFriend} />}
      </div>
    </>
  );
}
