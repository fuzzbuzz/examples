import { Fuzzer, FuzzTarget } from "fuzzbuzz";
import { ByteArray, String } from "fuzzbuzz/generator";
import * as python from "fuzzbuzz/lang/python";

// atheris fuzzing is currently broken with bs
python.useSettrace(true);
const fuzzbs = python.importModule("fuzzbs");

export function FuzzBS(f: Fuzzer) {
  const body = new String("body");
  body.setMaxLength(4096);

  const query = new String("query");
  query.setMaxLength(4096);

  const target = new FuzzTarget(
    (body: string, query: string): void => {
      fuzzbs.fuzz_bshtml(body, query);
    },
    body,
    query
  );

  target.seed(
    `<html>
<head>
</head>
<body>
</body>
</html>
`,
    "abc"
  );

  f.addFuzzTarget(target);
}
