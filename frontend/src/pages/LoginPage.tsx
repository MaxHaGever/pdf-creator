import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/authContext';
import {
  MdEmail,
  MdLock,
  MdVisibility,
  MdVisibilityOff,
} from 'react-icons/md';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate('/home');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-teal-100 py-10 px-4"
    >
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            התחברות לחשבון
          </h2>
          <form className="space-y-5" onSubmit={handleLogin}>
            {/* Username field with icon */}
            <div className="relative">
              <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                dir="ltr"
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="username@example.com"
                className="w-full py-2.5 pl-10 pr-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition"
              />
            </div>

            {/* Password field with lock & toggle-eye */}
            <div className="relative">
              <MdLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                dir="ltr"
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full py-2.5 pl-10 pr-10 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300 ease-in-out"
            >
              התחבר
            </button>

            <div className="flex flex-col sm:flex-row items-center justify-between text-sm space-y-2 sm:space-y-0 mt-4">
              <button
                type="button"
                onClick={() => navigate('/forgot-password')}
                className="text-indigo-600 hover:text-indigo-700 hover:underline transition"
              >
                שכחת סיסמה?
              </button>
              <span className="text-gray-600">
                אין לך חשבון?{' '}
                <button
                  type="button"
                  onClick={() => navigate('/register')}
                  className="text-indigo-600 font-medium hover:text-indigo-700 hover:underline transition"
                >
                  להירשם
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
