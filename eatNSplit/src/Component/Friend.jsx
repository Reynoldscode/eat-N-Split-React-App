export default function Friend({ friend }) {
  return (
    <>
      <ul>
        <li>
          <img src={friend.image} alt={friend.name} />
          <h3>{friend.name} </h3>
          {friend.balance < 0 && (
            <p className="red">
              You owe ${friend.name}
              {Math.abs(friend.balance)}
            </p>
          )}

          {friend.balance > 0 && (
            <p className="green">
              your friend owes you ${friend.name}
              {Math.abs(friend.balance)}
            </p>
          )}

          {friend.balance === 0 && (
            <p>
              You and you friend are even ${friend.name}
              {Math.abs(friend.balance)}
            </p>
          )}
          <button className="button">Select</button>
        </li>
      </ul>
    </>
  );
}
