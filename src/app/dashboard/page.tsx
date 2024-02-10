import { Metadata } from "next"
import Image from "next/image"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

const metadata: Metadata = {
    title: "Dashboard",
    description: "Dashboard page for the budget manager.",
    }

export default function DashboardPage() {
    return (
        <>
            <div className="md:hidden">
                <Image
                    src="/examples/dashboard-light.png"
                    width={1280}
                    height={843}
                    alt="Dashboard"
                    className="block dark:hidden"
                />
                <Image
                    src="/examples/dashboard-dark.png"
                    width={1280}
                    height={843}
                    alt="Dashboard"
                    className="hidden dark:block"
                />
            </div>
            <div className="container relative hidden h-[100] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-1 lg:px-0">
                <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
                    <div className="absolute inset-0 bg-zinc-900" />
                    <div className="relative z-20 flex items-center text-lg font-medium">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2 h-6 w-6"
                        >
                            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                        </svg>
                        Acme Inc
                    </div>
                </div>
            </div>
            <div className="container relative hidden h-[100] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-1 lg:px-0">
                <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
                <div className="relative z-20 mt-auto">
                        <h2 className="text-4xl font-semibold">Dashboard</h2>
                        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                            Welcome to the dashboard. Here you can manage your budget.
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}