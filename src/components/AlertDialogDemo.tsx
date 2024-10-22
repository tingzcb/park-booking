import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "./ui/scroll-area";

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription className="flex">
            <ScrollArea className="w-full h-80 rounded-md border p-4">
              Jokester began sneaking into the castle in the middle of the night
              and leaving jokes all over the place: under the king&apos;s
              pillow, in his soup, even in the royal toilet. The king was
              furious, but he couldn&apos;t seem to stop Jokester. And then, one
              day, the people of the kingdom discovered that the jokes left by
              Jokester were so funny that they couldn&apos;t help but laugh. And
              once they started laughing, they couldn&apos;t stop. This action
              cannot be undone. This will permanently delete your account and
              remove your data from our servers.This action cannot be undone.
              This will permanently delete your account and remove your data
              from our servers.This action cannot be undone. This will
              permanently delete your account and remove your data from our
              servers.This action cannot be undone. This will permanently delete
              your account and remove your data from our servers.This action
              cannot be undone. This will permanently delete your account and
              remove your data from our servers.This action cannot be undone.
              This will permanently delete your account and remove your data
              from our servers.This action cannot be undone. This will
              permanently delete your account and remove your data from our
              servers.This action cannot be undone. This will permanently delete
              your account and remove your data from our servers.This action
              cannot be undone. This will permanently delete your account and
              remove your data from our servers.This action cannot be undone.
              This will permanently delete your account and remove your data
              from our servers.This action cannot be undone. This will
              permanently delete your account and remove your data from our
              servers.This action cannot be undone. This will permanently delete
              your account and remove your data from our servers.This action
              cannot be undone. This will permanently delete your account and
              remove your data from our servers.
            </ScrollArea>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
