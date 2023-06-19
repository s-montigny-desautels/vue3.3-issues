import { defineComponent } from "vue";
import GenericTsx from "./components/GenericTsx";
import GenericVue from "./components/GenericVue.vue";

export default defineComponent(() => {
  function update(msg: string) {}
  return () => (
    <>
      {/* Class is not present in props typing */}
      <GenericTsx class="" msg={""} />
      <GenericVue class="" msg={""} />
    </>
  );
});
