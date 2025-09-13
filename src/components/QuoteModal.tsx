import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Upload } from 'lucide-react';
import { useScrollLock } from '@/hooks/useScrollLock';
import ConfirmationModal from '@/components/ConfirmationModal';
import { generateRefId } from '@/utils/generateRefId';

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  projectLocation: string;
  projectType: string;
  squareFootage: string;
  timeline: string;
  files: FileList | null;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ open, onOpenChange }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    projectLocation: '',
    projectType: '',
    squareFootage: '',
    timeline: '',
    files: null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationRefId, setConfirmationRefId] = useState('');
  const prevActiveElementRef = useRef<HTMLElement | null>(null);
  const prevConfirmationOpenRef = useRef(false);

  // Prevent layout shift when modal opens
  useScrollLock(open);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.projectLocation.trim()) newErrors.projectLocation = 'Project location is required';
    if (!formData.projectType) newErrors.projectType = 'Project type is required';
    if (!formData.timeline) newErrors.timeline = 'Timeline is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    // Remember current focus to restore later
    prevActiveElementRef.current = (document.activeElement as HTMLElement) || null;

    // Mock submit function - log to console for now
    console.log('Quote submission:', {
      ...formData,
      files: formData.files ? Array.from(formData.files).map(f => f.name) : null
    });

    // Generate ref ID and show confirmation modal
    const refId = generateRefId();
    setConfirmationRefId(refId);
    setShowConfirmation(true);
    
    // Close the quote form modal
    onOpenChange(false);
    
    // Reset form state
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      projectLocation: '',
      projectType: '',
      squareFootage: '',
      timeline: '',
      files: null,
    });
    setErrors({});
    setIsSubmitted(false);
  };

  const handleInputChange = (field: keyof FormData, value: string | FileList | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // Validate file types and size
      const validTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
      const maxSize = 10 * 1024 * 1024; // 10MB
      
      for (let file of Array.from(files)) {
        if (!validTypes.includes(file.type)) {
          alert('Please upload only PDF, JPG, or PNG files');
          e.target.value = '';
          return;
        }
        if (file.size > maxSize) {
          alert('File size must be less than 10MB');
          e.target.value = '';
          return;
        }
      }
    }
    handleInputChange('files', files);
  };

  const handleViewNextSteps = () => {
    setShowConfirmation(false);
    console.log('Navigate to next steps section');
  };

  useEffect(() => {
    // When confirmation closes, restore focus to previous element or fall back to header trigger
    if (prevConfirmationOpenRef.current && !showConfirmation) {
      const prevEl = prevActiveElementRef.current;
      if (prevEl && document.contains(prevEl)) {
        prevEl.focus();
      } else {
        const trigger = document.querySelector('[data-quote-trigger]') as HTMLElement | null;
        trigger?.focus();
      }
    }
    prevConfirmationOpenRef.current = showConfirmation;
  }, [showConfirmation]);

  return (
    <>
      <ConfirmationModal
        open={showConfirmation}
        onOpenChange={setShowConfirmation}
        refId={confirmationRefId}
      />
      
      <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border-0 p-0 overflow-hidden max-h-[95vh] overflow-y-auto">
        <DialogHeader className="p-4 sm:p-6 pb-3 sm:pb-4 border-b border-construction-light/20">
          <DialogTitle className="text-2xl font-bold text-construction-green font-poppins">
            Request a Residential Framing Quote
          </DialogTitle>
          <p className="text-construction-gray text-sm mt-2">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Full Name */}
          <div className="space-y-1.5 sm:space-y-2">
            <Label htmlFor="fullName" className="text-sm font-semibold text-construction-dark">
              Full Name *
            </Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              placeholder="Enter your full name"
              aria-invalid={errors.fullName ? 'true' : 'false'}
              required
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs" role="alert">{errors.fullName}</p>
            )}
          </div>

          {/* Email & Phone Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold text-construction-dark">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="your.email@example.com"
                aria-invalid={errors.email ? 'true' : 'false'}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-xs" role="alert">{errors.email}</p>
              )}
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="phone" className="text-sm font-semibold text-construction-dark">
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="(555) 123-4567"
                aria-invalid={errors.phone ? 'true' : 'false'}
                required
              />
              {errors.phone && (
                <p className="text-red-500 text-xs" role="alert">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Project Location */}
          <div className="space-y-1.5 sm:space-y-2">
            <Label htmlFor="projectLocation" className="text-sm font-semibold text-construction-dark">
              Project Location *
            </Label>
            <Input
              id="projectLocation"
              value={formData.projectLocation}
              onChange={(e) => handleInputChange('projectLocation', e.target.value)}
              placeholder="City, State or full address"
              aria-invalid={errors.projectLocation ? 'true' : 'false'}
              required
            />
            {errors.projectLocation && (
              <p className="text-red-500 text-xs" role="alert">{errors.projectLocation}</p>
            )}
          </div>

          {/* Project Type & Square Footage Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-1.5 sm:space-y-2">
              <Label className="text-sm font-semibold text-construction-dark">
                Project Type *
              </Label>
              <Select 
                value={formData.projectType} 
                onValueChange={(value) => handleInputChange('projectType', value)}
                required
              >
                <SelectTrigger 
                  className="h-12"
                  aria-invalid={errors.projectType ? 'true' : 'false'}
                >
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-300 shadow-lg rounded-lg">
                  <SelectItem value="new-custom-home">New Custom Home</SelectItem>
                  <SelectItem value="addition">Addition</SelectItem>
                  <SelectItem value="renovation">Renovation</SelectItem>
                </SelectContent>
              </Select>
              {errors.projectType && (
                <p className="text-red-500 text-xs" role="alert">{errors.projectType}</p>
              )}
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="squareFootage" className="text-sm font-semibold text-construction-dark">
                Approx. Square Footage
              </Label>
              <Input
                id="squareFootage"
                type="number"
                value={formData.squareFootage}
                onChange={(e) => handleInputChange('squareFootage', e.target.value)}
                placeholder="e.g. 2500"
                min="0"
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-1.5 sm:space-y-2">
            <Label className="text-sm font-semibold text-construction-dark">
              Timeline *
            </Label>
            <Select 
              value={formData.timeline} 
              onValueChange={(value) => handleInputChange('timeline', value)}
              required
            >
              <SelectTrigger 
                className="h-12"
                aria-invalid={errors.timeline ? 'true' : 'false'}
              >
                <SelectValue placeholder="When do you need this completed?" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-300 shadow-lg rounded-lg">
                <SelectItem value="ready-now">Ready Now</SelectItem>
                <SelectItem value="1-3-months">1–3 Months</SelectItem>
                <SelectItem value="3-6-months">3–6 Months</SelectItem>
                <SelectItem value="just-planning">Just Planning</SelectItem>
              </SelectContent>
            </Select>
            {errors.timeline && (
              <p className="text-red-500 text-xs" role="alert">{errors.timeline}</p>
            )}
          </div>

          {/* File Upload */}
          <div className="space-y-1.5 sm:space-y-2">
            <Label htmlFor="fileUpload" className="text-sm font-semibold text-construction-dark">
              Upload Plans/Drawings (Optional)
            </Label>
            <div className="flex items-center gap-3">
              <input
                id="fileUpload"
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                className="sr-only peer"
                aria-describedby="fileUploadHelp"
              />
              <label
                htmlFor="fileUpload"
                className="inline-flex items-center gap-2 rounded-lg bg-construction-green text-white px-4 py-2 text-sm font-medium hover:bg-construction-green-dark focus:outline-none focus:ring-2 focus:ring-construction-green/30 focus:ring-offset-0 peer-focus:ring-2 peer-focus:ring-construction-green/30 peer-focus:ring-offset-0 cursor-pointer"
              >
                <Upload className="h-5 w-5" aria-hidden="true" />
                Upload drawings (PDF/JPG/PNG)
              </label>
            </div>
            <p id="fileUploadHelp" className="text-xs text-construction-gray">
              PDF, JPG, PNG files only. Max 10MB per file.
            </p>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full h-12 text-base font-semibold bg-construction-green hover:bg-construction-secondary transition-colors duration-300"
          >
            Get My Free Quote
          </Button>
        </form>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default QuoteModal;