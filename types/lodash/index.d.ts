// Type definitions for lodash 4.17
// Project: https://lodash.com/
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = lodash;

declare class lodash {
    constructor(...args: any[]);

    add(...args: any[]): any;

    after(...args: any[]): any;

    ary(...args: any[]): any;

    assign(...args: any[]): any;

    assignIn(...args: any[]): any;

    assignInWith(...args: any[]): any;

    assignWith(...args: any[]): any;

    at(paths: any): any;

    attempt(...args: any[]): any;

    before(...args: any[]): any;

    bind(...args: any[]): any;

    bindAll(...args: any[]): any;

    bindKey(...args: any[]): any;

    camelCase(...args: any[]): any;

    capitalize(...args: any[]): any;

    castArray(...args: any[]): any;

    ceil(...args: any[]): any;

    chain(): any;

    chunk(...args: any[]): any;

    clamp(...args: any[]): any;

    clone(...args: any[]): any;

    cloneDeep(...args: any[]): any;

    cloneDeepWith(...args: any[]): any;

    cloneWith(...args: any[]): any;

    commit(): any;

    compact(...args: any[]): any;

    concat(...args: any[]): any;

    cond(...args: any[]): any;

    conforms(...args: any[]): any;

    conformsTo(...args: any[]): any;

    constant(...args: any[]): any;

    countBy(...args: any[]): any;

    create(...args: any[]): any;

    curry(...args: any[]): any;

    curryRight(...args: any[]): any;

    debounce(...args: any[]): any;

    deburr(...args: any[]): any;

    defaultTo(...args: any[]): any;

    defaults(...args: any[]): any;

    defaultsDeep(...args: any[]): any;

    defer(...args: any[]): any;

    delay(...args: any[]): any;

    difference(...args: any[]): any;

    differenceBy(...args: any[]): any;

    differenceWith(...args: any[]): any;

    divide(...args: any[]): any;

    drop(...args: any[]): any;

    dropRight(...args: any[]): any;

    dropRightWhile(...args: any[]): any;

    dropWhile(...args: any[]): any;

    each(...args: any[]): any;

    eachRight(...args: any[]): any;

    endsWith(...args: any[]): any;

    entries(...args: any[]): any;

    entriesIn(...args: any[]): any;

    eq(...args: any[]): any;

    escape(...args: any[]): any;

    escapeRegExp(...args: any[]): any;

    every(...args: any[]): any;

    extend(...args: any[]): any;

    extendWith(...args: any[]): any;

    fill(...args: any[]): any;

    filter(...args: any[]): any;

    find(...args: any[]): any;

    findIndex(...args: any[]): any;

    findKey(...args: any[]): any;

    findLast(...args: any[]): any;

    findLastIndex(...args: any[]): any;

    findLastKey(...args: any[]): any;

    first(...args: any[]): any;

    flatMap(...args: any[]): any;

    flatMapDeep(...args: any[]): any;

    flatMapDepth(...args: any[]): any;

    flatten(...args: any[]): any;

    flattenDeep(...args: any[]): any;

    flattenDepth(...args: any[]): any;

    flip(...args: any[]): any;

    floor(...args: any[]): any;

    flow(...args: any[]): any;

    flowRight(...args: any[]): any;

    forEach(...args: any[]): any;

    forEachRight(...args: any[]): any;

    forIn(...args: any[]): any;

    forInRight(...args: any[]): any;

    forOwn(...args: any[]): any;

    forOwnRight(...args: any[]): any;

    fromPairs(...args: any[]): any;

    functions(...args: any[]): any;

    functionsIn(...args: any[]): any;

    get(...args: any[]): any;

    groupBy(...args: any[]): any;

    gt(...args: any[]): any;

    gte(...args: any[]): any;

    has(...args: any[]): any;

    hasIn(...args: any[]): any;

    head(...args: any[]): any;

    identity(...args: any[]): any;

    inRange(...args: any[]): any;

    includes(...args: any[]): any;

    indexOf(...args: any[]): any;

    initial(...args: any[]): any;

    intersection(...args: any[]): any;

    intersectionBy(...args: any[]): any;

    intersectionWith(...args: any[]): any;

    invert(...args: any[]): any;

    invertBy(...args: any[]): any;

    invoke(...args: any[]): any;

    invokeMap(...args: any[]): any;

    isArguments(...args: any[]): any;

    isArray(...args: any[]): any;

    isArrayBuffer(...args: any[]): any;

    isArrayLike(...args: any[]): any;

    isArrayLikeObject(...args: any[]): any;

    isBoolean(...args: any[]): any;

    isBuffer(...args: any[]): any;

    isDate(...args: any[]): any;

    isElement(...args: any[]): any;

    isEmpty(...args: any[]): any;

    isEqual(...args: any[]): any;

    isEqualWith(...args: any[]): any;

    isError(...args: any[]): any;

    isFinite(...args: any[]): any;

    isFunction(...args: any[]): any;

    isInteger(...args: any[]): any;

    isLength(...args: any[]): any;

    isMap(...args: any[]): any;

    isMatch(...args: any[]): any;

    isMatchWith(...args: any[]): any;

    isNaN(...args: any[]): any;

    isNative(...args: any[]): any;

    isNil(...args: any[]): any;

    isNull(...args: any[]): any;

    isNumber(...args: any[]): any;

    isObject(...args: any[]): any;

    isObjectLike(...args: any[]): any;

    isPlainObject(...args: any[]): any;

    isRegExp(...args: any[]): any;

    isSafeInteger(...args: any[]): any;

    isSet(...args: any[]): any;

    isString(...args: any[]): any;

    isSymbol(...args: any[]): any;

    isTypedArray(...args: any[]): any;

    isUndefined(...args: any[]): any;

    isWeakMap(...args: any[]): any;

    isWeakSet(...args: any[]): any;

    iteratee(...args: any[]): any;

    join(...args: any[]): any;

    kebabCase(...args: any[]): any;

    keyBy(...args: any[]): any;

    keys(...args: any[]): any;

    keysIn(...args: any[]): any;

    last(...args: any[]): any;

    lastIndexOf(...args: any[]): any;

    lowerCase(...args: any[]): any;

    lowerFirst(...args: any[]): any;

    lt(...args: any[]): any;

    lte(...args: any[]): any;

    map(...args: any[]): any;

    mapKeys(...args: any[]): any;

    mapValues(...args: any[]): any;

    matches(...args: any[]): any;

    matchesProperty(...args: any[]): any;

    max(...args: any[]): any;

    maxBy(...args: any[]): any;

    mean(...args: any[]): any;

    meanBy(...args: any[]): any;

    memoize(...args: any[]): any;

    merge(...args: any[]): any;

    mergeWith(...args: any[]): any;

    method(...args: any[]): any;

    methodOf(...args: any[]): any;

    min(...args: any[]): any;

    minBy(...args: any[]): any;

    mixin(...args: any[]): any;

    multiply(...args: any[]): any;

    negate(...args: any[]): any;

    next(): any;

    noConflict(...args: any[]): any;

    noop(...args: any[]): any;

    now(...args: any[]): any;

    nth(...args: any[]): any;

    nthArg(...args: any[]): any;

    omit(...args: any[]): any;

    omitBy(...args: any[]): any;

    once(...args: any[]): any;

    orderBy(...args: any[]): any;

    over(...args: any[]): any;

    overArgs(...args: any[]): any;

    overEvery(...args: any[]): any;

    overSome(...args: any[]): any;

    pad(...args: any[]): any;

    padEnd(...args: any[]): any;

    padStart(...args: any[]): any;

    parseInt(...args: any[]): any;

    partial(...args: any[]): any;

    partialRight(...args: any[]): any;

    partition(...args: any[]): any;

    pick(...args: any[]): any;

    pickBy(...args: any[]): any;

    plant(value: any): any;

    pop(...args: any[]): any;

    property(...args: any[]): any;

    propertyOf(...args: any[]): any;

    pull(...args: any[]): any;

    pullAll(...args: any[]): any;

    pullAllBy(...args: any[]): any;

    pullAllWith(...args: any[]): any;

    pullAt(...args: any[]): any;

    push(...args: any[]): any;

    random(...args: any[]): any;

    range(...args: any[]): any;

    rangeRight(...args: any[]): any;

    rearg(...args: any[]): any;

    reduce(...args: any[]): any;

    reduceRight(...args: any[]): any;

    reject(...args: any[]): any;

    remove(...args: any[]): any;

    repeat(...args: any[]): any;

    replace(...args: any[]): any;

    rest(...args: any[]): any;

    result(...args: any[]): any;

    reverse(): any;

    round(...args: any[]): any;

    runInContext(...args: any[]): any;

    sample(...args: any[]): any;

    sampleSize(...args: any[]): any;

    set(...args: any[]): any;

    setWith(...args: any[]): any;

    shift(...args: any[]): any;

    shuffle(...args: any[]): any;

    size(...args: any[]): any;

    slice(...args: any[]): any;

    snakeCase(...args: any[]): any;

    some(...args: any[]): any;

    sort(...args: any[]): any;

    sortBy(...args: any[]): any;

    sortedIndex(...args: any[]): any;

    sortedIndexBy(...args: any[]): any;

    sortedIndexOf(...args: any[]): any;

    sortedLastIndex(...args: any[]): any;

    sortedLastIndexBy(...args: any[]): any;

