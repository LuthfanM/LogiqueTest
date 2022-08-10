export const replacer = (txt, toReplace, replacement) => {
    if (txt.length > 0) {
        return txt.split(toReplace).join(replacement);
    }
    return txt;
}