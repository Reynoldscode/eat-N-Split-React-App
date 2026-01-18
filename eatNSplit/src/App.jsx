import { useState } from "react";
import FriendList from "./Component/FriendList.jsx";
import AddFriendForm from "./Component/AddFriendForm.jsx";
import Button from "./Component/Button.jsx";
import BillForm from "./Component/BillForm.jsx";
export default function App() {
  const [showAddfriend, setShowAddFriend] = useState(false);

  function handleShowAddfriend() {
    setShowAddFriend((show) => !show);
  }
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendList />
          {showAddfriend && <AddFriendForm />}
          <Button onClick={handleShowAddfriend}>Add Friend</Button>
        </div>
        <BillForm />
      </div>
    </>
  );
}
