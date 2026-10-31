class Solution {
    encode(strs) {
        let result = "";

        for (let s of strs) {
            result += s.length + "#" + s;
        }

        return result;
    }

    decode(str) {
        let result = [];
        let i = 0;

        while (i < str.length) {
            let j = str.indexOf("#", i);
            let len = Number(str.slice(i, j));

            result.push(str.slice(j + 1, j + 1 + len));

            i = j + 1 + len;
        }

        return result;
    }
}