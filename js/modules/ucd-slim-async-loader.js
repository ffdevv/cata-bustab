import { UCD_DATA_PATH } from "./consts.js";

export async function loadUCD(obj) {
  try {
    let url = UCD_DATA_PATH;
    await $.ajax({
      dataType: "json",
      url: url,
      success: (data) => {
        for (let index = 0; index < data.length; index++) {
          const el = data[index];
          obj[el.code] = el;
        }
      }
    });
  } catch (e) {
    console.error(e);
    return false;
  }
  return true;
}
