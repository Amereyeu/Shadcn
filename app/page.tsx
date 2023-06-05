import { CustomTable } from "@/components/custom-table"
import { CustomCard } from "@/components/custom-card"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h2>Custom Table</h2>
        <CustomTable />

        <h2>Custom Card</h2>
        <CustomCard />
      </div>
    </section>
  )
}
