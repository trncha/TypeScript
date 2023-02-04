"use strict";
const calculateAre = (s) => {
    switch (s.type) {
        case "rectangle":
            // ก * ย
            return s.width * s.height;
        case "triangle":
            // 0.5 * ฐ * ส
            return 0.5 * s.base * s.height;
        default:
            return new Error("Error");
    }
};
console.log('Discriminated Unions Function Rectangle ก * ย =>', calculateAre({ width: 20, height: 20, type: "rectangle" }));
console.log('Discriminated Unions Function Triangle 0.5 * ฐ * ส =>', calculateAre({ base: 30, height: 20, type: "triangle" }));
