class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        let stack = [];
        const map = {
            ')': '(',
            ']': '[',
            '}': '{',
        }

        for (const character of s) {
            if (character === '(' || character === '[' || character === '{') {
                stack.push(character);
                continue;
            }

            const lastOpening = stack.pop();
            if (lastOpening !== map[character]) {
                return false
            }
        }

        return stack.length === 0

    }
}
