const generateAlt = (img) => {
  if (typeof img === "string") {
    const arr = img.split("/");
    return arr[arr.length - 1].split(".")[0];
  } else {
    // Handle the case where img is undefined or not a string
    console.error("generateAlt: img is not a valid string");
    return "";
  }
};

export default generateAlt;
