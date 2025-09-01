"use client"
import { Button } from "@workspace/ui/components/button"
import { add } from "@workspace/math/add"
import { useMutation, useQuery } from "convex/react"
import { api } from "@workspace/backend/convex/_generated/api"

/**
 * Client-side page component that displays users from Convex and provides a button to add a user.
 *
 * Fetches the list of users with a Convex query and renders the JSON result. Renders a Button that
 * invokes the Convex `add` mutation when clicked; the component does not handle the mutation's
 * result or errors.
 *
 * @returns A React element for the page.
 */
export default function Page() {

  const users = useQuery(api.users.getMany)
  const addUser = useMutation(api.users.add)
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button size="sm" onClick={() => addUser()}>Button</Button>
        <p>{JSON.stringify(users)}</p>
      </div>
    </div>
  )
}
