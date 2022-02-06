import { darkBlueColor } from "../../constants/color";
import { fontSizeParagraphDesktop } from "../../constants/fontSize";
import { lineHeightParagraph } from "../../constants/lineHeight";

export default function Paragraph({
  content = "",
  color = { darkBlueColor },
  size = fontSizeParagraphDesktop,
  lineHeight = lineHeightParagraph,
  align = "left",
}) {
  return (
    <div
      style={{
        color,
        fontSize: `${size}px`,
        lineHeight: `${lineHeight}px`,
        textAlign: align,
      }}
    >
      {content}
    </div>
  );
}
