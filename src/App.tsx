import { defineComponent } from "vue";
import GenericTsx from "./components/GenericTsx";
import GenericVue from "./components/GenericVue.vue";

type T = typeof GenericTsx;

export default defineComponent(() => {
  function update(msg: string) {}
  return () => (
    <>
      <GenericTsx class="" msg={""} onUpdate:msg={update} />
      <GenericVue class="" msg={""} onUpdate:msg={update} />
    </>
  );
});