    sortedLastIndexOf(...args: any[]): any;

    sortedUniq(...args: any[]): any;

    sortedUniqBy(...args: any[]): any;

    splice(...args: any[]): any;

    split(...args: any[]): any;

    spread(...args: any[]): any;

    startCase(...args: any[]): any;

    startsWith(...args: any[]): any;

    stubArray(...args: any[]): any;

    stubFalse(...args: any[]): any;

    stubObject(...args: any[]): any;

    stubString(...args: any[]): any;

    stubTrue(...args: any[]): any;

    subtract(...args: any[]): any;

    sum(...args: any[]): any;

    sumBy(...args: any[]): any;

    tail(...args: any[]): any;

    take(...args: any[]): any;

    takeRight(...args: any[]): any;

    takeRightWhile(...args: any[]): any;

    takeWhile(...args: any[]): any;

    tap(...args: any[]): any;

    template(...args: any[]): any;

    throttle(...args: any[]): any;

    thru(...args: any[]): any;

    times(...args: any[]): any;

    toArray(...args: any[]): any;

    toFinite(...args: any[]): any;

    toInteger(...args: any[]): any;

    toJSON(): any;

    toLength(...args: any[]): any;

    toLower(...args: any[]): any;

    toNumber(...args: any[]): any;

    toPairs(...args: any[]): any;

    toPairsIn(...args: any[]): any;

    toPath(...args: any[]): any;

    toPlainObject(...args: any[]): any;

    toSafeInteger(...args: any[]): any;

    toString(...args: any[]): any;

    toUpper(...args: any[]): any;

    transform(...args: any[]): any;

    trim(...args: any[]): any;

    trimEnd(...args: any[]): any;

    trimStart(...args: any[]): any;

    truncate(...args: any[]): any;

    unary(...args: any[]): any;

    unescape(...args: any[]): any;

    union(...args: any[]): any;

    unionBy(...args: any[]): any;

    unionWith(...args: any[]): any;

    uniq(...args: any[]): any;

    uniqBy(...args: any[]): any;

    uniqWith(...args: any[]): any;

    uniqueId(...args: any[]): any;

    unset(...args: any[]): any;

    unshift(...args: any[]): any;

    unzip(...args: any[]): any;

    unzipWith(...args: any[]): any;

    update(...args: any[]): any;

    updateWith(...args: any[]): any;

    upperCase(...args: any[]): any;

    upperFirst(...args: any[]): any;

    value(): any;

    valueOf(): any;

    values(...args: any[]): any;

    valuesIn(...args: any[]): any;

    without(...args: any[]): any;

    words(...args: any[]): any;

    wrap(...args: any[]): any;

    xor(...args: any[]): any;

    xorBy(...args: any[]): any;

    xorWith(...args: any[]): any;

    zip(...args: any[]): any;

    zipObject(...args: any[]): any;

    zipObjectDeep(...args: any[]): any;

    zipWith(...args: any[]): any;

    static VERSION: string;

    static add(value: any, other: any): any;

    static after(n: any, func: any, ...args: any[]): any;

    static ary(func: any, n: any, guard: any): any;

    static assign(object: any, sources: any): any;

    static assignIn(object: any, sources: any): any;

    static assignInWith(object: any, sources: any): any;

    static assignWith(object: any, sources: any): any;

    static at(object: any, paths: any): any;

    static attempt(func: any, args: any): any;

    static before(n: any, func: any, ...args: any[]): any;

    static bind(func: any, thisArg: any, partials: any): any;

    static bindAll(object: any, methodNames: any): any;

    static bindKey(object: any, key: any, partials: any): any;

    static camelCase(string: any): any;

    static capitalize(string: any): any;

    static castArray(...args: any[]): any;

    static ceil(number: any, precision: any): any;

    static chain(value: any): any;

    static chunk(array: any, size: any, guard: any): any;

    static clamp(number: any, lower: any, upper: any): any;

    static clone(value: any): any;

    static cloneDeep(value: any): any;

    static cloneDeepWith(value: any, customizer: any): any;

    static cloneWith(value: any, customizer: any): any;

    static compact(array: any): any;

    static concat(...args: any[]): any;

    static cond(pairs: any): any;

    static conforms(source: any): any;

    static conformsTo(object: any, source: any): any;

    static constant(value: any): any;

    static countBy(collection: any, iteratee: any): any;

    static create(prototype: any, properties: any): any;

    static curry(func: any, arity: any, guard: any): any;

    static curryRight(func: any, arity: any, guard: any): any;

    static debounce(func: any, wait: any, options: any, ...args: any[]): any;

    static deburr(string: any): any;

    static defaultTo(value: any, defaultValue: any): any;

    static defaults(args: any): any;

    static defaultsDeep(args: any): any;

    static defer(func: any, args: any): any;

    static delay(func: any, wait: any, args: any): any;

    static difference(array: any, values: any): any;

    static differenceBy(array: any, values: any): any;

    static differenceWith(array: any, values: any): any;

    static divide(value: any, other: any): any;

    static drop(array: any, n: any, guard: any): any;

    static dropRight(array: any, n: any, guard: any): any;

    static dropRightWhile(array: any, predicate: any): any;

    static dropWhile(array: any, predicate: any): any;

    static each(collection: any, iteratee: any): any;

    static eachRight(collection: any, iteratee: any): any;

    static endsWith(string: any, target: any, position: any): any;

    static entries(object: any): any;

    static entriesIn(object: any): any;

    static eq(value: any, other: any): any;

    static escape(string: any): any;

    static escapeRegExp(string: any): any;

    static every(collection: any, predicate: any, guard: any): any;

    static extend(object: any, sources: any): any;

    static extendWith(object: any, sources: any): any;

    static fill(array: any, value: any, start: any, end: any): any;

    static filter(collection: any, predicate: any): any;

    static find(collection: any, predicate: any, fromIndex: any): any;

    static findIndex(array: any, predicate: any, fromIndex: any): any;

    static findKey(object: any, predicate: any): any;

    static findLast(collection: any, predicate: any, fromIndex: any): any;

    static findLastIndex(array: any, predicate: any, fromIndex: any): any;

    static findLastKey(object: any, predicate: any): any;

    static first(array: any): any;

    static flatMap(collection: any, iteratee: any): any;

    static flatMapDeep(collection: any, iteratee: any): any;

    static flatMapDepth(collection: any, iteratee: any, depth: any): any;

    static flatten(array: any): any;

    static flattenDeep(array: any): any;

    static flattenDepth(array: any, depth: any): any;

    static flip(func: any): any;

    static floor(number: any, precision: any): any;

    static flow(funcs: any, ...args: any[]): any;

    static flowRight(funcs: any, ...args: any[]): any;

    static forEach(collection: any, iteratee: any): any;

    static forEachRight(collection: any, iteratee: any): any;

    static forIn(object: any, iteratee: any): any;

    static forInRight(object: any, iteratee: any): any;

    static forOwn(object: any, iteratee: any): any;

    static forOwnRight(object: any, iteratee: any): any;

    static fromPairs(pairs: any): any;

    static functions(object: any): any;

    static functionsIn(object: any): any;

    static get(object: any, path: any, defaultValue: any): any;

    static groupBy(collection: any, iteratee: any): any;

    static gt(value: any, other: any): any;

    static gte(value: any, other: any): any;

    static has(object: any, path: any): any;

    static hasIn(object: any, path: any): any;

    static head(array: any): any;

    static identity(value: any): any;

    static inRange(number: any, start: any, end: any): any;

    static includes(collection: any, value: any, fromIndex: any, guard: any): any;

    static indexOf(array: any, value: any, fromIndex: any): any;

    static initial(array: any): any;

    static intersection(arrays: any): any;

    static intersectionBy(arrays: any): any;

    static intersectionWith(arrays: any): any;

    static invert(object: any, iteratee: any): any;

    static invertBy(object: any, iteratee: any): any;

    static invoke(object: any, path: any, args: any): any;

    static invokeMap(collection: any, path: any, args: any): any;

    static isArguments(value: any): any;

    static isArray(p0: any): any;

    static isArrayBuffer(value: any): any;

    static isArrayLike(value: any): any;

    static isArrayLikeObject(value: any): any;

    static isBoolean(value: any): any;

    static isBuffer(b: any): any;

    static isDate(value: any): any;

    static isElement(value: any): any;

    static isEmpty(value: any): any;

    static isEqual(value: any, other: any): any;

    static isEqualWith(value: any, other: any, customizer: any): any;

    static isError(value: any): any;

    static isFinite(value: any): any;

    static isFunction(value: any): any;

    static isInteger(value: any): any;

    static isLength(value: any): any;

    static isMap(value: any): any;

    static isMatch(object: any, source: any): any;

    static isMatchWith(object: any, source: any, customizer: any): any;

    static isNaN(value: any): any;

    static isNative(value: any): any;

    static isNil(value: any): any;

    static isNull(value: any): any;

    static isNumber(value: any): any;

    static isObject(value: any): any;

    static isObjectLike(value: any): any;

    static isPlainObject(value: any): any;

    static isRegExp(value: any): any;

    static isSafeInteger(value: any): any;

    static isSet(value: any): any;

    static isString(value: any): any;

    static isSymbol(value: any): any;

    static isTypedArray(value: any): any;

    static isUndefined(value: any): any;

