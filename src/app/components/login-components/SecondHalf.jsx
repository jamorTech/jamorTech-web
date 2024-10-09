import LoginForm from "./LoginForm";

export default function SecondHalf() {
  return (
    <div>
      <h1 className="text-gladGreen font-normal text-center font-abrilFont text-4xl">
        Welcome to Jamor Technology
      </h1>
      <p className="font-arimoFont text-center mt-2 font-normal text-customGray text-base">Ensure you login with the correct credentials</p>
      <LoginForm />
    </div>
  );
}
