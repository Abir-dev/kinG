import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { IconCheck } from "@tabler/icons-react";

interface PaymentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  planDetails: {
    name: string;
    price: string;
    period: string;
    features: string[];
    description: string;
  };
  onProceed: () => void;
}

export function PaymentDialog({
  isOpen,
  onClose,
  planDetails,
  onProceed,
}: PaymentDialogProps) {
  const handleClose = () => {
    console.log('PaymentDialog: Close button clicked');
    onClose();
  };
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [shippingAccepted, setShippingAccepted] = useState(false);
  const [refundAccepted, setRefundAccepted] = useState(false);

  const handleProceed = () => {
    if (
      termsAccepted &&
      privacyAccepted &&
      shippingAccepted &&
      refundAccepted
    ) {
      onProceed();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) {
        handleClose();
      }
    }}>
      <DialogContent className="sm:max-w-[600px] bg-card/90 backdrop-blur-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Confirm Your {planDetails.name} Plan
          </DialogTitle>
          <DialogDescription>
            Please review your selected plan details and accept our terms before
            proceeding
          </DialogDescription>
          <p className="mt-2 text-sm text-muted-foreground">
            {planDetails.description}
          </p>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-lg">Plan Details</h4>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Price</span>
              <span className="font-semibold">{planDetails.price}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Period</span>
              <span>{planDetails.period}</span>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-lg">What's Included</h4>
            <ul className="list-disc list-inside space-y-1">
              {planDetails.features.map((feature, index) => (
                <li key={index} className="text-sm text-muted-foreground">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="terms"
                  checked={termsAccepted}
                  onCheckedChange={(checked) =>
                    setTermsAccepted(checked as boolean)
                  }
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-muted-foreground"
                >
                  I agree to the{" "}
                  <Link
                    to="/terms-of-service"
                    target="_blank"
                    className="text-neon-purple hover:text-neon-pink underline"
                  >
                    Terms of Service
                  </Link>
                </label>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="privacy"
                  checked={privacyAccepted}
                  onCheckedChange={(checked) =>
                    setPrivacyAccepted(checked as boolean)
                  }
                />
                <label
                  htmlFor="privacy"
                  className="text-sm text-muted-foreground"
                >
                  I agree to the{" "}
                  <Link
                    to="/privacy-policy"
                    target="_blank"
                    className="text-neon-purple hover:text-neon-pink underline"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="shipping"
                  checked={shippingAccepted}
                  onCheckedChange={(checked) =>
                    setShippingAccepted(checked as boolean)
                  }
                />
                <label
                  htmlFor="shipping"
                  className="text-sm text-muted-foreground"
                >
                  I agree to the{" "}
                  <Link
                    to="/shipping-policy"
                    target="_blank"
                    className="text-neon-purple hover:text-neon-pink underline"
                  >
                    Shipping Policy
                  </Link>
                </label>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="refund"
                  checked={refundAccepted}
                  onCheckedChange={(checked) =>
                    setRefundAccepted(checked as boolean)
                  }
                />
                <label
                  htmlFor="refund"
                  className="text-sm text-muted-foreground"
                >
                  I agree to the{" "}
                  <Link
                    to="/refund-policy"
                    target="_blank"
                    className="text-neon-purple hover:text-neon-pink underline"
                  >
                    Refund Policy
                  </Link>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 mt-6">
          <Button 
            variant="ghost" 
            onClick={handleClose}
            type="button"
            className="w-full sm:w-auto min-h-[44px] touch-manipulation cursor-pointer"
            style={{ pointerEvents: 'auto' }}
          >
            Cancel
          </Button>
          <Button
            className={`w-full sm:w-auto min-h-[44px] touch-manipulation bg-gradient-to-r from-neon-purple to-neon-pink hover:opacity-90 ${
              !(
                termsAccepted &&
                privacyAccepted &&
                shippingAccepted &&
                refundAccepted
              )
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={handleProceed}
            disabled={
              !termsAccepted ||
              !privacyAccepted ||
              !shippingAccepted ||
              !refundAccepted
            }
          >
            Proceed to Payment
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
