import { Fuzzer, FuzzTarget } from "fuzzbuzz";
import { ByteArray, String } from "fuzzbuzz/generator";
import * as python from "fuzzbuzz/lang/python";

const fuzzauthlib = python.importModule("fuzzauthlib");

export function FuzzOAuth2Session(f: Fuzzer) {
  const clientID = new String("clientID");
  clientID.setMaxLength(1024);

  const clientSecret = new String("clientSecret");
  clientSecret.setMaxLength(1024);

  const scope = new String("scope");
  scope.setMaxLength(1024);

  const target = new FuzzTarget(
    (clientID: string, clientSecret: string, scope: string): void => {
      fuzzauthlib.fuzz_oauth2session(clientID, clientSecret, scope);
    },
    clientID,
    clientSecret,
    scope
  );

  f.addFuzzTarget(target);
}
