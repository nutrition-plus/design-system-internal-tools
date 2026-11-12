// Pure part of ConflictDialog, kept free of React so it can be unit tested.

type ConflictRow = {
  label: string
  /** The latest saved value (what the other person saved). */
  value: string
  /** The value the user was trying to save. When any row has it, the dialog shows both columns. */
  yours?: string
}

/** True when at least one row carries the user's own value, so the dialog shows a "yours" column. */
function conflictShowsYours(rows: ConflictRow[]): boolean {
  return rows.some((r) => r.yours !== undefined)
}

export { conflictShowsYours }
export type { ConflictRow }
