import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, fn, userEvent, within } from "storybook/test"

import { Button } from "@/components/ui/button"
import { ReasonDialog } from "./reason-dialog"

const meta = {
  title: "Patterns/Reason dialog",
  component: ReasonDialog,
  tags: ["autodocs"],
  args: {
    trigger: <Button>ระบุเหตุผล</Button>,
    title: "ระบุเหตุผล",
    description: "โปรดระบุเหตุผลในการดำเนินการ",
    reasonLabel: "เหตุผล",
    confirmLabel: "ยืนยัน",
    onConfirm: fn(),
  },
} satisfies Meta<typeof ReasonDialog>
export default meta
type Story = StoryObj<typeof meta>

export const RequiredReason: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole("button", { name: "ระบุเหตุผล" }))
    const dialog = within(document.body)
    const confirm = dialog.getByRole("button", { name: "ยืนยัน" })
    await expect(confirm).toBeDisabled()
    await userEvent.type(dialog.getByLabelText("เหตุผล"), "  ทดสอบ  ")
    await userEvent.click(confirm)
    await expect(args.onConfirm).toHaveBeenCalledWith("ทดสอบ")
  },
}
