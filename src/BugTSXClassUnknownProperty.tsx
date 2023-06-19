import { defineComponent } from "vue";
import GenericTsx from "./components/GenericTsx";
import GenericVue from "./components/GenericVue.vue";

export default defineComponent(() => {
  function update(msg: string) {}
  return () => (
    <>
      <GenericTsx class="" msg={""} />
      <GenericVue class="" msg={""} />
    </>
  );
});
