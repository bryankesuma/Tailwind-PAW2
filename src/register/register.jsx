import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import registerSchema from "./schemas/register-schema"

const Register = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: ' ',
            email: ' ',
            password: ' ',
        },
    })

    return <div className="flex w-full items-center justify-center">
        <div className="card card-border card-md min-w-md">
            <div className="card-body">
                <h2 className="card-title">Selamat Datang</h2>
                <p>Silahkan lengkapi form dibawah ini</p>

                <form onSubmit={handleSubmit(console.log)} className="space-y-5">
                    <label className="floating-label">
                        <span>Full Name</span>
                        <input
                            type="text"
                            placeholder="Masukkan nama kamu"
                            className="input input-md"
                            {...register('name')} />
                        {errors.name && (
                            <p role="alert" className="mt-1 text-sm text-error">
                                {errors.name.message}
                            </p>
                        )}
                    </label>
                    <label className="floating-label">
                        <span>Email</span>
                        <input
                            type="email"
                            placeholder="Masukkan email"
                            className="input input-md"
                            {...register('email')} />
                    </label>
                    <label className="floating-label">
                        <span>Password</span>
                        <input
                            type="password"
                            placeholder="Masukkan password"
                            className="input input-md"
                            {...register('password')} />
                    </label>

                    <button type="submit" className="btn btn-primary">
                        Buat Akun
                    </button>
                </form>
            </div>
        </div>
    </div>
}

export default Register