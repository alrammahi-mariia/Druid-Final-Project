<?php

namespace Drupal\mautic_integration\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * Controller for Mautic integration endpoints.
 */
class MauticController extends ControllerBase {

  /**
   * Process segments for a given contact ID.
   *
   * @param string $contact_id
   *   The Mautic contact ID.
   *
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   *   The JSON response.
   */
  public function processSegments($contact_id) {
    // Debug log
    \Drupal::logger('mautic_integration')->notice(
      'Processing segments for contact: @id',
      ['@id' => $contact_id]
    );

    if (empty($contact_id)) {
      return new JsonResponse(['error' => 'No contact ID provided'], 400);
    }

    try {
      // Get segments
      $segments = mautic_integration_get_segments($contact_id);

      // Debug log
      \Drupal::logger('mautic_integration')->notice(
        'Found segments: @segments',
        ['@segments' => print_r($segments, TRUE)]
      );

      if (!empty($segments)) {
        return new JsonResponse([
          'success' => TRUE,
          'segments' => $segments,
        ]);
      }
      
      return new JsonResponse([
        'success' => TRUE,
        'segments' => [],
        'message' => 'No segments found',
      ]);
      
    } catch (\Exception $e) {
      \Drupal::logger('mautic_integration')->error(
        'Failed to process segments: @error',
        ['@error' => $e->getMessage()]
      );
      
      return new JsonResponse([
        'error' => 'Failed to process segments',
        'message' => $e->getMessage(),
      ], 500);
    }
  }
} 