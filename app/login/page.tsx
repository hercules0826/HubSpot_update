"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  // const { data: session } = useSession();
  // if (session) router.replace("/");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) {
      const session = await fetch("/api/auth/session").then(r => r.json());
      
      if (session?.user?.role === "admin") router.replace("/admin");
      else router.replace("/");
    }

    else setError("Invalid email or password.");
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-beige px-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md border border-sageMint/40">
        <h1 className="text-3xl font-heading text-sageGreen text-center mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-2 border-sageMint rounded-xl p-3 focus:border-sageGreen"
            required
          />

          {/* Password + Toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-sageMint rounded-xl p-3 pr-12 focus:border-sageGreen"
              required
            />

            <button
              type="button"
              className="absolute right-3 top-3 text-sageGreen hover:text-sageHover"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={22} />
              ) : (
                <AiOutlineEye size={22} />
              )}
            </button>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-sageGreen text-white py-3 rounded-xl hover:bg-sageHover transition-all shadow-sm"
          >
            Log In
          </button>
        </form>
      </div>
    </main>
  );
}
