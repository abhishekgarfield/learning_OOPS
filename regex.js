console.log(("ac").match("^([ab*c])$"));
VM299:1 null
undefined
console.log(("abc").match("^([ab*c])$"));
VM336:1 null
undefined
console.log(("abc").match("^([abc])$"));
VM354:1 null
undefined
console.log(("abc").match("^([a-z])$"));
VM383:1 null
undefined
console.log(("a").match("^([a-z])$"));
VM422:1 (2) ['a', 'a', index: 0, input: 'a', groups: undefined]
undefined
console.log(("abc").match("^([a-z])$"));
VM459:1 null
undefined
console.log(("abc").match("^([a-z*])$"));
VM476:1 null
undefined
console.log(("abc").match("^([a*])$"));
VM496:1 null
undefined
console.log(("abc").match("^([a*b*c*])$"));
VM523:1 null
undefined
console.log(("abc").match("^([ab*c])$"));
VM550:1 null
undefined
console.log(("abbc").match("^([ab*c])$"));
VM587:1 null
undefined
console.log(("abcc").match("^([ab*c])$"));
VM627:1 null
undefined
console.log(("a").match("^([ab*c])$"));
VM667:1 (2) ['a', 'a', index: 0, input: 'a', groups: undefined]
undefined
console.log(("a").match("^([ab*c]{4,5})$"));
VM691:1 null
undefined
console.log(("abccc").match("^([ab*c]{4,5})$"));
VM738:1 (2) ['abccc', 'abccc', index: 0, input: 'abccc', groups: undefined]
undefined
console.log(("abbcc").match("^([ab*c]{4,5})$"));
VM785:1 (2) ['abbcc', 'abbcc', index: 0, input: 'abbcc', groups: undefined]
undefined
console.log(("abbbb").match("^([ab*c]{4,5})$"));
VM834:1 (2) ['abbbb', 'abbbb', index: 0, input: 'abbbb', groups: undefined]
undefined
console.log(("abbbbkhk").match("^([ab*c]{4,5})$"));
VM879:1 null
undefined
console.log(("b").match("^([abc])$"));
VM996:1 (2) ['b', 'b', index: 0, input: 'b', groups: undefined]
undefined
console.log(("ab").match("^([abc])$"));
VM1034:1 null
undefined
console.log(("abc").match("^([abc])$"));
VM1069:1 null
undefined
console.log(("c").match("^([abc])$"));
VM1107:1 (2) ['c', 'c', index: 0, input: 'c', groups: undefined]
undefined
console.log(("c").match("^([abc]{3,5})$"));
VM1170:1 null
undefined
console.log(("ccc").match("^([abc]{3,5})$"));
VM1212:1 (2) ['ccc', 'ccc', index: 0, input: 'ccc', groups: undefined]
undefined
console.log(("cccbb").match("^([abc]{3,5})$"));
VM1256:1 (2) ['cccbb', 'cccbb', index: 0, input: 'cccbb', groups: undefined]
undefined
console.log(("abc").match("^([abc]{3,5})$"));
VM1311:1 (2) ['abc', 'abc', index: 0, input: 'abc', groups: undefined]
undefined
console.log(("abf").match("^([abc]{3,5})$"));
VM1353:1 null
undefined
console.log(("abc").match("^([abc]{3,5})$"));
VM1397:1 (2) ['abc', 'abc', index: 0, input: 'abc', groups: undefined]
undefined
console.log(("abc").match("^([abc])$"));
VM1438:1 null
undefined
console.log(("c").match("^([abc])$"));
VM1476:1 (2) ['c', 'c', index: 0, input: 'c', groups: undefined]