import { Button } from "flowbite-react";
import React from "react";

const Btn = ({ label }) => {
  return (
    // <Button
    //   className="w-32 text-center "
    //   // size={"lg"}
    //   gradientMonochrome="pink"
    //   // outline
    //   type="submit"
    // >
    //   Login
    // </Button>
    <button
      type="submit"
      class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  "
    >
      {label}
    </button>
  );
};

export default Btn;