    static isWeakMap(value: any): any;

    static isWeakSet(value: any): any;

    static iteratee(func: any): any;

    static join(array: any, separator: any): any;

    static kebabCase(string: any): any;

    static keyBy(collection: any, iteratee: any): any;

    static keys(object: any): any;

    static keysIn(object: any): any;

    static last(array: any): any;

    static lastIndexOf(array: any, value: any, fromIndex: any): any;

    static lowerCase(string: any): any;

    static lowerFirst(string: any): any;

    static lt(value: any, other: any): any;

    static lte(value: any, other: any): any;

    static map(collection: any, iteratee: any): any;

    static mapKeys(object: any, iteratee: any): any;

    static mapValues(object: any, iteratee: any): any;

    static matches(source: any): any;

    static matchesProperty(path: any, srcValue: any): any;

    static max(array: any): any;

    static maxBy(array: any, iteratee: any): any;

    static mean(array: any): any;

    static meanBy(array: any, iteratee: any): any;

    static memoize(func: any, resolver: any, ...args: any[]): any;

    static merge(object: any, sources: any): any;

    static mergeWith(object: any, sources: any): any;

    static method(path: any, args: any): any;

    static methodOf(object: any, args: any): any;

    static min(array: any): any;

    static minBy(array: any, iteratee: any): any;

    static mixin(object: any, source: any, options: any, ...args: any[]): any;

    static multiply(value: any, other: any): any;

    static negate(predicate: any, ...args: any[]): any;

    static noConflict(): any;

    static noop(): void;

    static now(): any;

    static nth(array: any, n: any): any;

    static nthArg(n: any): any;

    static omit(object: any, paths: any): any;

    static omitBy(object: any, predicate: any): any;

    static once(func: any): any;

    static orderBy(collection: any, iteratees: any, orders: any, guard: any): any;

    static over(iteratees: any): any;

    static overArgs(func: any, transforms: any): any;

    static overEvery(iteratees: any): any;

    static overSome(iteratees: any): any;

    static pad(string: any, length: any, chars: any): any;

    static padEnd(string: any, length: any, chars: any): any;

    static padStart(string: any, length: any, chars: any): any;

    static parseInt(string: any, radix: any, guard: any): any;

    static partial(func: any, partials: any): any;

    static partialRight(func: any, partials: any): any;

    static partition(collection: any, iteratee: any): any;

    static pick(object: any, paths: any): any;

    static pickBy(object: any, predicate: any): any;

    static property(path: any): any;

    static propertyOf(object: any): any;

    static pull(array: any, values: any): any;

    static pullAll(array: any, values: any): any;

    static pullAllBy(array: any, values: any, iteratee: any): any;

    static pullAllWith(array: any, values: any, comparator: any): any;

    static pullAt(array: any, indexes: any): any;

    static random(lower: any, upper: any, floating: any): any;

    static range(start: any, end: any, step: any): any;

    static rangeRight(start: any, end: any, step: any): any;

    static rearg(func: any, indexes: any): any;

    static reduce(collection: any, iteratee: any, accumulator: any, ...args: any[]): any;

    static reduceRight(collection: any, iteratee: any, accumulator: any, ...args: any[]): any;

    static reject(collection: any, predicate: any): any;

    static remove(array: any, predicate: any): any;

    static repeat(string: any, n: any, guard: any): any;

    static replace(...args: any[]): any;

    static rest(func: any, start: any): any;

    static result(object: any, path: any, defaultValue: any): any;

    static reverse(array: any): any;

    static round(number: any, precision: any): any;

    static runInContext(context: any, ...args: any[]): any;

    static sample(collection: any): any;

    static sampleSize(collection: any, n: any, guard: any): any;

    static set(object: any, path: any, value: any): any;

    static setWith(object: any, path: any, value: any, customizer: any): any;

    static shuffle(collection: any): any;

    static size(collection: any): any;

    static slice(array: any, start: any, end: any): any;

    static snakeCase(string: any): any;

    static some(collection: any, predicate: any, guard: any): any;

    static sortBy(collection: any, iteratees: any): any;

    static sortedIndex(array: any, value: any): any;

    static sortedIndexBy(array: any, value: any, iteratee: any): any;

    static sortedIndexOf(array: any, value: any): any;

    static sortedLastIndex(array: any, value: any): any;

    static sortedLastIndexBy(array: any, value: any, iteratee: any): any;

    static sortedLastIndexOf(array: any, value: any): any;

    static sortedUniq(array: any): any;

    static sortedUniqBy(array: any, iteratee: any): any;

    static split(string: any, separator: any, limit: any): any;

    static spread(func: any, start: any): any;

    static startCase(string: any): any;

    static startsWith(string: any, target: any, position: any): any;

    static stubArray(): any;

    static stubFalse(): any;

    static stubObject(): any;

    static stubString(): any;

    static stubTrue(): any;

    static subtract(value: any, other: any): any;

    static sum(array: any): any;

    static sumBy(array: any, iteratee: any): any;

    static tail(array: any): any;

    static take(array: any, n: any, guard: any): any;

    static takeRight(array: any, n: any, guard: any): any;

    static takeRightWhile(array: any, predicate: any): any;

    static takeWhile(array: any, predicate: any): any;

    static tap(value: any, interceptor: any): any;

    static template(string: any, options: any, guard: any): any;

    static templateSettings: {
        escape: RegExp;
        evaluate: RegExp;
        imports: {
        };
        interpolate: RegExp;
        variable: string;
    };

    static throttle(func: any, wait: any, options: any): any;

    static thru(value: any, interceptor: any): any;

    static times(n: any, iteratee: any): any;

    static toArray(value: any): any;

    static toFinite(value: any): any;

    static toInteger(value: any): any;

    static toLength(value: any): any;

    static toLower(value: any): any;

    static toNumber(value: any): any;

    static toPairs(object: any): any;

    static toPairsIn(object: any): any;

    static toPath(value: any): any;

    static toPlainObject(value: any): any;

    static toSafeInteger(value: any): any;

    static toString(value: any): any;

    static toUpper(value: any): any;

    static transform(object: any, iteratee: any, accumulator: any): any;

    static trim(string: any, chars: any, guard: any): any;

    static trimEnd(string: any, chars: any, guard: any): any;

    static trimStart(string: any, chars: any, guard: any): any;

    static truncate(string: any, options: any): any;

    static unary(func: any): any;

    static unescape(string: any): any;

    static union(arrays: any): any;

    static unionBy(arrays: any): any;

    static unionWith(arrays: any): any;

    static uniq(array: any): any;

    static uniqBy(array: any, iteratee: any): any;

    static uniqWith(array: any, comparator: any): any;

    static uniqueId(prefix: any): any;

    static unset(object: any, path: any): any;

    static unzip(array: any): any;

    static unzipWith(array: any, iteratee: any): any;

    static update(object: any, path: any, updater: any): any;

    static updateWith(object: any, path: any, updater: any, customizer: any): any;

    static upperCase(string: any): any;

    static upperFirst(string: any): any;

    static values(object: any): any;

    static valuesIn(object: any): any;

    static without(array: any, values: any): any;

    static words(string: any, pattern: any, guard: any): any;

    static wrap(value: any, wrapper: any): any;

    static xor(arrays: any): any;

    static xorBy(arrays: any): any;

    static xorWith(arrays: any): any;

    static zip(array: any): any;

    static zipObject(props: any, values: any): any;

    static zipObjectDeep(props: any, values: any): any;

    static zipWith(arrays: any): any;

}

declare namespace lodash {
    namespace add {
        const prototype: {
        };

    }

    namespace after {
        const prototype: {
        };

    }

    namespace ary {
        const prototype: {
        };

    }

    namespace assign {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace assignIn {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace assignInWith {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace assignWith {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace at {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace attempt {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace before {
        const prototype: {
        };

    }

