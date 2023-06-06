import { Terminal, Waves } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function CustomAlert() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Watch out!</AlertTitle>
      <AlertDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
        assumenda libero, nostrum eligendi tenetur voluptatum harum nulla sunt
        atque quod, cumque a quos enim rem, similique ratione quia quibusdam
        commodi!
      </AlertDescription>
    </Alert>
  )
}
