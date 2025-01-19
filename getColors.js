export const getColor = (status) => {
  return status === "copied"
    ? "#28a745"
    : status === "error"
      ? "#dc3545"
      : "#007bff";
};