    namespace bind {
        // Circular reference from lodash.bind
        const placeholder: any;

        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace bindAll {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace bindKey {
        // Circular reference from lodash.bindKey
        const placeholder: any;

        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace camelCase {
        const prototype: {
        };

    }

    namespace capitalize {
        const prototype: {
        };

    }

    namespace castArray {
        const prototype: {
        };

    }

    namespace ceil {
        const prototype: {
        };

    }

    namespace chain {
        const prototype: {
        };

    }

    namespace chunk {
        const prototype: {
        };

    }

    namespace clamp {
        const prototype: {
        };

    }

    namespace clone {
        const prototype: {
        };

    }

    namespace cloneDeep {
        const prototype: {
        };

    }

    namespace cloneDeepWith {
        const prototype: {
        };

    }

    namespace cloneWith {
        const prototype: {
        };

    }

    namespace compact {
        const prototype: {
        };

    }

    namespace concat {
        const prototype: {
        };

    }

    namespace cond {
        const prototype: {
        };

    }

    namespace conforms {
        const prototype: {
        };

    }

    namespace conformsTo {
        const prototype: {
        };

    }

    namespace constant {
        const prototype: {
        };

    }

    namespace countBy {
        const prototype: {
        };

    }

    namespace create {
        const prototype: {
        };

    }

    namespace curry {
        // Circular reference from lodash.curry
        const placeholder: any;

        const prototype: {
        };

    }

    namespace curryRight {
        // Circular reference from lodash.curryRight
        const placeholder: any;

        const prototype: {
        };

    }

    namespace debounce {
        const prototype: {
        };

    }

    namespace deburr {
        const prototype: {
        };

    }

    namespace defaultTo {
        const prototype: {
        };

    }

    namespace defaults {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace defaultsDeep {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace defer {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace delay {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace difference {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace differenceBy {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace differenceWith {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace divide {
        const prototype: {
        };

    }

    namespace drop {
        const prototype: {
        };

    }

    namespace dropRight {
        const prototype: {
        };

    }

    namespace dropRightWhile {
        const prototype: {
        };

    }

    namespace dropWhile {
        const prototype: {
        };

    }

    namespace each {
        const prototype: {
        };

    }

    namespace eachRight {
        const prototype: {
        };

    }

    namespace endsWith {
        const prototype: {
        };

    }

    namespace entries {
        const prototype: {
        };

    }

    namespace entriesIn {
        const prototype: {
        };

    }

    namespace eq {
        const prototype: {
        };

    }

    namespace escape {
        const prototype: {
        };

    }

    namespace escapeRegExp {
        const prototype: {
        };

    }

    namespace every {
        const prototype: {
        };

    }

    namespace extend {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace extendWith {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace fill {
        const prototype: {
        };

    }

    namespace filter {
        const prototype: {
        };

    }

    namespace find {
        const prototype: {
        };

    }

    namespace findIndex {
        const prototype: {
        };

    }

    namespace findKey {
        const prototype: {
        };

    }

    namespace findLast {
        const prototype: {
        };

    }

    namespace findLastIndex {
        const prototype: {
        };

    }

    namespace findLastKey {
        const prototype: {
        };

    }

    namespace first {
        const prototype: {
        };

    }

    namespace flatMap {
        const prototype: {
        };

    }

    namespace flatMapDeep {
        const prototype: {
        };

    }

    namespace flatMapDepth {
        const prototype: {
        };

    }

    namespace flatten {
        const prototype: {
        };

    }

    namespace flattenDeep {
        const prototype: {
        };

    }

    namespace flattenDepth {
        const prototype: {
        };

    }

    namespace flip {
        const prototype: {
        };

    }

    namespace floor {
        const prototype: {
        };

    }

    namespace flow {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace flowRight {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace forEach {
        const prototype: {
        };

    }

    namespace forEachRight {
        const prototype: {
        };

    }

    namespace forIn {
        const prototype: {
        };

    }

    namespace forInRight {
        const prototype: {
        };

    }

    namespace forOwn {
        const prototype: {
        };

    }

    namespace forOwnRight {
        const prototype: {
        };

    }

    namespace fromPairs {
        const prototype: {
        };

    }

    namespace functions {
        const prototype: {
        };

    }

    namespace functionsIn {
        const prototype: {
        };

    }

    namespace get {
        const prototype: {
        };

    }

    namespace groupBy {
        const prototype: {
        };

    }

    namespace gt {
        const prototype: {
        };

    }

    namespace gte {
        const prototype: {
        };

    }

    namespace has {
        const prototype: {
        };

    }

    namespace hasIn {
        const prototype: {
        };

    }

    namespace head {
        const prototype: {
        };

    }

    namespace identity {
        const prototype: {
        };

    }

    namespace inRange {
        const prototype: {
        };

    }

    namespace includes {
        const prototype: {
        };

    }

    namespace indexOf {
        const prototype: {
        };

    }

    namespace initial {
        const prototype: {
        };

    }

    namespace intersection {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace intersectionBy {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace intersectionWith {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace invert {
        const prototype: {
        };

    }

    namespace invertBy {
        const prototype: {
        };

    }

    namespace invoke {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace invokeMap {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace isArguments {
        const prototype: {
        };

    }

    namespace isArrayBuffer {
        const prototype: {
        };

    }

    namespace isArrayLike {
        const prototype: {
        };

    }

    namespace isArrayLikeObject {
        const prototype: {
        };

    }

    namespace isBoolean {
        const prototype: {
        };

    }

    namespace isBuffer {
        const prototype: {
        };

    }

    namespace isDate {
        const prototype: {
        };

    }

    namespace isElement {
        const prototype: {
        };

    }

    namespace isEmpty {
        const prototype: {
        };

    }

    namespace isEqual {
        const prototype: {
        };

    }

    namespace isEqualWith {
        const prototype: {
        };

    }

    namespace isError {
        const prototype: {
        };

    }

    namespace isFinite {
        const prototype: {
        };

    }

    namespace isFunction {
        const prototype: {
        };

    }

    namespace isInteger {
        const prototype: {
        };

    }

    namespace isLength {
        const prototype: {
        };

    }

    namespace isMap {
        const prototype: {
        };

    }

    namespace isMatch {
        const prototype: {
        };

    }

    namespace isMatchWith {
        const prototype: {
        };

    }

    namespace isNaN {
        const prototype: {
        };

    }

    namespace isNative {
        const prototype: {
        };

    }

    namespace isNil {
        const prototype: {
        };

    }

    namespace isNull {
        const prototype: {
        };

    }

    namespace isNumber {
        const prototype: {
        };

    }

    namespace isObject {
        const prototype: {
        };

    }

    namespace isObjectLike {
        const prototype: {
        };

    }

    namespace isPlainObject {
        const prototype: {
        };

    }

    namespace isRegExp {
        const prototype: {
        };

    }

    namespace isSafeInteger {
        const prototype: {
        };

    }

    namespace isSet {
        const prototype: {
        };

    }

    namespace isString {
        const prototype: {
        };

    }

    namespace isSymbol {
        const prototype: {
        };

    }

    namespace isTypedArray {
        const prototype: {
        };

    }

    namespace isUndefined {
        const prototype: {
        };

    }

    namespace isWeakMap {
        const prototype: {
        };

    }

    namespace isWeakSet {
        const prototype: {
        };

    }

    namespace iteratee {
        const prototype: {
        };

    }

    namespace join {
        const prototype: {
        };

    }

    namespace kebabCase {
        const prototype: {
        };

    }

    namespace keyBy {
        const prototype: {
        };

    }

    namespace keys {
        const prototype: {
        };

    }

    namespace keysIn {
        const prototype: {
        };

    }

    namespace last {
        const prototype: {
        };

    }

    namespace lastIndexOf {
        const prototype: {
        };

    }

    namespace lowerCase {
        const prototype: {
        };

    }

    namespace lowerFirst {
        const prototype: {
        };

    }

    namespace lt {
        const prototype: {
        };

    }

    namespace lte {
        const prototype: {
        };

    }

    namespace map {
        const prototype: {
        };

    }

    namespace mapKeys {
        const prototype: {
        };

    }

    namespace mapValues {
        const prototype: {
        };

    }

    namespace matches {
        const prototype: {
        };

    }

    namespace matchesProperty {
        const prototype: {
        };

    }

    namespace max {
        const prototype: {
        };

    }

    namespace maxBy {
        const prototype: {
        };

    }

    namespace mean {
        const prototype: {
        };

    }

    namespace meanBy {
        const prototype: {
        };

    }

    namespace memoize {
        class Cache {
            constructor(entries: any);

            clear(): void;

            delete(key: any): any;

            get(key: any): any;

            has(key: any): any;

            set(key: any, value: any): any;

        }

        const prototype: {
        };

        namespace Cache {
            namespace prototype {
                function clear(): void;

                function get(key: any): any;

                function has(key: any): any;

                function set(key: any, value: any): any;

                namespace clear {
                    // Too-deep object hierarchy from lodash.memoize.Cache.prototype.clear
                    const prototype: any;

                }

                namespace get {
                    // Too-deep object hierarchy from lodash.memoize.Cache.prototype.get
                    const prototype: any;

                }

                namespace has {
                    // Too-deep object hierarchy from lodash.memoize.Cache.prototype.has
                    const prototype: any;

                }

                namespace set {
                    // Too-deep object hierarchy from lodash.memoize.Cache.prototype.set
                    const prototype: any;

                }

            }

        }

    }

    namespace merge {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace mergeWith {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace method {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace methodOf {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace min {
        const prototype: {
        };

    }

    namespace minBy {
        const prototype: {
        };

    }

    namespace mixin {
        const prototype: {
        };

    }

    namespace multiply {
        const prototype: {
        };

    }

    namespace negate {
        const prototype: {
        };

    }

    namespace noConflict {
        const prototype: {
        };

    }

    namespace noop {
        const prototype: {
        };

    }

    namespace now {
        const prototype: {
        };

    }

    namespace nth {
        const prototype: {
        };

    }

    namespace nthArg {
        const prototype: {
        };

    }

    namespace omit {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace omitBy {
        const prototype: {
        };

    }

    namespace once {
        const prototype: {
        };

    }

    namespace orderBy {
        const prototype: {
        };

    }

    namespace over {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace overArgs {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace overEvery {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace overSome {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace pad {
        const prototype: {
        };

    }

    namespace padEnd {
        const prototype: {
        };

    }

    namespace padStart {
        const prototype: {
        };

    }

    namespace parseInt {
        const prototype: {
        };

    }

    namespace partial {
        // Circular reference from lodash.partial
        const placeholder: any;

        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace partialRight {
        // Circular reference from lodash.partialRight
        const placeholder: any;

        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace partition {
        const prototype: {
        };

    }

    namespace pick {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace pickBy {
        const prototype: {
        };

    }

    namespace property {
        const prototype: {
        };

    }

    namespace propertyOf {
        const prototype: {
        };

    }

    namespace prototype {
        function add(...args: any[]): any;

        function after(...args: any[]): any;

        function ary(...args: any[]): any;

        function assign(...args: any[]): any;

        function assignIn(...args: any[]): any;

        function assignInWith(...args: any[]): any;

        function assignWith(...args: any[]): any;

        function at(paths: any): any;

        function attempt(...args: any[]): any;

        function before(...args: any[]): any;

        function bind(...args: any[]): any;

        function bindAll(...args: any[]): any;

        function bindKey(...args: any[]): any;

        function camelCase(...args: any[]): any;

        function capitalize(...args: any[]): any;

        function castArray(...args: any[]): any;

        function ceil(...args: any[]): any;

        function chain(): any;

        function chunk(...args: any[]): any;

        function clamp(...args: any[]): any;

        function clone(...args: any[]): any;

        function cloneDeep(...args: any[]): any;

        function cloneDeepWith(...args: any[]): any;

        function cloneWith(...args: any[]): any;

        function commit(): any;

        function compact(...args: any[]): any;

        function concat(...args: any[]): any;

        function cond(...args: any[]): any;

        function conforms(...args: any[]): any;

        function conformsTo(...args: any[]): any;

        function constant(...args: any[]): any;

        function countBy(...args: any[]): any;

        function create(...args: any[]): any;

        function curry(...args: any[]): any;

        function curryRight(...args: any[]): any;

        function debounce(...args: any[]): any;

        function deburr(...args: any[]): any;

        function defaultTo(...args: any[]): any;

        function defaults(...args: any[]): any;

        function defaultsDeep(...args: any[]): any;

        function defer(...args: any[]): any;

        function delay(...args: any[]): any;

        function difference(...args: any[]): any;

        function differenceBy(...args: any[]): any;

        function differenceWith(...args: any[]): any;

        function divide(...args: any[]): any;

        function drop(...args: any[]): any;

        function dropRight(...args: any[]): any;

        function dropRightWhile(...args: any[]): any;

        function dropWhile(...args: any[]): any;

        function each(...args: any[]): any;

        function eachRight(...args: any[]): any;

        function endsWith(...args: any[]): any;

        function entries(...args: any[]): any;

        function entriesIn(...args: any[]): any;

        function eq(...args: any[]): any;

        function escape(...args: any[]): any;

        function escapeRegExp(...args: any[]): any;

        function every(...args: any[]): any;

        function extend(...args: any[]): any;

        function extendWith(...args: any[]): any;

        function fill(...args: any[]): any;

        function filter(...args: any[]): any;

        function find(...args: any[]): any;

        function findIndex(...args: any[]): any;

        function findKey(...args: any[]): any;

        function findLast(...args: any[]): any;

        function findLastIndex(...args: any[]): any;

        function findLastKey(...args: any[]): any;

        function first(...args: any[]): any;

        function flatMap(...args: any[]): any;

        function flatMapDeep(...args: any[]): any;

        function flatMapDepth(...args: any[]): any;

        function flatten(...args: any[]): any;

        function flattenDeep(...args: any[]): any;

        function flattenDepth(...args: any[]): any;

        function flip(...args: any[]): any;

        function floor(...args: any[]): any;

        function flow(...args: any[]): any;

        function flowRight(...args: any[]): any;

        function forEach(...args: any[]): any;

        function forEachRight(...args: any[]): any;

        function forIn(...args: any[]): any;

        function forInRight(...args: any[]): any;

        function forOwn(...args: any[]): any;

        function forOwnRight(...args: any[]): any;

        function fromPairs(...args: any[]): any;

        function functions(...args: any[]): any;

        function functionsIn(...args: any[]): any;

        function get(...args: any[]): any;

        function groupBy(...args: any[]): any;

        function gt(...args: any[]): any;

        function gte(...args: any[]): any;

        function has(...args: any[]): any;

        function hasIn(...args: any[]): any;

        function head(...args: any[]): any;

        function identity(...args: any[]): any;

        function inRange(...args: any[]): any;

        function includes(...args: any[]): any;

        function indexOf(...args: any[]): any;

        function initial(...args: any[]): any;

        function intersection(...args: any[]): any;

        function intersectionBy(...args: any[]): any;

        function intersectionWith(...args: any[]): any;

        function invert(...args: any[]): any;

        function invertBy(...args: any[]): any;

        function invoke(...args: any[]): any;

        function invokeMap(...args: any[]): any;

        function isArguments(...args: any[]): any;

        function isArray(...args: any[]): any;

        function isArrayBuffer(...args: any[]): any;

        function isArrayLike(...args: any[]): any;

        function isArrayLikeObject(...args: any[]): any;

        function isBoolean(...args: any[]): any;

        function isBuffer(...args: any[]): any;

        function isDate(...args: any[]): any;

        function isElement(...args: any[]): any;

        function isEmpty(...args: any[]): any;

        function isEqual(...args: any[]): any;

        function isEqualWith(...args: any[]): any;

        function isError(...args: any[]): any;

        function isFinite(...args: any[]): any;

        function isFunction(...args: any[]): any;

        function isInteger(...args: any[]): any;

        function isLength(...args: any[]): any;

        function isMap(...args: any[]): any;

        function isMatch(...args: any[]): any;

        function isMatchWith(...args: any[]): any;

        function isNaN(...args: any[]): any;

        function isNative(...args: any[]): any;

        function isNil(...args: any[]): any;

        function isNull(...args: any[]): any;

        function isNumber(...args: any[]): any;

        function isObject(...args: any[]): any;

        function isObjectLike(...args: any[]): any;

        function isPlainObject(...args: any[]): any;

        function isRegExp(...args: any[]): any;

        function isSafeInteger(...args: any[]): any;

        function isSet(...args: any[]): any;

        function isString(...args: any[]): any;

        function isSymbol(...args: any[]): any;

        function isTypedArray(...args: any[]): any;

        function isUndefined(...args: any[]): any;

        function isWeakMap(...args: any[]): any;

        function isWeakSet(...args: any[]): any;

        function iteratee(...args: any[]): any;

        function join(...args: any[]): any;

        function kebabCase(...args: any[]): any;

        function keyBy(...args: any[]): any;

        function keys(...args: any[]): any;

        function keysIn(...args: any[]): any;

        function last(...args: any[]): any;

        function lastIndexOf(...args: any[]): any;

        function lowerCase(...args: any[]): any;

        function lowerFirst(...args: any[]): any;

        function lt(...args: any[]): any;

        function lte(...args: any[]): any;

        function map(...args: any[]): any;

        function mapKeys(...args: any[]): any;

        function mapValues(...args: any[]): any;

        function matches(...args: any[]): any;

        function matchesProperty(...args: any[]): any;

        function max(...args: any[]): any;

        function maxBy(...args: any[]): any;

        function mean(...args: any[]): any;

        function meanBy(...args: any[]): any;

        function memoize(...args: any[]): any;

        function merge(...args: any[]): any;

        function mergeWith(...args: any[]): any;

        function method(...args: any[]): any;

        function methodOf(...args: any[]): any;

        function min(...args: any[]): any;

        function minBy(...args: any[]): any;

        function mixin(...args: any[]): any;

        function multiply(...args: any[]): any;

        function negate(...args: any[]): any;

        function next(): any;

        function noConflict(...args: any[]): any;

        function noop(...args: any[]): any;

        function now(...args: any[]): any;

        function nth(...args: any[]): any;

        function nthArg(...args: any[]): any;

        function omit(...args: any[]): any;

        function omitBy(...args: any[]): any;

        function once(...args: any[]): any;

        function orderBy(...args: any[]): any;

        function over(...args: any[]): any;

        function overArgs(...args: any[]): any;

        function overEvery(...args: any[]): any;

        function overSome(...args: any[]): any;

        function pad(...args: any[]): any;

        function padEnd(...args: any[]): any;

        function padStart(...args: any[]): any;

        function parseInt(...args: any[]): any;

        function partial(...args: any[]): any;

        function partialRight(...args: any[]): any;

        function partition(...args: any[]): any;

        function pick(...args: any[]): any;

        function pickBy(...args: any[]): any;

        function plant(value: any): any;

        function pop(...args: any[]): any;

        function property(...args: any[]): any;

        function propertyOf(...args: any[]): any;

        function pull(...args: any[]): any;

        function pullAll(...args: any[]): any;

        function pullAllBy(...args: any[]): any;

        function pullAllWith(...args: any[]): any;

        function pullAt(...args: any[]): any;

        function push(...args: any[]): any;

        function random(...args: any[]): any;

        function range(...args: any[]): any;

        function rangeRight(...args: any[]): any;

        function rearg(...args: any[]): any;

        function reduce(...args: any[]): any;

        function reduceRight(...args: any[]): any;

        function reject(...args: any[]): any;

        function remove(...args: any[]): any;

        function repeat(...args: any[]): any;

        function replace(...args: any[]): any;

        function rest(...args: any[]): any;

        function result(...args: any[]): any;

        function reverse(): any;

        function round(...args: any[]): any;

        function runInContext(...args: any[]): any;

        function sample(...args: any[]): any;

        function sampleSize(...args: any[]): any;

        function set(...args: any[]): any;

        function setWith(...args: any[]): any;

        function shift(...args: any[]): any;

        function shuffle(...args: any[]): any;

        function size(...args: any[]): any;

        function slice(...args: any[]): any;

        function snakeCase(...args: any[]): any;

        function some(...args: any[]): any;

        function sort(...args: any[]): any;

        function sortBy(...args: any[]): any;

        function sortedIndex(...args: any[]): any;

        function sortedIndexBy(...args: any[]): any;

        function sortedIndexOf(...args: any[]): any;

        function sortedLastIndex(...args: any[]): any;

        function sortedLastIndexBy(...args: any[]): any;

        function sortedLastIndexOf(...args: any[]): any;

        function sortedUniq(...args: any[]): any;

        function sortedUniqBy(...args: any[]): any;

        function splice(...args: any[]): any;

        function split(...args: any[]): any;

        function spread(...args: any[]): any;

        function startCase(...args: any[]): any;

        function startsWith(...args: any[]): any;

        function stubArray(...args: any[]): any;

        function stubFalse(...args: any[]): any;

        function stubObject(...args: any[]): any;

        function stubString(...args: any[]): any;

        function stubTrue(...args: any[]): any;

        function subtract(...args: any[]): any;

        function sum(...args: any[]): any;

        function sumBy(...args: any[]): any;

        function tail(...args: any[]): any;

        function take(...args: any[]): any;

        function takeRight(...args: any[]): any;

        function takeRightWhile(...args: any[]): any;

        function takeWhile(...args: any[]): any;

        function tap(...args: any[]): any;

        function template(...args: any[]): any;

        function throttle(...args: any[]): any;

        function thru(...args: any[]): any;

        function times(...args: any[]): any;

        function toArray(...args: any[]): any;

        function toFinite(...args: any[]): any;

        function toInteger(...args: any[]): any;

        function toJSON(): any;

        function toLength(...args: any[]): any;

        function toLower(...args: any[]): any;

        function toNumber(...args: any[]): any;

        function toPairs(...args: any[]): any;

        function toPairsIn(...args: any[]): any;

        function toPath(...args: any[]): any;

        function toPlainObject(...args: any[]): any;

        function toSafeInteger(...args: any[]): any;

        function toString(...args: any[]): any;

        function toUpper(...args: any[]): any;

        function transform(...args: any[]): any;

        function trim(...args: any[]): any;

        function trimEnd(...args: any[]): any;

        function trimStart(...args: any[]): any;

        function truncate(...args: any[]): any;

        function unary(...args: any[]): any;

        function unescape(...args: any[]): any;

        function union(...args: any[]): any;

        function unionBy(...args: any[]): any;

        function unionWith(...args: any[]): any;

        function uniq(...args: any[]): any;

        function uniqBy(...args: any[]): any;

        function uniqWith(...args: any[]): any;

        function uniqueId(...args: any[]): any;

        function unset(...args: any[]): any;

        function unshift(...args: any[]): any;

        function unzip(...args: any[]): any;

        function unzipWith(...args: any[]): any;

        function update(...args: any[]): any;

        function updateWith(...args: any[]): any;

        function upperCase(...args: any[]): any;

        function upperFirst(...args: any[]): any;

        function value(): any;

        function valueOf(): any;

        function values(...args: any[]): any;

        function valuesIn(...args: any[]): any;

        function without(...args: any[]): any;

        function words(...args: any[]): any;

        function wrap(...args: any[]): any;

        function xor(...args: any[]): any;

        function xorBy(...args: any[]): any;

        function xorWith(...args: any[]): any;

        function zip(...args: any[]): any;

        function zipObject(...args: any[]): any;

        function zipObjectDeep(...args: any[]): any;

        function zipWith(...args: any[]): any;

        namespace add {
            const prototype: {
            };

        }

        namespace after {
            const prototype: {
            };

        }

        namespace ary {
            const prototype: {
            };

        }

        namespace assign {
            const prototype: {
            };

        }

        namespace assignIn {
            const prototype: {
            };

        }

        namespace assignInWith {
            const prototype: {
            };

        }

        namespace assignWith {
            const prototype: {
            };

        }

        namespace at {
            const prototype: {
            };

            function toString(): any;

            namespace toString {
                const prototype: {
                };

            }

        }

        namespace attempt {
            const prototype: {
            };

        }

        namespace before {
            const prototype: {
            };

        }

        namespace bind {
            const prototype: {
            };

        }

        namespace bindAll {
            const prototype: {
            };

        }

        namespace bindKey {
            const prototype: {
            };

        }

        namespace camelCase {
            const prototype: {
            };

        }

        namespace capitalize {
            const prototype: {
            };

        }

        namespace castArray {
            const prototype: {
            };

        }

        namespace ceil {
            const prototype: {
            };

        }

        namespace chain {
            const prototype: {
            };

        }

        namespace chunk {
            const prototype: {
            };

        }

        namespace clamp {
            const prototype: {
            };

        }

        namespace clone {
            const prototype: {
            };

        }

        namespace cloneDeep {
            const prototype: {
            };

        }

        namespace cloneDeepWith {
            const prototype: {
            };

        }

        namespace cloneWith {
            const prototype: {
            };

        }

        namespace commit {
            const prototype: {
            };

        }

        namespace compact {
            const prototype: {
            };

        }

        namespace concat {
            const prototype: {
            };

        }

        namespace cond {
            const prototype: {
            };

        }

        namespace conforms {
            const prototype: {
            };

        }

        namespace conformsTo {
            const prototype: {
            };

        }

        namespace constant {
            const prototype: {
            };

        }

        namespace countBy {
            const prototype: {
            };

        }

        namespace create {
            const prototype: {
            };

        }

        namespace curry {
            const prototype: {
            };

        }

        namespace curryRight {
            const prototype: {
            };

        }

        namespace debounce {
            const prototype: {
            };

        }

        namespace deburr {
            const prototype: {
            };

        }

        namespace defaultTo {
            const prototype: {
            };

        }

        namespace defaults {
            const prototype: {
            };

        }

        namespace defaultsDeep {
            const prototype: {
            };

        }

        namespace defer {
            const prototype: {
            };

        }

        namespace delay {
            const prototype: {
            };

        }

        namespace difference {
            const prototype: {
            };

        }

        namespace differenceBy {
            const prototype: {
            };

        }

        namespace differenceWith {
            const prototype: {
            };

        }

        namespace divide {
            const prototype: {
            };

        }

        namespace drop {
            const prototype: {
            };

        }

        namespace dropRight {
            const prototype: {
            };

        }

        namespace dropRightWhile {
            const prototype: {
            };

        }

        namespace dropWhile {
            const prototype: {
            };

        }

        namespace each {
            const prototype: {
            };

        }

        namespace eachRight {
            const prototype: {
            };

        }

        namespace endsWith {
            const prototype: {
            };

        }

        namespace entries {
            const prototype: {
            };

        }

        namespace entriesIn {
            const prototype: {
            };

        }

        namespace eq {
            const prototype: {
            };

        }

        namespace escape {
            const prototype: {
            };

        }

        namespace escapeRegExp {
            const prototype: {
            };

        }

        namespace every {
            const prototype: {
            };

        }

        namespace extend {
            const prototype: {
            };

        }

        namespace extendWith {
            const prototype: {
            };

        }

        namespace fill {
            const prototype: {
            };

        }

        namespace filter {
            const prototype: {
            };

        }

        namespace find {
            const prototype: {
            };

        }

        namespace findIndex {
            const prototype: {
            };

        }

        namespace findKey {
            const prototype: {
            };

        }

        namespace findLast {
            const prototype: {
            };

        }

        namespace findLastIndex {
            const prototype: {
            };

        }

        namespace findLastKey {
            const prototype: {
            };

        }

        namespace first {
            const prototype: {
            };

        }

        namespace flatMap {
            const prototype: {
            };

        }

        namespace flatMapDeep {
            const prototype: {
            };

        }

        namespace flatMapDepth {
            const prototype: {
            };

        }

        namespace flatten {
            const prototype: {
            };

        }

        namespace flattenDeep {
            const prototype: {
            };

        }

        namespace flattenDepth {
            const prototype: {
            };

        }

        namespace flip {
            const prototype: {
            };

        }

        namespace floor {
            const prototype: {
            };

        }

        namespace flow {
            const prototype: {
            };

        }

        namespace flowRight {
            const prototype: {
            };

        }

        namespace forEach {
            const prototype: {
            };

        }

        namespace forEachRight {
            const prototype: {
            };

        }

        namespace forIn {
            const prototype: {
            };

        }

        namespace forInRight {
            const prototype: {
            };

        }

        namespace forOwn {
            const prototype: {
            };

        }

        namespace forOwnRight {
            const prototype: {
            };

        }

        namespace fromPairs {
            const prototype: {
            };

        }

        namespace functions {
            const prototype: {
            };

        }

        namespace functionsIn {
            const prototype: {
            };

        }

        namespace get {
            const prototype: {
            };

        }

        namespace groupBy {
            const prototype: {
            };

        }

        namespace gt {
            const prototype: {
            };

        }

        namespace gte {
            const prototype: {
            };

        }

        namespace has {
            const prototype: {
            };

        }

        namespace hasIn {
            const prototype: {
            };

        }

        namespace head {
            const prototype: {
            };

        }

        namespace identity {
            const prototype: {
            };

        }

        namespace inRange {
            const prototype: {
            };

        }

        namespace includes {
            const prototype: {
            };

        }

        namespace indexOf {
            const prototype: {
            };

        }

        namespace initial {
            const prototype: {
            };

        }

        namespace intersection {
            const prototype: {
            };

        }

        namespace intersectionBy {
            const prototype: {
            };

        }

        namespace intersectionWith {
            const prototype: {
            };

        }

        namespace invert {
            const prototype: {
            };

        }

        namespace invertBy {
            const prototype: {
            };

        }

        namespace invoke {
            const prototype: {
            };

        }

        namespace invokeMap {
            const prototype: {
            };

        }

        namespace isArguments {
            const prototype: {
            };

        }

        namespace isArray {
            const prototype: {
            };

        }

        namespace isArrayBuffer {
            const prototype: {
            };

        }

        namespace isArrayLike {
            const prototype: {
            };

        }

        namespace isArrayLikeObject {
            const prototype: {
            };

        }

        namespace isBoolean {
            const prototype: {
            };

        }

        namespace isBuffer {
            const prototype: {
            };

        }

        namespace isDate {
            const prototype: {
            };

        }

        namespace isElement {
            const prototype: {
            };

        }

        namespace isEmpty {
            const prototype: {
            };

        }

        namespace isEqual {
            const prototype: {
            };

        }

        namespace isEqualWith {
            const prototype: {
            };

        }

        namespace isError {
            const prototype: {
            };

        }

        namespace isFinite {
            const prototype: {
            };

        }

        namespace isFunction {
            const prototype: {
            };

        }

        namespace isInteger {
            const prototype: {
            };

        }

        namespace isLength {
            const prototype: {
            };

        }

        namespace isMap {
            const prototype: {
            };

        }

        namespace isMatch {
            const prototype: {
            };

        }

        namespace isMatchWith {
            const prototype: {
            };

        }

        namespace isNaN {
            const prototype: {
            };

        }

        namespace isNative {
            const prototype: {
            };

        }

        namespace isNil {
            const prototype: {
            };

        }

        namespace isNull {
            const prototype: {
            };

        }

        namespace isNumber {
            const prototype: {
            };

        }

        namespace isObject {
            const prototype: {
            };

        }

        namespace isObjectLike {
            const prototype: {
            };

        }

        namespace isPlainObject {
            const prototype: {
            };

        }

        namespace isRegExp {
            const prototype: {
            };

        }

        namespace isSafeInteger {
            const prototype: {
            };

        }

        namespace isSet {
            const prototype: {
            };

        }

        namespace isString {
            const prototype: {
            };

        }

        namespace isSymbol {
            const prototype: {
            };

        }

        namespace isTypedArray {
            const prototype: {
            };

        }

        namespace isUndefined {
            const prototype: {
            };

        }

        namespace isWeakMap {
            const prototype: {
            };

        }

        namespace isWeakSet {
            const prototype: {
            };

        }

        namespace iteratee {
            const prototype: {
            };

        }

        namespace join {
            const prototype: {
            };

        }

        namespace kebabCase {
            const prototype: {
            };

        }

        namespace keyBy {
            const prototype: {
            };

        }

        namespace keys {
            const prototype: {
            };

        }

        namespace keysIn {
            const prototype: {
            };

        }

        namespace last {
            const prototype: {
            };

        }

        namespace lastIndexOf {
            const prototype: {
            };

        }

        namespace lowerCase {
            const prototype: {
            };

        }

        namespace lowerFirst {
            const prototype: {
            };

        }

        namespace lt {
            const prototype: {
            };

        }

        namespace lte {
            const prototype: {
            };

        }

        namespace map {
            const prototype: {
            };

        }

        namespace mapKeys {
            const prototype: {
            };

        }

        namespace mapValues {
            const prototype: {
            };

        }

        namespace matches {
            const prototype: {
            };

        }

        namespace matchesProperty {
            const prototype: {
            };

        }

        namespace max {
            const prototype: {
            };

        }

        namespace maxBy {
            const prototype: {
            };

        }

        namespace mean {
            const prototype: {
            };

        }

        namespace meanBy {
            const prototype: {
            };

        }

        namespace memoize {
            const prototype: {
            };

        }

        namespace merge {
            const prototype: {
            };

        }

        namespace mergeWith {
            const prototype: {
            };

        }

        namespace method {
            const prototype: {
            };

        }

        namespace methodOf {
            const prototype: {
            };

        }

        namespace min {
            const prototype: {
            };

        }

        namespace minBy {
            const prototype: {
            };

        }

        namespace mixin {
            const prototype: {
            };

        }

        namespace multiply {
            const prototype: {
            };

        }

        namespace negate {
            const prototype: {
            };

        }

        namespace next {
            const prototype: {
            };

        }

        namespace noConflict {
            const prototype: {
            };

        }

        namespace noop {
            const prototype: {
            };

        }

        namespace now {
            const prototype: {
            };

        }

        namespace nth {
            const prototype: {
            };

        }

        namespace nthArg {
            const prototype: {
            };

        }

        namespace omit {
            const prototype: {
            };

        }

        namespace omitBy {
            const prototype: {
            };

        }

        namespace once {
            const prototype: {
            };

        }

        namespace orderBy {
            const prototype: {
            };

        }

        namespace over {
            const prototype: {
            };

        }

        namespace overArgs {
            const prototype: {
            };

        }

        namespace overEvery {
            const prototype: {
            };

        }

        namespace overSome {
            const prototype: {
            };

        }

        namespace pad {
            const prototype: {
            };

        }

        namespace padEnd {
            const prototype: {
            };

        }

        namespace padStart {
            const prototype: {
            };

        }

        namespace parseInt {
            const prototype: {
            };

        }

        namespace partial {
            const prototype: {
            };

        }

        namespace partialRight {
            const prototype: {
            };

        }

        namespace partition {
            const prototype: {
            };

        }

        namespace pick {
            const prototype: {
            };

        }

        namespace pickBy {
            const prototype: {
            };

        }

        namespace plant {
            const prototype: {
            };

        }

        namespace pop {
            const prototype: {
            };

        }

        namespace property {
            const prototype: {
            };

        }

        namespace propertyOf {
            const prototype: {
            };

        }

        namespace pull {
            const prototype: {
            };

        }

        namespace pullAll {
            const prototype: {
            };

        }

        namespace pullAllBy {
            const prototype: {
            };

        }

        namespace pullAllWith {
            const prototype: {
            };

        }

        namespace pullAt {
            const prototype: {
            };

        }

        namespace push {
            const prototype: {
            };

        }

        namespace random {
            const prototype: {
            };

        }

        namespace range {
            const prototype: {
            };

        }

        namespace rangeRight {
            const prototype: {
            };

        }

        namespace rearg {
            const prototype: {
            };

        }

        namespace reduce {
            const prototype: {
            };

        }

        namespace reduceRight {
            const prototype: {
            };

        }

        namespace reject {
            const prototype: {
            };

        }

        namespace remove {
            const prototype: {
            };

        }

        namespace repeat {
            const prototype: {
            };

        }

        namespace replace {
            const prototype: {
            };

        }

        namespace rest {
            const prototype: {
            };

        }

        namespace result {
            const prototype: {
            };

        }

        namespace reverse {
            const prototype: {
            };

        }

        namespace round {
            const prototype: {
            };

        }

        namespace runInContext {
            const prototype: {
            };

        }

        namespace sample {
            const prototype: {
            };

        }

        namespace sampleSize {
            const prototype: {
            };

        }

        namespace set {
            const prototype: {
            };

        }

        namespace setWith {
            const prototype: {
            };

        }

        namespace shift {
            const prototype: {
            };

        }

        namespace shuffle {
            const prototype: {
            };

        }

        namespace size {
            const prototype: {
            };

        }

        namespace slice {
            const prototype: {
            };

        }

        namespace snakeCase {
            const prototype: {
            };

        }

        namespace some {
            const prototype: {
            };

        }

        namespace sort {
            const prototype: {
            };

        }

        namespace sortBy {
            const prototype: {
            };

        }

        namespace sortedIndex {
            const prototype: {
            };

        }

        namespace sortedIndexBy {
            const prototype: {
            };

        }

        namespace sortedIndexOf {
            const prototype: {
            };

        }

        namespace sortedLastIndex {
            const prototype: {
            };

        }

        namespace sortedLastIndexBy {
            const prototype: {
            };

        }

        namespace sortedLastIndexOf {
            const prototype: {
            };

        }

        namespace sortedUniq {
            const prototype: {
            };

        }

        namespace sortedUniqBy {
            const prototype: {
            };

        }

        namespace splice {
            const prototype: {
            };

        }

        namespace split {
            const prototype: {
            };

        }

        namespace spread {
            const prototype: {
            };

        }

        namespace startCase {
            const prototype: {
            };

        }

        namespace startsWith {
            const prototype: {
            };

        }

        namespace stubArray {
            const prototype: {
            };

        }

        namespace stubFalse {
            const prototype: {
            };

        }

        namespace stubObject {
            const prototype: {
            };

        }

        namespace stubString {
            const prototype: {
            };

        }

        namespace stubTrue {
            const prototype: {
            };

        }

        namespace subtract {
            const prototype: {
            };

        }

        namespace sum {
            const prototype: {
            };

        }

        namespace sumBy {
            const prototype: {
            };

        }

        namespace tail {
            const prototype: {
            };

        }

        namespace take {
            const prototype: {
            };

        }

        namespace takeRight {
            const prototype: {
            };

        }

        namespace takeRightWhile {
            const prototype: {
            };

        }

        namespace takeWhile {
            const prototype: {
            };

        }

        namespace tap {
            const prototype: {
            };

        }

        namespace template {
            const prototype: {
            };

        }

        namespace throttle {
            const prototype: {
            };

        }

        namespace thru {
            const prototype: {
            };

        }

        namespace times {
            const prototype: {
            };

        }

        namespace toArray {
            const prototype: {
            };

        }

        namespace toFinite {
            const prototype: {
            };

        }

        namespace toInteger {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

        namespace toLength {
            const prototype: {
            };

        }

        namespace toLower {
            const prototype: {
            };

        }

        namespace toNumber {
            const prototype: {
            };

        }

        namespace toPairs {
            const prototype: {
            };

        }

        namespace toPairsIn {
            const prototype: {
            };

        }

        namespace toPath {
            const prototype: {
            };

        }

        namespace toPlainObject {
            const prototype: {
            };

        }

        namespace toSafeInteger {
            const prototype: {
            };

        }

        namespace toString {
            const prototype: {
            };

        }

        namespace toUpper {
            const prototype: {
            };

        }

        namespace transform {
            const prototype: {
            };

        }

        namespace trim {
            const prototype: {
            };

        }

        namespace trimEnd {
            const prototype: {
            };

        }

        namespace trimStart {
            const prototype: {
            };

        }

        namespace truncate {
            const prototype: {
            };

        }

        namespace unary {
            const prototype: {
            };

        }

        namespace unescape {
            const prototype: {
            };

        }

        namespace union {
            const prototype: {
            };

        }

        namespace unionBy {
            const prototype: {
            };

        }

        namespace unionWith {
            const prototype: {
            };

        }

        namespace uniq {
            const prototype: {
            };

        }

        namespace uniqBy {
            const prototype: {
            };

        }

        namespace uniqWith {
            const prototype: {
            };

        }

        namespace uniqueId {
            const prototype: {
            };

        }

        namespace unset {
            const prototype: {
            };

        }

        namespace unshift {
            const prototype: {
            };

        }

        namespace unzip {
            const prototype: {
            };

        }

        namespace unzipWith {
            const prototype: {
            };

        }

        namespace update {
            const prototype: {
            };

        }

        namespace updateWith {
            const prototype: {
            };

        }

        namespace upperCase {
            const prototype: {
            };

        }

        namespace upperFirst {
            const prototype: {
            };

        }

        namespace value {
            const prototype: {
            };

        }

        namespace valueOf {
            const prototype: {
            };

        }

        namespace values {
            const prototype: {
            };

        }

        namespace valuesIn {
            const prototype: {
            };

        }

        namespace without {
            const prototype: {
            };

        }

        namespace words {
            const prototype: {
            };

        }

        namespace wrap {
            const prototype: {
            };

        }

        namespace xor {
            const prototype: {
            };

        }

        namespace xorBy {
            const prototype: {
            };

        }

        namespace xorWith {
            const prototype: {
            };

        }

        namespace zip {
            const prototype: {
            };

        }

        namespace zipObject {
            const prototype: {
            };

        }

        namespace zipObjectDeep {
            const prototype: {
            };

        }

        namespace zipWith {
            const prototype: {
            };

        }

    }

    namespace pull {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace pullAll {
        const prototype: {
        };

    }

    namespace pullAllBy {
        const prototype: {
        };

    }

    namespace pullAllWith {
        const prototype: {
        };

    }

    namespace pullAt {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace random {
        const prototype: {
        };

    }

    namespace range {
        const prototype: {
        };

    }

    namespace rangeRight {
        const prototype: {
        };

    }

    namespace rearg {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace reduce {
        const prototype: {
        };

    }

    namespace reduceRight {
        const prototype: {
        };

    }

    namespace reject {
        const prototype: {
        };

    }

    namespace remove {
        const prototype: {
        };

    }

    namespace repeat {
        const prototype: {
        };

    }

    namespace replace {
        const prototype: {
        };

    }

    namespace rest {
        const prototype: {
        };

    }

    namespace result {
        const prototype: {
        };

    }

    namespace reverse {
        const prototype: {
        };

    }

    namespace round {
        const prototype: {
        };

    }

    namespace runInContext {
        const prototype: {
        };

    }

    namespace sample {
        const prototype: {
        };

    }

    namespace sampleSize {
        const prototype: {
        };

    }

    namespace set {
        const prototype: {
        };

    }

    namespace setWith {
        const prototype: {
        };

    }

    namespace shuffle {
        const prototype: {
        };

    }

    namespace size {
        const prototype: {
        };

    }

    namespace slice {
        const prototype: {
        };

    }

    namespace snakeCase {
        const prototype: {
        };

    }

    namespace some {
        const prototype: {
        };

    }

    namespace sortBy {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace sortedIndex {
        const prototype: {
        };

    }

    namespace sortedIndexBy {
        const prototype: {
        };

    }

    namespace sortedIndexOf {
        const prototype: {
        };

    }

    namespace sortedLastIndex {
        const prototype: {
        };

    }

    namespace sortedLastIndexBy {
        const prototype: {
        };

    }

    namespace sortedLastIndexOf {
        const prototype: {
        };

    }

    namespace sortedUniq {
        const prototype: {
        };

    }

    namespace sortedUniqBy {
        const prototype: {
        };

    }

    namespace split {
        const prototype: {
        };

    }

    namespace spread {
        const prototype: {
        };

    }

    namespace startCase {
        const prototype: {
        };

    }

    namespace startsWith {
        const prototype: {
        };

    }

    namespace stubArray {
        const prototype: {
        };

    }

    namespace stubFalse {
        const prototype: {
        };

    }

    namespace stubObject {
        const prototype: {
        };

    }

    namespace stubString {
        const prototype: {
        };

    }

    namespace stubTrue {
        const prototype: {
        };

    }

    namespace subtract {
        const prototype: {
        };

    }

    namespace sum {
        const prototype: {
        };

    }

    namespace sumBy {
        const prototype: {
        };

    }

    namespace tail {
        const prototype: {
        };

    }

    namespace take {
        const prototype: {
        };

    }

    namespace takeRight {
        const prototype: {
        };

    }

    namespace takeRightWhile {
        const prototype: {
        };

    }

    namespace takeWhile {
        const prototype: {
        };

    }

    namespace tap {
        const prototype: {
        };

    }

    namespace template {
        const prototype: {
        };

    }

    namespace throttle {
        const prototype: {
        };

    }

    namespace thru {
        const prototype: {
        };

    }

    namespace times {
        const prototype: {
        };

    }

    namespace toArray {
        const prototype: {
        };

    }

    namespace toFinite {
        const prototype: {
        };

    }

    namespace toInteger {
        const prototype: {
        };

    }

    namespace toLength {
        const prototype: {
        };

    }

    namespace toLower {
        const prototype: {
        };

    }

    namespace toNumber {
        const prototype: {
        };

    }

    namespace toPairs {
        const prototype: {
        };

    }

    namespace toPairsIn {
        const prototype: {
        };

    }

    namespace toPath {
        const prototype: {
        };

    }

    namespace toPlainObject {
        const prototype: {
        };

    }

    namespace toSafeInteger {
        const prototype: {
        };

    }

    namespace toString {
        const prototype: {
        };

    }

    namespace toUpper {
        const prototype: {
        };

    }

    namespace transform {
        const prototype: {
        };

    }

    namespace trim {
        const prototype: {
        };

    }

    namespace trimEnd {
        const prototype: {
        };

    }

    namespace trimStart {
        const prototype: {
        };

    }

    namespace truncate {
        const prototype: {
        };

    }

    namespace unary {
        const prototype: {
        };

    }

    namespace unescape {
        const prototype: {
        };

    }

    namespace union {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace unionBy {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace unionWith {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace uniq {
        const prototype: {
        };

    }

    namespace uniqBy {
        const prototype: {
        };

    }

    namespace uniqWith {
        const prototype: {
        };

    }

    namespace uniqueId {
        const prototype: {
        };

    }

    namespace unset {
        const prototype: {
        };

    }

    namespace unzip {
        const prototype: {
        };

    }

    namespace unzipWith {
        const prototype: {
        };

    }

    namespace update {
        const prototype: {
        };

    }

    namespace updateWith {
        const prototype: {
        };

    }

    namespace upperCase {
        const prototype: {
        };

    }

    namespace upperFirst {
        const prototype: {
        };

    }

    namespace values {
        const prototype: {
        };

    }

    namespace valuesIn {
        const prototype: {
        };

    }

    namespace without {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace words {
        const prototype: {
        };

    }

    namespace wrap {
        const prototype: {
        };

    }

    namespace xor {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace xorBy {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace xorWith {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace zip {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

    namespace zipObject {
        const prototype: {
        };

    }

    namespace zipObjectDeep {
        const prototype: {
        };

    }

    namespace zipWith {
        const prototype: {
        };

        function toString(): any;

        namespace toString {
            const prototype: {
            };

        }

    }

}

