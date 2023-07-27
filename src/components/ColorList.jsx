import { nanoid } from "nanoid";
import SingleColor from "./SingleColor";
const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((color, idx) => {
        let id = nanoid();
        console.log(color);
        return <SingleColor color={color} key={id} index={idx} />;
      })}
    </section>
  );
};
export default ColorList;
