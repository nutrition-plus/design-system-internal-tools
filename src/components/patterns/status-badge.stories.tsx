import type { Meta, StoryObj } from "@storybook/react-vite"

import { BlockerBadge } from "./blocker-badge"
import { PhoneText } from "./phone-text"
import { StatusBadge } from "./status-badge"

const meta = {
  title: "Patterns/Status and contact",
  component: StatusBadge,
  tags: ["autodocs"],
} satisfies Meta<typeof StatusBadge>
export default meta
type Story = StoryObj<typeof meta>

export const Examples: Story = {
  args: { children: "รอตรวจสอบ" },
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <StatusBadge variant="warning">รอตรวจสอบ</StatusBadge>
      <StatusBadge variant="success">เสร็จแล้ว</StatusBadge>
      <BlockerBadge>ข้อมูลไม่ครบ</BlockerBadge>
      <PhoneText>08X-XXX-1234</PhoneText>
    </div>
  ),
}
