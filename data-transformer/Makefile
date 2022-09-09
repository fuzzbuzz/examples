DEPS=data-transformer.c main.c
LIBS=-lm

all: $(DEPS)
	$(CC) -w -I. -o data-transformer $(CFLAGS) $^ $(LIBS)

.PHONY: clean

clean:
	rm -f ./data-transformer ./*.so
