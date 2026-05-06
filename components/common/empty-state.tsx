import { LucideIcons } from "lucide-react";

export default function EmpltyState({
  message,
  icon: Icon,
}: { message: string;
     icon: LucideIcons }) {
  return (
    <div className="empty-state flex flex-col items-center justify-center h-full border-2 border-dashed border-gray-300 rounded-lg p-8">
      <Icon className="size-12 text-muted-foreground mb-4" />
      {/* <h2 className="text-2xl font-semibold mb-4">No Data Available</h2> */}
      <p className="text-gray-600 text-lg">{message}</p>
    </div>
  )
}