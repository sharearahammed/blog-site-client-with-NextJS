import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AnalyticsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Button asChild>
        <Link href="/dashboard/analytics/monthly">Monthly</Link>
      </Button>
      <Button asChild>
        <Link href="/dashboard/analytics/weekly">Weekly</Link>
      </Button>

      <div>{children}</div>
    </div>
  );
}
