"use client"

import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"

interface RegisterButtonProps {
	title?: string
	registrationLink: string
}

export function RegisterButton({ title = "Event", registrationLink }: RegisterButtonProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="bg-violet-700 hover:bg-violet-800 dark:bg-violet-600 dark:hover:bg-violet-700 text-white shadow-lg hover:shadow-violet-300/50 dark:hover:shadow-violet-900/50 transition-all duration-300">
					Register
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[900px] w-[95vw] h-[95vh] max-h-[95vh] p-0 flex flex-col">
				<DialogHeader className="p-6 bg-gradient-to-r from-violet-700 to-purple-700 dark:from-violet-800 dark:to-purple-800 text-white">
					<DialogTitle>Register for {title}</DialogTitle>
				</DialogHeader>
				<div className="flex-grow overflow-hidden">
					<iframe
						src={registrationLink}
						className="w-full h-full border-none"
						title={`Registration form for ${title}`}
					>
						Loading...
					</iframe>
				</div>
			</DialogContent>
		</Dialog>
	)
}