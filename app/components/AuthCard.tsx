"use client";

import Image from "next/image";
import { signIn, signOut, useSession } from "@/app/lib/auth-client";

function initialsFromName(name: string | null | undefined): string {
    if (!name) return "U";

    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return "U";

    const initials = parts.slice(0, 2).map((part) => part[0]?.toUpperCase() ?? "");
    return initials.join("");
}

export function AuthCard() {
    const { data: session, isPending } = useSession();
    const user = session?.user;
    const isLoggedIn = Boolean(user);

    return (
        <section className="w-full max-w-md rounded-3xl border border-black/10 bg-white p-8 shadow-[0_20px_70px_-30px_rgba(0,0,0,0.35)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Video Blog Suggestor
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900">
                Learn Faster With Better Search
            </h1>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
                Sign in with GitHub to search curated videos and articles.
            </p>

            <div className="mt-8 rounded-2xl bg-zinc-50 p-4">
                {isPending && <p className="text-sm text-zinc-500">Checking session...</p>}

                {!isPending && !isLoggedIn && (
                    <button
                        type="button"
                        onClick={async () => {
                            await signIn.social({
                                provider: "github",
                                callbackURL: "/",
                            });
                        }}
                        className="w-full rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700"
                    >
                        Continue With GitHub
                    </button>
                )}

                {!isPending && isLoggedIn && user && (
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            {user.image ? (
                                <Image
                                    src={user.image}
                                    alt={user.name ?? "Profile image"}
                                    width={48}
                                    height={48}
                                    className="h-12 w-12 rounded-full object-cover ring-2 ring-zinc-200"
                                />
                            ) : (
                                <div className="grid h-12 w-12 place-items-center rounded-full bg-zinc-900 text-sm font-semibold text-white">
                                    {initialsFromName(user.name)}
                                </div>
                            )}
                            <div>
                                <p className="text-sm font-semibold text-zinc-900">{user.name ?? "GitHub user"}</p>
                                <p className="text-xs text-zinc-500">{user.email}</p>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={async () => {
                                await signOut();
                            }}
                            className="w-full rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700"
                        >
                            Log out
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
