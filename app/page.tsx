import { Toaster } from "@/components/ui/toaster"
import { CustomAlert } from "@/components/custom-alert"
import {
  BadgeDestructive,
  BadgeOutline,
  BadgePrimary,
  BadgeSecondary,
} from "@/components/custom-badge"
import { CustomCard } from "@/components/custom-card"
import { CardWithForm } from "@/components/custom-card2"
import { CustomTable } from "@/components/custom-table"
import { ToastWithTitle } from "@/components/custom-toast"

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

        <h2>Custom Badges</h2>
        <BadgePrimary />
        <BadgeSecondary />
        <BadgeDestructive />
        <BadgeOutline />

        <h2>Custom Toast</h2>
        <ToastWithTitle />
      </div>
      <Toaster />
    </section>
  )
}
