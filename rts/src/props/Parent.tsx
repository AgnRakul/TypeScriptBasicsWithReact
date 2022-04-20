import { ChildAsFc } from "./Child";

const Parent = () => {
  return (
    <ChildAsFc
      color="THIS IS RED"
      onClick={() => console.log("CLiekd")}
      children={"Hello"}
    ></ChildAsFc>
  );
};

export default Parent;
