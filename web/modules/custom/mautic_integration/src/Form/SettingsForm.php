<?php

namespace Drupal\mautic_integration\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

class SettingsForm extends ConfigFormBase {

  protected function getEditableConfigNames() {
    return ['mautic_integration.settings'];
  }

  public function getFormId() {
    return 'mautic_integration_settings';
  }

  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('mautic_integration.settings');

    $form['mautic_url'] = [
      '#type' => 'url',
      '#title' => $this->t('Mautic URL'),
      '#default_value' => $config->get('mautic_url'),
      '#required' => TRUE,
      '#description' => $this->t('The base URL of your Mautic installation (e.g., https://mautic-lando.lndo.site)'),
    ];

    $form['mautic_username'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Mautic Username'),
      '#default_value' => $config->get('mautic_username'),
      '#required' => TRUE,
    ];

    $form['mautic_password'] = [
      '#type' => 'password',
      '#title' => $this->t('Mautic Password'),
      '#description' => $this->t('Leave blank to keep existing password'),
    ];

    return parent::buildForm($form, $form_state);
  }

  public function submitForm(array &$form, FormStateInterface $form_state) {
    $config = $this->config('mautic_integration.settings');
    
    $config->set('mautic_url', $form_state->getValue('mautic_url'));
    $config->set('mautic_username', $form_state->getValue('mautic_username'));
    
    // Only update password if a new one was provided
    if ($password = $form_state->getValue('mautic_password')) {
      $config->set('mautic_password', $password);
    }
    
    $config->save();

    parent::submitForm($form, $form_state);
  }
} 