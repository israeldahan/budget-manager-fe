"use client"

import * as React from "react"
import { useContext } from "react"

import UserContext from "@/components/UserContext"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface RegisterFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function RegisterForm({ className, ...props }: RegisterFormProps) {
  const { user, setUser } = useContext(UserContext)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = {
      firstName: formData.get("firstname"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
      password: formData.get("password"),
      address: formData.get("address"),
      phone: formData.get("phone"),
    }
    fetch("http://localhost:3000/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data)
        setUser(data)
      })
      .catch((error) => {
        console.error("Error:", error)
      })

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="firstname"
              name="firstname"
              placeholder="Israel"
              type="text"
              autoCapitalize="true"
              autoComplete="firstname"
              autoCorrect="off"
              disabled={isLoading}
            />
            <Input
              id="lastname"
              name="lastname"
              placeholder="Israeli"
              type="text"
              autoCapitalize="true"
              autoComplete="lastname"
              autoCorrect="off"
              disabled={isLoading}
            />
            <Input
              id="email"
              name="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
            <Input
              id="password"
              name="password"
              placeholder="password"
              type="password"
              autoCapitalize="none"
              autoComplete="current-password"
              autoCorrect="off"
              disabled={isLoading}
            />

            <Input
              id="address"
              name="address"
              placeholder="123 Main St"
              type="text"
              autoCapitalize="none"
              autoComplete="address"
              autoCorrect="off"
              disabled={isLoading}
            />
            <Input
              id="phone"
              name="phone"
              placeholder="123-456-7890"
              type="text"
              autoCapitalize="none"
              autoComplete="phone"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form>
    </div>
  )
}