// Client-side API handler for sending payment data to server
export async function sendPaymentData(formData) {
  try {
    const response = await fetch('/api/send-payment', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to send payment data');
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending payment data:', error);
    throw error;
  }
}
