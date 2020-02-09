import * as Keys from './keys';

const MobileNumberLayout = [
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

const NumberLayout = [
    [
        { key: Keys.ONE },
        { key: Keys.TWO },
        { key: Keys.THREE },
        { key: Keys.DEL, rowspan: 2, },
    ], [
        { key: Keys.FOUR },
        { key: Keys.FIVE },
        { key: Keys.SIX },
    ], [
        { key: Keys.SEVEN },
        { key: Keys.EIGHT },
        { key: Keys.NINE },
        { key: Keys.ENTER, rowspan: 2, },
    ], [
        { key: Keys.DOT },
        { key: Keys.ZERO },
        { key: Keys.ESC },
    ],
];

const TelLayout = [
    [
        { key: Keys.ONE },
        { key: Keys.TWO },
        { key: Keys.THREE },
    ], [
        { key: Keys.FOUR },
        { key: Keys.FIVE },
        { key: Keys.SIX },
    ], [
        { key: Keys.SEVEN },
        { key: Keys.EIGHT },
        { key: Keys.NINE },
    ], [
        { key: Keys.DEL },
        { key: Keys.ZERO },
        { key: Keys.ENTER },
    ],
];

export default {
    mobileNumber: MobileNumberLayout,
    number: NumberLayout,
    tel: TelLayout,
};
