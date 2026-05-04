# RailMod Website

## Project Description
RailMod is a comprehensive web application designed for train enthusiasts, providing insightful analytics, scheduling, and community engagement features. It allows users to manage their train models and share experiences with fellow enthusiasts.

## Installation Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/fluxitrain/railmod-website.git
   ```
2. Navigate to the project directory:
   ```bash
   cd railmod-website
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Configuration Guide
1. **Environment Variables:** Create a `.env` file in the root directory with the following variables:
   ```plaintext
   DATABASE_URL=<your_database_url>
   API_KEY=<your_api_key>
   ```
2. **Configuration Files:** Update the `config.js` file with your preferences, such as server ports and other custom settings.

## API Documentation
- **GET /api/models** - Retrieve a list of train models.
- **POST /api/models** - Add a new train model.
- **GET /api/models/:id** - Retrieve a specific model by ID.
- **PUT /api/models/:id** - Update a specific model.
- **DELETE /api/models/:id** - Delete a specific model.

## Usage Examples
### Retrieving Models
```bash
curl -X GET http://localhost:3000/api/models
```

### Adding a New Model
```bash
curl -X POST http://localhost:3000/api/models -H 'Content-Type: application/json' -d '{"name": "Model X", "year": 2023}'
```

### Updating a Model
```bash
curl -X PUT http://localhost:3000/api/models/1 -H 'Content-Type: application/json' -d '{"year": 2024}'
```

### Deleting a Model
```bash
curl -X DELETE http://localhost:3000/api/models/1
```