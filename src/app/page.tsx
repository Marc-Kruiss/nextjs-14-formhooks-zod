import FormWithReactHookForm from "@/components/form-reacthook";
import FormUseState from "../components/form-usestate";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-row items-center justify-evenly">
        <FormUseState />
        <FormWithReactHookForm />
      </main>
  );
}
