import Item from './Item';

const initialItems = [
    { id: 1, description: "passports", quantity: 1, packed: false },
    { id: 1, description: "Camera", quantity: 2, packed: true },
    { id: 1, description: "Bags", quantity: 3, packed: false },
  ];

function PackingList() {
    return (
        <ul className="list">
            {initialItems.map((item) => (
                <Item item={item} key={item.id} />
            ))}
        </ul>
    )
}
export default PackingList