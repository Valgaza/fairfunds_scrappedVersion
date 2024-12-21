from database import engine

def test_connection():
    try:
        # Try connecting to the database
        connection = engine.connect()
        print("Connection to the database was successful!")
        connection.close()
    except Exception as e:
        print(f"Failed to connect to the database: {e}")

if __name__ == "__main__":
    test_connection()
