import { notFound } from "next/navigation";
import { venezuelaStates } from "@/lib/data";
import { StateDetail } from "@/components/StateDetail";

export function generateStaticParams() {
  return venezuelaStates.map((state) => ({
    id: state.id,
  }));
}

export default async function EstadoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const state = venezuelaStates.find((s) => s.id === id);
  if (!state) notFound();

  return <StateDetail state={state} />;
}