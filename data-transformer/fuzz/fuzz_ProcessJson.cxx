#include <fuzzbuzz.hxx>

extern "C" void ProcessJson(const char *);

FZBZ_TARGET_CLASS(FuzzProcessJson);
class FuzzProcessJson {
	public:
		FuzzProcessJson(fzbz::Fuzzer &f) {
			fzbz::generator::string<std::string> string0 = fzbz::generator::string<std::string>();
			
			auto target = fzbz::fuzzTarget([](std::string data) {
				ProcessJson(data.c_str());
			}, string0);
			
			f.addFuzzTarget(target);
		}
};
