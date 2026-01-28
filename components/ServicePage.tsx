import React from 'react';
import LeakDetectionService from './services/LeakDetectionService';
import InsulationService from './services/InsulationService';
import PaintingService from './services/PaintingService';
import GypsumService from './services/GypsumService';
import MaintenanceService from './services/MaintenanceService';
import InteriorDesignService from './services/InteriorDesignService';
import { Language } from '../App';

interface ServicePageProps {
  serviceId: number;
  onBack: () => void;
  lang: Language;
}

const ServicePage: React.FC<ServicePageProps> = ({ serviceId, onBack, lang }) => {
  // Service ID Mapping:
  // 0: Leak Detection
  // 1: Insulation
  // 2: Painting
  // 3: Gypsum
  // 4: Maintenance
  // 5: Interior Design

  switch (serviceId) {
    case 0:
      return <LeakDetectionService onBack={onBack} lang={lang} />;
    case 1:
      return <InsulationService onBack={onBack} lang={lang} />;
    case 2:
      return <PaintingService onBack={onBack} lang={lang} />;
    case 3:
      return <GypsumService onBack={onBack} lang={lang} />;
    case 4:
      return <MaintenanceService onBack={onBack} lang={lang} />;
    case 5:
      return <InteriorDesignService onBack={onBack} lang={lang} />;
    default:
      return (
        <div className="min-h-screen flex items-center justify-center text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
            <button onClick={onBack} className="text-[#B89564] underline">Back to Home</button>
          </div>
        </div>
      );
  }
};

export default ServicePage;
