class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const n = s.length;
        let stack = [];
        const map = {
            ')': '(',
            ']': '[',
            '}': "{"
        }

        for (let i = 0; i < s.length; i++) {
            const ch = s[i];
            const isClosing = ch in map;

            if (!isClosing) {
                // it's an opening bracket — save it
                stack.push(ch);
            } else {
                // it's a closing bracket — must match the most recent opener
                if (stack.length === 0 || stack[stack.length - 1] !== map[ch]) {
                    return false;
                }
                stack.pop();
            }
        }

        return stack.length === 0;



    }
}
