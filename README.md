# NetUp

A simple web page project.

## Tests

This repository uses `pytest` for testing. A single test checks that `index.html` can be parsed by `html5lib` without errors.

### Running the tests

1. Install dependencies (requires `html5lib` and `pytest`):

```bash
pip install html5lib pytest
```

2. Run the tests:

```bash
pytest
```

If `html5lib` is not installed the test will be skipped.
