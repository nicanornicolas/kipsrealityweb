import React from "react";
import { CheckCircle, XCircle, Clock, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

interface ProgressIndicatorProps {
  total: number;
  completed: number;
  failed: number;
  inProgress: boolean;
  className?: string;
}

export function ProgressIndicator({
  total,
  completed,
  failed,
  inProgress,
  className
}: ProgressIndicatorProps) {
  const pending = total - completed - failed;
  const progress = total > 0 ? ((completed + failed) / total) * 100 : 0;

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">
          {inProgress ? "Processing..." : "Complete"}
        </span>
        <span className="text-gray-600">
          {completed + failed} of {total}
        </span>
      </div>
      
      <Progress value={progress} className="h-2" />
      
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-green-600">
            <CheckCircle className="w-3 h-3" />
            <span>{completed} completed</span>
          </div>
          
          {failed > 0 && (
            <div className="flex items-center gap-1 text-red-600">
              <XCircle className="w-3 h-3" />
              <span>{failed} failed</span>
            </div>
          )}
          
          {pending > 0 && (
            <div className="flex items-center gap-1 text-gray-500">
              <Clock className="w-3 h-3" />
              <span>{pending} pending</span>
            </div>
          )}
        </div>
        
        {inProgress && (
          <div className="flex items-center gap-1 text-blue-600">
            <div className="w-3 h-3 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
            <span>In progress</span>
          </div>
        )}
      </div>
    </div>
  );
}

interface BulkOperationStatusProps {
  operations: Array<{
    id: string;
    name: string;
    status: "pending" | "in-progress" | "completed" | "failed";
    error?: string;
  }>;
  className?: string;
}

export function BulkOperationStatus({ operations, className }: BulkOperationStatusProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "failed":
        return <XCircle className="w-4 h-4 text-red-600" />;
      case "in-progress":
        return <div className="w-4 h-4 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600";
      case "failed":
        return "text-red-600";
      case "in-progress":
        return "text-blue-600";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className={cn("space-y-2", className)}>
      {operations.map((operation) => (
        <div key={operation.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
          <div className="flex items-center gap-2">
            {getStatusIcon(operation.status)}
            <span className="text-sm font-medium">{operation.name}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className={cn("text-xs capitalize", getStatusColor(operation.status))}>
              {operation.status.replace("-", " ")}
            </span>
            
            {operation.error && (
              <div className="group relative">
                <AlertCircle className="w-4 h-4 text-red-500 cursor-help" />
                <div className="absolute right-0 bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10">
                  {operation.error}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}