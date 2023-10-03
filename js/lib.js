
// math object extensions

// linear interpolation from one value to another
Math.lerp = function(a, b, t) {
        return a + t * (b - a);
}

// clamps a value between a min and max value
Math.clamp = function(v, min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY) {
        if (v < min) {
                return min;
        }

        if (v > max) {
                return max;
        }

        return v;
}
