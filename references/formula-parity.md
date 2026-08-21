# Formula translation and parity

## Establish trustworthy expected results

Extract formulas separately from cached values. A cached value may be missing or stale. Prefer expected results produced by an available spreadsheet calculation engine from a copy of the workbook.

If a trustworthy calculation engine is unavailable:

1. identify representative input/output cases already known to be correct;
2. ask the user for trusted examples when necessary;
3. mark unverified calculations explicitly;
4. never treat successful code execution as proof of workbook parity.

## Build a calculation catalog

Group copied formulas into formula families and assign stable business names. For each family, record:

- business meaning;
- source sheet and representative cells or named ranges;
- inputs and output type;
- formula or dependency pattern;
- app function or service;
- rounding, units, and error behavior;
- normal, boundary, blank, and failure test cases.

Keep a formula-family count so large ranges are not silently missed.

## Preserve Excel semantics deliberately

Check these behaviors whenever relevant:

- blank, empty string, zero, false, and missing values;
- date system, date-only values, time zones, month boundaries, and leap years;
- percentage, currency, decimal precision, displayed rounding, and calculation rounding;
- exact versus approximate lookups, sorted-range assumptions, and missing matches;
- text casing, whitespace, concatenation, and locale-dependent parsing;
- error propagation such as `#N/A`, `#VALUE!`, divide-by-zero, and deliberate fallbacks;
- volatile functions such as `NOW`, `TODAY`, `RAND`, and `OFFSET`;
- dynamic arrays, array formulas, structured references, and named ranges;
- circular references and iterative-calculation settings;
- hidden helper sheets and formulas that depend on external workbooks;
- functions whose behavior differs across spreadsheet engines.

Translate behavior into named code. Do not mechanically convert formula strings or use `eval`.

## Verify representative and edge cases

For each important formula family, compare the app with trustworthy workbook results for:

- an ordinary case;
- minimum and maximum expected values;
- empty or optional inputs;
- threshold values immediately below, at, and above a branch boundary;
- invalid input and missing lookup data;
- rounding-sensitive and date-sensitive cases.

Use exact comparisons for integers, identifiers, categories, and formatted decisions. Use an explicitly documented tolerance only when floating-point or decimal behavior requires it.

Record results in a table:

| Calculation | Case | Expected | Actual | Tolerance | Result |
| --- | --- | --- | --- | --- | --- |

Report calculations as passed, failed, or unverified. “Unverified” is not the same as passed.
