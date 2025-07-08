import Login from '../login/page';  
import ForgotPassword from '../forgot-password/page';
const register = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Register</h1>
      <p className="text-lg">This is the registration page.</p>
      <Login />
      <p className="text-lg mt-4">Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a></p>
      <p className="text-lg mt-4">Forgot your password? <a href="/forgot-password" className="text-blue-500 hover:underline">Reset it here</a></p>
      <ForgotPassword />
    </div>
    
  );
};

export default register;