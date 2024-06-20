import FormWithReactHookForm from "@/components/form-reacthook";
import FormUseState from "../components/form-usestate";
import FormWithReactHookFormWithZod from "@/components/form-reacthook-zod";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-evenly">
      <FormUseState />
      <FormWithReactHookForm />
      <FormWithReactHookFormWithZod />
    </main>
  );
}
