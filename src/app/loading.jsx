import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center gap-4">
        <Spinner size="lg" color="success" />
        <p className="text-gray-600 font-medium">
          Loading...
        </p>
      </div>
    </div>
  );
}