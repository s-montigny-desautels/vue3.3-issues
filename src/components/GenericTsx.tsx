import { defineComponent, type SetupContext } from "vue";

export default defineComponent(
  <T,>(props: { msg: T; "onUpdate:msg"?: (msg: T) => void }) => {
    return () => <div></div>;
  }
);
