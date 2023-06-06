import { CustomTable } from "@/components/custom-table"
import { CustomCard } from "@/components/custom-card"
import { CardWithForm } from "@/components/custom-card2"
import { CustomAlert } from "@/components/custom-alert"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h2>Custom Table</h2>
        <CustomTable />

        <h2>Custom Card</h2>
        <CustomCard />
    
        <h2>Custom Card with form</h2>
        <CardWithForm />

        <h2>Custom Alert</h2>
        <CustomAlert />
      </div>
    </section>
  )
}
