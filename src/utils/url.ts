const concatUrl = (...urlParts: string[]): string => {
    urlParts = urlParts.map((part, index) => {
        // First part can start with "/". For other parts,
        // removes first character when it's "/".
        if (index !== 0) part = part.startsWith("/") ? part.slice(1) : part;
        // Removes last character when it's "/".
        part = part.endsWith("/") ? part.slice(0, part.length - 1) : part;

        return part;
    });

    // Join non-empty parts
    return urlParts.filter((part) => part !== "").join("/");
};

export { concatUrl };
