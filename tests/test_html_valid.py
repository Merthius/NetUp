import pytest

html5lib = pytest.importorskip("html5lib")


def test_index_html_is_valid():
    parser = html5lib.HTMLParser(strict=True)
    with open("index.html", "rb") as f:
        parser.parse(f)
    assert not getattr(parser, "errors", [])
