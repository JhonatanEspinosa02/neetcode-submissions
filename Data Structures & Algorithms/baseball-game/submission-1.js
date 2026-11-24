class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];

        for (const op of operations) {
            if (op === "C") {
                stack.pop();
            } else if (op === "D") {
                stack.push(2 * stack[stack.length - 1]);
            } else if (op === "+") {
                const top = stack[stack.length - 1];
                const second = stack[stack.length - 2];
                stack.push(top + second);
            } else {
                stack.push(Number(op));
            }
        }

        let sum = 0;
        for (const score of stack) sum += score;
        return sum;

    }
}
