import Swal from "sweetalert2";

export const useGeneral = () => {
  const name = "useGeneral";

  const flash = (
    title = "success",
    text = "default text",
    icon = "success",
    confirmButtonText = "ok"
  ) => {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonText: confirmButtonText,
    });
  };

  const getData = async (url) => {
    const res = await fetch(url);
    return await res.json();
  };

  return { name, getData, flash };
};
