#!/usr/bin/env python3
"""Serve Fluently locally without retaining stale application files."""

import argparse
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


class FreshFilesHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def send_head(self):
        # Return current bytes even when a client sends an old cache validator.
        for name in ('If-Modified-Since', 'If-None-Match'):
            if name in self.headers:
                del self.headers[name]
        return super().send_head()


def main():
    root = Path(__file__).resolve().parent.parent
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=int, default=4173)
    parser.add_argument('--bind', default='127.0.0.1')
    parser.add_argument('--directory', type=Path, default=root)
    args = parser.parse_args()
    directory = args.directory
    if not directory.is_absolute():
        directory = root / directory
    if not (directory / 'index.html').is_file():
        parser.error(f'No built website found in {directory}. Run node scripts/build.mjs before previewing dist.')
    handler = partial(FreshFilesHandler, directory=str(directory))
    try:
        server = ThreadingHTTPServer((args.bind, args.port), handler)
    except OSError as error:
        parser.exit(1, f'Cannot start Fluently on port {args.port}: {error}\n')
    print(f'Fluently is running at http://localhost:{args.port}/', flush=True)
    print('Press Ctrl+C to stop.', flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == '__main__':
    main()
