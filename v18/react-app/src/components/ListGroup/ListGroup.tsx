import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;
interface ListItemProps {
  active: boolean;
}
const ListItem = styled.li<ListItemProps>`
  padding: 1rem 2rem;
  font-size: 1.5rem;
  background: ${(props) => (props.active ? "#00a2ff" : "none")};
`;
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            active={index === selectedIndex}
            key={item}
          >
            {item}
          </ListItem>
        ))}
      </List>
      ;
    </>
  );
}

export default ListGroup;

{
  /* <ul className={[styles.listGroup, styles.container].join(" ")}> 
{items.map((item, index) => (
  <li
    onClick={() => {
      setSelectedIndex(index);
      onSelectItem(item);
    }}
    className={
      selectedIndex === index
        ? "list-group-item active"
        : "list-group-item"
    }
    key={item}
  >
    {item}
  </li>
))}
</ul> */
}
