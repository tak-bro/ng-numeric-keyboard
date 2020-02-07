import * as Keys from './keys';

const NumberLayout = [
    [
        { key: Keys.ONE },
        { key: Keys.TWO },
        { key: Keys.THREE },
        { key: Keys.DEL, },
    ], [
        { key: Keys.FOUR },
        { key: Keys.FIVE },
        { key: Keys.SIX },
        { key: Keys.ENTER, },
    ], [
        { key: Keys.SEVEN },
        { key: Keys.EIGHT },
        { key: Keys.NINE },
        { key: Keys.DOT },
    ], [
        { key: Keys.BLANK },
        { key: Keys.ZERO },
        { key: Keys.BLANK },
        { key: Keys.ESC },
    ],
];

export default { number: NumberLayout };
