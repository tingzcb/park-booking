"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function SignIn() {
  const { data, status } = useSession();
  console.log(data, status);

  return (
    <div>
      <div>
        <div onClick={() => signIn("google")}>Sign in with Google</div>
        <div>Sign in with Github</div>
        <div>Sign in with Facebook</div>

        <div onClick={() => signOut()}>Sign out with Google</div>
      </div>
    </div>
  );
}
