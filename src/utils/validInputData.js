const validInputData = (value="", inputType="") => {
    let isValidData = false;

    if (inputType === "text") {
            value = value.replace(/\s{2,}/g, " ")
            isValidData = value.match(/\w/) ? true : false;
            if (isValidData) {
                return value;
            } else {
                return "";
            }
        } else if (inputType === "number") {
            isValidData = +value ? true : value === "0" ? true : false;
            if (isValidData && +value > 0 && +value < 11) {
                return value 
            } else if (isValidData && +value < 1) {
                return "1";
            } else if (isValidData && +value > 10) {
                return "10";
            } else {
                return "";
            }
        }
    return null;
}

export { validInputData }