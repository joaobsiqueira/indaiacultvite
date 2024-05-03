const LoginButton = () => {
  return (
    <div>
      <a href="/loginTonon">
        <button
          aria-label="botão para fazer login"
          className="bg-darkblue hover:bg-lightblue dark:bg-lightblue dark:hover:bg-darkblue text-white font-bold py-2 px-8 rounded-full"
        >
          Login
        </button>
      </a>
    </div>
  );
};

export default LoginButton;
