export interface WorkData {
  work_order_id: number;
  description: string;
  received_date: string;
  assigned_to: PersonStatus[];
  status: "New" | "Confirmed" | "Completed" | "Canceled";
  priority: "Low" | "Normal" | "High";
}

interface PersonStatus {
  person_name: string;
  status: "Assigned" | "In progress" | "Confirmed" | "Completed";
}
