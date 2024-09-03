module.exports = {
    // Specify the line length that the printer will wrap on
    printWidth: 80,
  
    // Number of spaces per indentation level
    tabWidth: 2,
  
    // Indent lines with tabs instead of spaces
    useTabs: false,
  
    // Print semicolons at the ends of statements
    semi: true,
  
    // Use single quotes instead of double quotes
    singleQuote: true,
  
    // Print trailing commas wherever possible when multi-line
    trailingComma: 'es5',
  
    // Print spaces between brackets in object literals
    bracketSpacing: true,
  
    // Include parentheses around a sole arrow function parameter
    arrowParens: 'always',
  
    // Include a leading or trailing newline in the output
    endOfLine: 'auto',
  
    // Format files with Prettier only
    requirePragma: false,
  
    // Include the pragma at the top of files
    insertPragma: false,
  
    // Control the formatting of JSX tags
    jsxBracketSameLine: false,
  
    // Control the formatting of newlines around the brackets in object literals
    bracketSameLine: false,
  
    // Control the alignment of `=` signs in object literals and function parameters
    alignObjectValues: true,
  
    // Controls the spacing around the `=` sign in object literals
    objectCurlySpacing: true,
  
    // Controls the line length of `printWidth` for the default print width
    proseWrap: 'preserve',
  
    // Specify which files Prettier should ignore
    ignorePath: '.prettierignore',
  
    // Control whether to format the entire file or only modified parts
    rangeStart: 0,
    rangeEnd: Infinity,
  
    // Enable or disable formatting of Markdown files
    markdownWhitespace: 'preserve',
  };
  