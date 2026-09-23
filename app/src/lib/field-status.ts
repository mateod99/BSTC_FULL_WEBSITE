/* ============================================================
   BSTC FIELD STATUS - EDIT THIS FILE TO UPDATE THE SITE
   ============================================================
   1. status: "open" | "cancelled" | "delayed"
   2. message: what parents should read.
   3. updated: date/time so parents trust it.
   Save, then redeploy the site. The strip at the top of every
   page updates automatically (green / red / yellow).
   ============================================================ */
export type FieldStatusValue = "open" | "cancelled" | "delayed";

export const FIELD_STATUS: {
  status: FieldStatusValue;
  message: string;
  updated: string;
} = {
  status: "open",
  message: "All fields are open. Practice is ON as scheduled today.",
  updated: "Wednesday, Sep 3 - 3:00 PM",
};

export const FIELD_STATUS_LABEL: Record<FieldStatusValue, string> = {
  open: "Fields Open - Practice ON",
  cancelled: "Practice CANCELLED",
  delayed: "Practice Delayed - Check Back",
};
