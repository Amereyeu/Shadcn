import { CustomTable } from "@/components/custom-table"
import { CustomCard } from "@/components/custom-card"
import { CardWithForm } from "@/components/custom-card2"
import { CustomAlert } from "@/components/custom-alert"
import { BadgeDestructive, BadgeOutline, BadgePrimary, BadgeSecondary } from "@/components/custom-badge"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[780px] flex-col items-start gap-2">
        <h2>Custom Table</h2>
        <CustomTable />

        <h2>Custom Card</h2>
        <CustomCard />
    
        <h2>Custom Card with form</h2>
        <CardWithForm />

        <h2>Custom Alert</h2>
        <CustomAlert />

        <h2>Custom Badge</h2>
        <BadgePrimary />
        <BadgeSecondary />
        <BadgeDestructive />
        <BadgeOutline />
      </div>
    </section>
  )
}
