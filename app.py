from flask import Flask, jsonify
from flask_cors import CORS
import subprocess
import logging
import sys

app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(level=logging.DEBUG, stream=sys.stdout,
                    format='%(asctime)s - %(levelname)s - %(message)s')


@app.route('/run-python-script', methods=['GET'])
def run_python_script():
    try:
        logging.debug("Running Python script")
        result = subprocess.run(
            ['python', 'your_script.py'], capture_output=True, text=True, check=True)
        logging.debug("Script output: %s", result.stdout)
        if result.stderr:
            logging.error("Script error: %s", result.stderr)
        return jsonify({'output': result.stdout, 'error': result.stderr}), result.returncode
    except subprocess.CalledProcessError as e:
        logging.error("Script failed with return code %d: %s",
                      e.returncode, e.stderr)
        return jsonify({'error': str(e)}), 500
    except Exception as e:
        logging.error("Unexpected error: %s", str(e))
        return jsonify({'error': str(e)}), 500


if __name__ == '_main_':
    app.run(debug=True)
