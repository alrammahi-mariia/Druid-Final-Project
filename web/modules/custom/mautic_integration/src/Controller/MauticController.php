<?php

namespace Drupal\mautic_integration\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\JsonResponse;

class MauticController extends ControllerBase {

  public function processSegments($contact_id) {
    if (!$contact_id) {
      return new JsonResponse(['error' => 'No contact ID provided'], 400);
    }

    try {
      // Get segments using existing function
      $segments = mautic_integration_get_segments($contact_id);
      
      if (!empty($segments)) {
        // Create taxonomy terms
        mautic_integration_ensure_terms($segments);
        
        return new JsonResponse([
          'success' => TRUE,
          'segments' => $segments,
        ]);
      }
      
      return new JsonResponse(['success' => TRUE, 'segments' => []]);
      
    } catch (\Exception $e) {
      \Drupal::logger('mautic_integration')->error(
        'Failed to process segments: @error',
        ['@error' => $e->getMessage()]
      );
      
      return new JsonResponse(['error' => 'Failed to process segments'], 500);
    }
  }
} 