const latinNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

const formatDigits = (
    txt: string,
    to: "latin" | "persian" = "persian"
): string => {
    switch (to) {
        case "persian":
            for (let i = 0; i < 10; i++)
                txt = txt
                    .toString()
                    .replaceAll(latinNumbers[i], persianNumbers[i]);
            break;
        case "latin":
            for (let i = 0; i < 10; i++)
                txt = txt
                    .toString()
                    .replaceAll(persianNumbers[i], latinNumbers[i]);
            break;
    }

    return txt;
};

export { formatDigits };
