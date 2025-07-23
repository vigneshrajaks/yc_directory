import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";

async function Navbar() {
  const session = await auth();
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="YC Directory" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button className="cursor-pointer" type="submit">
                  Logout
                </button>
              </form>

              <Link href={`/user/${session?.user?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <>
              <form
                action={async () => {
                  "use server";
                  await signIn("github");
                }}
              >
                <button className="cursor-pointer" type="submit">
                  LogIn
                </button>
              </form>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
