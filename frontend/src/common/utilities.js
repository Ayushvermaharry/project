export const parseDefaultDate = (date) => {
    console.log(typeof date)
    let newDate = new Date(date)
      .toLocaleDateString("en-GB", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      })
      .replace("/", "-")
      .replace("/", "-")
      .split("-");
    let temp = newDate[0];
    newDate[0] = newDate[2];
    newDate[2] = temp;
    console.log(newDate, "newDate");
    return newDate.join("-");
  };

