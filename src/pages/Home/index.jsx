import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-blue-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-indigo-600">
        Apprendre les Mathématiques
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Link
          to="/multiplication"
          className="bg-yellow-300 p-6 rounded-lg shadow-lg text-center hover:bg-yellow-400 transition duration-200"
        >
          <h2 className="text-xl font-semibold">Multiplication</h2>
          <p className="mt-2">
            Apprenez et pratiquez les tables de multiplication.
          </p>
        </Link>

        <Link
          to="/addition"
          className="bg-green-300 p-6 rounded-lg shadow-lg text-center hover:bg-green-400 transition duration-200"
        >
          <h2 className="text-xl font-semibold">Addition</h2>
          <p className="mt-2">
            Faites des exercices d'addition pour améliorer votre rapidité.
          </p>
        </Link>

        <Link
          to="/soustraction"
          className="bg-blue-300 p-6 rounded-lg shadow-lg text-center hover:bg-blue-400 transition duration-200"
        >
          <h2 className="text-xl font-semibold">Soustraction</h2>
          <p className="mt-2">
            Apprenez à soustraire des nombres et à résoudre des calculs.
          </p>
        </Link>

        <Link
          to="/division"
          className="bg-red-300 p-6 rounded-lg shadow-lg text-center hover:bg-red-400 transition duration-200"
        >
          <h2 className="text-xl font-semibold">Division</h2>
          <p className="mt-2">Pratiquez les divisions et devenez un expert.</p>
        </Link>
      </div>

      <footer className="text-center mt-8 text-gray-500">
        <p>© 2025 Apprendre les Mathématiques - Tous droits réservés</p>
      </footer>
    </div>
  );
};

export default Home;
