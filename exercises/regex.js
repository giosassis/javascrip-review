//car and cat
/ca[rt]/

//pop and prop
(/pr?op/)

//ferret, ferry, and ferrari
(/ferr(et|y|ari)/)

//Any word ending in ious
(/ious\b/) /*  the "\b" metacharacter is used to find a match at the beginning or end of a word  */  

//A whitespace character followed by a period, comma, colon, or semicolon
(/\s[.,:;]/)

//A word longer than six letters
(/\w{7}/)

//A word without the letter e (or E)
(/\b[^\We]+\b/i)

//Numbers
