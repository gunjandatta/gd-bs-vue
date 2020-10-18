import { Icons } from "gd-bs";
import { Base } from "./base";
import { Prop } from "vue-property-decorator";

export class Icon extends Base<HTMLOrSVGElement> {
  // Properties
  @Prop(Number) height: number;
  @Prop(Number) type: number;
  @Prop(Number) width: number;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = (props) => {
      // Render the icon
      props.el.appendChild(Icons(props.type, props.height, props.width));
    };
  }
}