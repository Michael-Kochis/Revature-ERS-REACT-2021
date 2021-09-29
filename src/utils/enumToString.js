
const TypeToString = function(value) {
    value = parseInt(value);

    switch (value) {
        case 1: return "Lodging";
            break;
        case 2: return "Travel";
            break;
        case 3: return "Food";
            break;
        default: return "Other";
    }
}

module.exports = {
    TypeToString
}