import { useEffect, useState } from "react";
import { FormRegister } from "./FormRegister/FormRegister";
import { SelectProfile } from "./SelectProfile/SelectProfile";

export const RegisterUser = () => {
  const [role, setRole] = useState<string>("");
  const [canMove, setCanMove] = useState<boolean>(false);

  useEffect(() => {
    role == "" ? setCanMove(false) : setCanMove(true);
  }, [role]);

  return (
    <main className="min-h-screen h-screen items-center flex justify-center">
      <div className="h-3/4 flex items-center">
        {!canMove && <SelectProfile setRole={setRole}></SelectProfile>}
        {canMove && <FormRegister role={role} setRole={setRole}></FormRegister>}
      </div>
    </main>
  );
};
