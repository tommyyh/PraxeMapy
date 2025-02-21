export const closeModal = (type, setModal, modal) =>
  setModal({ ...modal, [type]: { active: false, [type]: {} } });

export const openModal = (type, setModal) => {
  setModal((prev) => ({
    ...prev,
    [type]: !prev[type],
  }));
};
