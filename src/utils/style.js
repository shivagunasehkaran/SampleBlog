const style = {
    combine(...styles) {
        return styles.reduce((array, style) => {
            if (!style) {
                return array;
            }

            if (style.constructor === Array) {
                return [...array, ...style];
            } else {
                return [...array, style];
            }
        }, []);
    },
};

export default style;

