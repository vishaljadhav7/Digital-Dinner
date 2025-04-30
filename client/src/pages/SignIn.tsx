import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError } from 'axios';
import { useAppDispatch } from '../redux/hooks';
import { addUser } from '../features/user';
import { Link } from 'react-router-dom';
import { signInschema } from '../schema/signInSchema';
import { useNavigate } from 'react-router-dom';

type FormField = z.infer<typeof signInschema>;

const SignIn =  () => {

  const dispactch = useAppDispatch();
  const navigate = useNavigate()
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormField>({
      resolver: zodResolver(signInschema),
    });  ;

  const onSubmit: SubmitHandler<FormField> = async (data) => {
    try {
      const res = await axios.post('http://localhost:4000/api/v1/sign-in', data , {
        withCredentials : true
      });
      dispactch(addUser(res.data.data));
      navigate("/profile")
    
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      const errorMessage =
        axiosError.response?.data?.message || 'Invalid email or password';
      setError('email', { message: errorMessage });
      setError('password', { message: errorMessage });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-teal-50 to-blue-100">
    <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Sign In</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            {...register('email')}
            type="email"
            id="emailId"
            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 outline-none transition-all duration-200"
            placeholder="you@example.com"
            aria-invalid={errors.email ? 'true' : 'false'}
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
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold shadow-md transition-all duration-200 hover:shadow-lg disabled:bg-teal-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Signing In...' : 'Sign In'}
        </button>
      </form>
      <p className="mt-6 text-center text-gray-600 text-sm">
        Don’t have an account?{' '}
        <Link
          to="/signup"
          className="text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200"
        >
          Sign Up
        </Link>
      </p>
    </div>
  </div>
  )

}

export default SignIn