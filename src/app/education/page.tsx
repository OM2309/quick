import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="h-full bg-sidebar">
      <div className="flex justify-end m-4">
        <Button>
          <ChevronRight /> Add Education
        </Button>
      </div>
    </div>
  );
};

export default page;
