import { ParentCompProps } from "../../models/parent-comp-props";
import "./Card.scss";

export const Card = (props: ParentCompProps) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};
