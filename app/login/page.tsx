"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    console.log(res)
    if (res?.ok) router.replace("/admin");
    else setError("Invalid email or password.");
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-beige px-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-heading text-sageGreen text-center mb-6">
          Admin Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-2 border-sageMint rounded-xl p-3 focus:border-sageGreen"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border-2 border-sageMint rounded-xl p-3 focus:border-sageGreen"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-sageGreen text-white py-3 rounded-xl hover:bg-sageHover transition-all"
          >
            Log In
          </button>
        </form>
      </div>
    </main>
  );
}
