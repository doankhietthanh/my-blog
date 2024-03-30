"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { ExtendedUser } from "@/next-auth";
import { ProfileSchema } from "@/schemas/user";
import { Badge } from "@/components/ui/badge";
import { UserRole } from "@prisma/client";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type ProfileFormValues = z.infer<typeof ProfileSchema>;

const ProfileForm = ({ user }: { user: ExtendedUser }) => {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: user.name || "",
      email: user.email || "",
      role: user.role,
    },
    mode: "onChange",
  });

  function onSubmit(data: ProfileFormValues) {
    console.log(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Avatar className="h-32 w-32">
          {user.image && <AvatarImage src={user.image} alt="@avatar" />}
          <AvatarFallback>{user.name?.at(0)}</AvatarFallback>
        </Avatar>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name. It can be your real name or a
                pseudonym.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} disabled={true} />
              </FormControl>
              <FormDescription>Email cannot be changed.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row items-center gap-5">
          <Label>Role</Label>
          <Badge
            variant={user.role == UserRole.USER ? "destructive" : "default"}
          >
            {user.role}
          </Badge>
        </div>
        <Button type="submit">Update profile</Button>
      </form>
    </Form>
  );
};

export default ProfileForm;
