import { createContext, useContext, useState, useCallback } from "react";

const Ctx = createContext(null);

export const AppointmentProvider = ({ children }) => {
  const [modal, setModal] = useState({ open: false, direction: "" });

  const openModal = useCallback(
    (direction = "") => setModal({ open: true, direction }),
    []
  );
  const closeModal = useCallback(
    () => setModal((m) => ({ ...m, open: false })),
    []
  );

  return (
    <Ctx.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </Ctx.Provider>
  );
};

export const useAppointment = () => useContext(Ctx);
