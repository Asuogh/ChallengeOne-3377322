class SearchSuggestionSystem {
    constructor(products) {
        this.products = products.sort();
    }

    getSuggestions(searchWord) {
        const result = [];
        let typedPrefix = "";

        for (let i = 0; i < searchWord.length; i++) {
            typedPrefix += searchWord[i];

            const currentSuggestions = [];
            let count = 0;

            for (const product of this.products) {
                if (product.startsWith(typedPrefix)) {
                    currentSuggestions.push(product);
                    count++;
                    if (count === 3) {
                        break;
                    }
                }
            }
            result.push(currentSuggestions);
        }

        return result;
    }
}

const products1 = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const searchWord1 = "mouse";

const system1 = new SearchSuggestionSystem(products1);
const suggestions1 = system1.getSuggestions(searchWord1);
console.log("Example 1 Output:", suggestions1);

const products2 = ["bags", "baggage", "banner", "box", "briefcase"];
const searchWord2 = "bags";

const system2 = new SearchSuggestionSystem(products2);
const suggestions2 = system2.getSuggestions(searchWord2);
console.log("\nExample 2 Output:", suggestions2);

const products3 = ["apple", "apricot", "banana", "blueberry"];
const searchWord3 = "app";

const system3 = new SearchSuggestionSystem(products3);
const suggestions3 = system3.getSuggestions(searchWord3);
console.log("\nExample 3 Output:", suggestions3);

const products4 = ["cat", "car", "cart"];
const searchWord4 = "catwalk";

const system4 = new SearchSuggestionSystem(products4);
const suggestions4 = system4.getSuggestions(searchWord4);
console.log("\nExample 4 Output:", suggestions4);
