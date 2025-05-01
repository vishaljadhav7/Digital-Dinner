
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError } from 'axios';
import { useAppDispatch} from '../redux/hooks';
import { addUser } from '../features/user';
import { signUpSchema } from '../schema/signUpSchema';
import { Link } from 'react-router-dom';

  type FormField = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const dispactch = useAppDispatch();
  
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormField>({
    resolver: zodResolver(signUpSchema),
  });  


  const onSubmit: SubmitHandler<FormField> = async (data) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_PUBLIC_API}/api/v1/sign-up` , data, {
        withCredentials : true
      });

      dispactch(addUser(res.data.data));

    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      const errorMessage =
        axiosError.response?.data?.message || 'Invalid email or password';
      setError('name', { message: errorMessage });  
      setError('email', { message: errorMessage });
      setError('password', { message: errorMessage });
      setError('phoneNum', {message : errorMessage})
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-teal-50 to-blue-100">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Sign Up</h2>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-600 mb-2">
              Name
            </label>
            <input
              {...register("name")}
              type="text"
              id="username"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all duration-200"
              placeholder="johndoe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all duration-200"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              {...register('password')}
              type="password"
              id="password"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 outline-none transition-all duration-200"
              placeholder="••••••••"
              aria-invalid={errors.password ? 'true' : 'false'}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="">
           <label
             htmlFor="phoneNum"
             className="text-sm font-medium text-gray-700"
           >
             Phone Num
           </label>
           <input
             {...register('phoneNum')}
             type="text"
             id="phoneNum"
             className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 outline-none transition-all duration-200"
           />  
           {errors.phoneNum && (
             <p className="text-sm text-red-500">{errors.phoneNum.message}</p>
           )}
         </div>
          <button
            type="submit"
            disabled = {isSubmitting}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold shadow-md transition-all duration-200 hover:shadow-lg"
          >
            {isSubmitting ? "loading..." :  "Sign Up"}
          </button>
        </form>
        <p className="mt-6 text-center text-gray-500 text-sm">
          Already have an account?{" "}
          <Link to="/signin" className="">
            <button className="text-teal-500 hover:text-orange-600 font-medium transition-colors duration-200">Sign In</button>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp