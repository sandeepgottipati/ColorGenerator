import { toast } from "react-toastify";

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;
  const saveToClipBoard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast("color copied to clipboard..");
      } catch (error) {
        toast.error("failed to copy");
      }
    } else {
      toast.error("Clip board access not available...");
    }
  };
  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
      onClick={saveToClipBoard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};
export default SingleColor;
