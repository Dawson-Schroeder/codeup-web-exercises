// html script tag =
// <script type="module" src="js/file-you-want-to-use"></script>

export function formatToLocaleString(number, language=`en`, country=`US`, currency=`USD`){
    return parseFloat(number).toLocaleString(`${language}-${country}`,
        {style: 'currency', currency: currency}
    );
}

export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export function isNumericAndNotNaN(input){
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== "boolean" && typeof input !== "string";
}

export function isNumericOrNumericString(input){
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== "boolean";
}

export function randomNumber(min, max) {
    return Math.random() * (max - min + 1) + min;
}