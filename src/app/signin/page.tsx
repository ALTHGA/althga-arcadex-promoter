"use client";
import { Input } from "@/components/Input";
import { AuthContext } from "@/context/auth/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BsJoystick } from "react-icons/bs";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { z } from "zod";

const schema = z.object({
  email: z
    .string()
    .min(4, "Este campo é obrigatório")
    .email("Digite um email válido."),
  password: z.string().min(5, "Este campo é obrigatório"),
});
type Form = z.infer<typeof schema>;

export default function Signin() {
  const router = useRouter();
  const { signIn } = useContext(AuthContext);

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<Form>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });

  const [visible, setVisible] = useState(true);

  const handleChangeVisible = () => setVisible(!visible);

  const handleConfirmForm: SubmitHandler<Form> = async (form) => {
    const { email, password } = form;
    try {
      await signIn({ email, password });
      router.push("/dashboard");
    } catch (error) {}
  };

  return (
    <div className="h-screen w-screen flex flex-col space-y-4 justify-center items-center bg-gray-50">
      <span className="flex items-center gap-2">
        <h1 className="bg-white p-2 rounded-md text-blue-500 font-bold">
          <BsJoystick />
        </h1>
        <h1 className="text-gray-900 font-bold">ArcadeX</h1>
      </span>
      <div className="bg-white w-96 p-10 rounded-lg shadow-2xl  shadow-blue-100 space-y-8">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Entrar</h1>
          <p className="text-sm text-gray-500">
            Bem vindo de volta! Faça login em sua conta abaixo.
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email-address"
              className="text-gray-800 font-medium"
            >
              Email
            </label>
            <Input
              {...register("email")}
              id="email-address"
              helperText={errors.email?.message}
              type="email"
            />
          </div>

          <div className="flex flex-col gap-1 mt-4">
            <span className="flex items-center justify-between">
              <label htmlFor="password" className="text-gray-800 font-medium">
                Senha
              </label>
              <a href="" className="text-sm text-gray-500 hover:underline">
                Forgot you password?
              </a>
            </span>
            <Input
              {...register("password")}
              helperText={errors.password?.message}
              id="password"
              type={visible ? "text" : "password"}
              rightIcon={() => (
                <button
                  onClick={handleChangeVisible}
                  className="absolute right-4 text-lg text-gray-500 hover:bg-gray-900 hover:text-white p-1 rounded-full transition ease-in duration-150"
                >
                  {visible ? <VscEye /> : <VscEyeClosed />}
                </button>
              )}
            />
          </div>

          <button
            onClick={handleSubmit(handleConfirmForm)}
            className="bg-blue-500 hover:bg-blue-700 w-full mt-6 py-2 rounded-md text-white font-medium text-sm"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}
