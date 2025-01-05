import { User2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Breadcrumb from "./custom/Breadcrumb";
import { SidebarTrigger } from "./ui/sidebar";
export function DashboardHeader() {
  return (
    <header className="flex flex-col space-y-2 border-b px-4 py-3 bg-sidebar ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SidebarTrigger />

          <div className="h-6 border-l border-muted-foreground mx-2" />
          <Breadcrumb />
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="rounded-full">
            <User2Icon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
