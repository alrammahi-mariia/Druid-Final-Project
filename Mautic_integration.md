# Mautic Integration process

## 1. Frontend

1. Loads the Mautic Tracking Script.
2. Extracts the `contact_id` from the Mautic cookie.
3. Pass the `contact_id` to Drupal’s endpoint

## 2. Drupal Module (mautic_integration)

### Contact Segment Matching

1. Receives `contact_id` from React.
2. Queries the Mautic API to get the visitor’s segments by contact_id.
3. Checks if taxonomy terms corresponding to Mautic segments exist in Drupal. If not, creates them.

### Paragraph Visibility Logic

1. Compares the `contact_id`'s segment against the taxonomy terms associated with each paragraph.
2. Sets paragraph visibility field value to (`visible` or `invisible`) based on the match.
3. The paragraph visibility is then included in `paragraph.attributes.field_visibility` the JSON API response and in Drupal UI
4. If no segment is identified or provided, all paragraphs are marked as `visible` (default).

## 3. React Frontend

1. Fetches paragraphs via the Drupal JSON API.
2. Filters and renders paragraphs marked as `visible`.

<img src="./Mautic Integration.png" alt="Mautic Integration process" />
