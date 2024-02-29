import MenuItem from "./menu-item";

export default function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
    {
        list&&list.length>0?
        list.map((ele)=> ( <MenuItem item={ele} />)):""
    }
    </ul>
  );
}