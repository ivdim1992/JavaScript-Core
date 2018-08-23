let solution = (function () {

    let vector = {
        add: function add(vec1, vec2) {
            return [vec1[0] + vec2[0], vec1[1] + vec2[1]]
        },
        multiply: function multiply(vec1, scalar) {
            return [vec1[0] * scalar,vec1[1] * scalar]
        },
        length: function length(vec1) {
            return Math.sqrt(Math.pow(vec1[0],2) + Math.pow(vec1[1],2))
        },
        dot: function dot(vec1,vec2) {
            return vec1[0] * vec2[0] + vec1[1] * vec2[1]
        },
        cross: function cross(vec1,vec2) {
            return vec1[0] * vec2[1] - vec1[1] * vec2[0]
        }
    };

    return vector
}())
solution.add([1, 1], [1, 0]);
solution.multiply([3.5, -2], 2);
