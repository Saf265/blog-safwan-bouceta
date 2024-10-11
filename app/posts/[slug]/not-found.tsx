import Link from "next/link";
import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="container flex flex-col items-center justify-center space-y-6">
      <h1 className="text-8xl font-extrabold text-error">404</h1>
      <h2 className="text-xl">Oups! Page non trouvée</h2>
      <p className="text-xl">
        Désolé, la page que vous recherchez n'existe pas.
      </p>
      <Link className="link link-error text-lg" href="/">
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFound;
