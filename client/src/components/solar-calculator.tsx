import { useState } from 'react';
import { apiRequest } from "@/lib/queryClient";
import { useTranslations } from "@/contexts/translations";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Calculator, Info, Sun, Euro, Zap, MapPin, Percent } from 'lucide-react';
import { Slider } from "@/components/ui/slider";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Interface for PVGIS API response (only relevant parts)
interface PvgisResponse {
  outputs: {
    totals: {
      fixed: {
        E_y: number; // Yearly PV energy production [kWh]
      };
    };
  };
}

// Add more locations
const locations = [
  { name: "Nicosia", lat: 35.1856, lon: 33.3823 },
  { name: "Limassol", lat: 34.6733, lon: 33.0437 },
  { name: "Larnaca", lat: 34.9167, lon: 33.6333 },
  { name: "Paphos", lat: 34.7768, lon: 32.4245 },
  { name: "Pegeia", lat: 34.8833, lon: 32.3833 },
  { name: "Kissonerga", lat: 34.8167, lon: 32.4 },
  { name: "Paralimni", lat: 35.0333, lon: 33.9833 },
  { name: "Ayia Napa", lat: 34.9833, lon: 34.0 },
  { name: "Polis Chrysochous", lat: 35.035, lon: 32.425 },
  { name: "Geroskipou", lat: 34.7667, lon: 32.45 },
  { name: "Kyrenia", lat: 35.3333, lon: 33.3167 }, // Note: Northern Cyprus
  { name: "Famagusta", lat: 35.1167, lon: 33.95 }, // Note: Northern Cyprus
];

// Define angle and orientation options
const angleOptions = [
  { value: '0', labelKey: 'angleOptionFlat' },
  { value: '35', labelKey: 'angleOptionTilted' }, // Using 35 as a representative tilted angle
  { value: '90', labelKey: 'angleOptionVertical' },
];

const orientationOptions = [
  { value: '0', labelKey: 'orientationOptionSouth' },
  { value: '-90', labelKey: 'orientationOptionEast' },
  { value: '90', labelKey: 'orientationOptionWest' },
  { value: '180', labelKey: 'orientationOptionNorth' },
];

export default function SolarCalculator() {
  const { translations } = useTranslations();
  const defaultLocation = locations[0]; // Nicosia
  const defaultAngle = angleOptions[1]; // Tilted
  const defaultOrientation = orientationOptions[0]; // South
  
  const [lat, setLat] = useState(defaultLocation.lat.toString());
  const [lon, setLon] = useState(defaultLocation.lon.toString());
  const [peakPower, setPeakPower] = useState('0.8'); // Default 800W
  const [angle, setAngle] = useState(defaultAngle.value); // Store value directly
  const [aspect, setAspect] = useState(defaultOrientation.value); // Store value directly
  const [electricityPrice, setElectricityPrice] = useState('0.40');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ production: number; savings: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLocationChange = (value: string) => {
    try {
      const selectedLocation = locations.find(loc => loc.name === value);
      if (selectedLocation) {
        setLat(selectedLocation.lat.toString());
        setLon(selectedLocation.lon.toString());
      }
    } catch (e) {
      console.error("Error parsing location value:", e);
    }
  };

  // Handlers for new dropdowns
  const handleAngleChange = (value: string) => {
    setAngle(value);
  };

  const handleOrientationChange = (value: string) => {
    setAspect(value);
  };

  const handlePeakPowerChange = (values: number[]) => {
    if (values.length > 0) {
      setPeakPower(values[0].toFixed(1));
    }
  };

  const handleCalculate = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    const params = new URLSearchParams({
      lat,
      lon,
      peakpower: peakPower,
      angle: angle, // Use state value directly
      aspect: aspect, // Use state value directly
    });

    try {
      const response = await apiRequest('GET', `/api/pvgis?${params.toString()}`);
      
      // Check if response is ok before trying to parse JSON
      if (!response.ok) {
        let errorMsg = translations.calculator.error || 'Failed to calculate. Please check inputs and try again.';
        try {
            const errorData = await response.json();
            errorMsg = errorData.message || errorMsg;
        } catch (jsonError) {
            // If JSON parsing fails, use the status text
            errorMsg = `API Error: ${response.statusText}`;
        }
        throw new Error(errorMsg);
      }
      
      const data: PvgisResponse = await response.json();
      
      // Check if the expected data structure is present
      if (!data?.outputs?.totals?.fixed?.E_y) {
        console.error("Invalid PVGIS response structure:", data);
        throw new Error(translations.calculator.error || 'Received invalid data from calculation service.');
      }
      
      const yearlyProduction = data.outputs.totals.fixed.E_y;
      const yearlySavings = yearlyProduction * parseFloat(electricityPrice);
      
      setResult({
        production: parseFloat(yearlyProduction.toFixed(2)),
        savings: parseFloat(yearlySavings.toFixed(2)),
      });
    } catch (err: any) { // Catch specific error type if possible
      console.error("Calculation Error:", err);
      // Use error message from thrown error or a default
      setError(err.message || translations.calculator.error || 'Failed to calculate. Please check inputs and try again.');
    } finally {
      setLoading(false);
    }
  };

  // Helper function for tooltips
  const InfoTooltip = ({ content }: { content: string }) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Info className="h-4 w-4 ml-1 text-muted-foreground cursor-help" />
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs">{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  return (
    <section id="calculator" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
            {translations.calculator.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {translations.calculator.subtitle}
          </p>
        </div>

        <Card className="shadow-lg border-t-4 border-t-blue-500">
          <CardHeader className="bg-gray-50 rounded-t-lg border-b">
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-blue-500" />
              {translations.calculator.title}
            </CardTitle>
            <CardDescription>
              {translations.calculator.subtitle}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Left Column: Location & Power */}
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-blue-700 mb-1 flex items-center">
                    <Sun className="mr-2 h-4 w-4" />
                    <strong>{translations.calculator.locationAndPower}</strong>
                  </p>
                </div>
              
                <div className="space-y-2">
                  <Label htmlFor="location" className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-green-600" />
                    {translations.calculator.locationLabel}
                  </Label>
                  <Select 
                    onValueChange={handleLocationChange} 
                    defaultValue={defaultLocation.name}
                  >
                    <SelectTrigger id="location" className="rounded-md">
                      <SelectValue placeholder="Select a location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map(loc => (
                        <SelectItem key={loc.name} value={loc.name}>
                          {loc.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="peakPower" className="flex items-center">
                      <Zap className="h-4 w-4 mr-1 text-yellow-500" />
                      {translations.calculator.peakPowerLabel} (kW)
                      <InfoTooltip content="This is the total peak power of your solar panel system. For balcony solar, this typically ranges from 0.3kW to 2.5kW." />
                    </Label>
                    <span className="font-medium text-lg text-blue-600">{peakPower} kW</span>
                  </div>
                  
                  <div className="py-4 px-2">
                    <Slider
                      id="peakPower"
                      defaultValue={[0.8]}
                      max={3}
                      min={0.3}
                      step={0.1}
                      onValueChange={handlePeakPowerChange}
                      className="my-2"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>0.3 kW</span>
                      <span>3.0 kW</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="electricityPrice" className="flex items-center">
                    <Euro className="h-4 w-4 mr-1 text-green-600" />
                    {translations.calculator.priceLabel} (€/kWh)
                    <InfoTooltip content="Your current electricity price per kWh. This is used to calculate your potential savings." />
                  </Label>
                  <Input 
                    id="electricityPrice" 
                    type="number" 
                    value={electricityPrice} 
                    onChange={(e) => setElectricityPrice(e.target.value)} 
                    step="0.01"
                    min="0"
                    placeholder="e.g., 0.40"
                    className="rounded-md"
                  />
                </div>
              </div>

              {/* Right Column: Angle/Orientation Dropdowns */}
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-blue-700 mb-1 flex items-center">
                    <Percent className="mr-2 h-4 w-4" />
                    <strong>{translations.calculator.panelPosition}</strong>
                  </p>
                </div>
                
                {/* Panel Installation Illustration */}
                <div className="flex justify-center mb-4">
                  <div className="relative w-64 h-64">
                    <div className="absolute inset-0">
                      <svg viewBox="0 0 200 200" className="w-full h-full">
                        {/* Sun position */}
                        <circle cx="100" cy="40" r="20" fill="#FFD700" />
                        <line x1="100" y1="60" x2="100" y2="80" stroke="#FFD700" strokeWidth="2" />
                        
                        {/* Ground */}
                        <line x1="30" y1="150" x2="170" y2="150" stroke="#333" strokeWidth="2" />
                        
                        {/* Panel based on angle */}
                        {angle === '0' && (
                          <>
                            {/* Flat panel */}
                            <rect x="60" y="130" width="80" height="10" fill="#1E90FF" />
                            <text x="100" y="125" textAnchor="middle" fill="#333" fontSize="8">0°</text>
                          </>
                        )}
                        
                        {angle === '35' && (
                          <>
                            {/* Tilted panel */}
                            <g transform="rotate(-35 100 140)">
                              <rect x="60" y="140" width="80" height="10" fill="#1E90FF" />
                            </g>
                            <line x1="100" y1="140" x2="100" y2="150" stroke="#555" strokeWidth="1" />
                            <text x="110" y="135" textAnchor="middle" fill="#333" fontSize="8">35°</text>
                          </>
                        )}
                        
                        {angle === '90' && (
                          <>
                            {/* Vertical panel */}
                            <rect x="95" y="100" width="10" height="50" fill="#1E90FF" />
                            <text x="115" y="125" textAnchor="middle" fill="#333" fontSize="8">90°</text>
                          </>
                        )}
                        
                        {/* Orientation compass indicator */}
                        <g transform={`rotate(${parseInt(aspect)} 100 175)`}>
                          <circle cx="100" cy="175" r="15" fill="#f5f5f5" stroke="#333" />
                          <polygon points="100,160 103,170 97,170" fill="red" />
                        </g>
                        <text x="100" y="178" textAnchor="middle" fill="#333" fontSize="6">N</text>
                        <text x="100" y="195" textAnchor="middle" fill="#333" fontSize="8">
                          {aspect === '0' ? 'South' : 
                           aspect === '-90' ? 'East' : 
                           aspect === '90' ? 'West' : 'North'}
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Angle Dropdown */}
                <div className="space-y-2">
                  <Label htmlFor="angle" className="flex items-center">
                    {translations.calculator.angleLabel}
                    <InfoTooltip content="The angle at which your solar panels are installed. Tilted (~35°) typically provides the best year-round performance." />
                  </Label>
                  <Select 
                    onValueChange={handleAngleChange} 
                    defaultValue={defaultAngle.value}
                  >
                    <SelectTrigger id="angle" className="rounded-md">
                      <SelectValue placeholder="Select angle" />
                    </SelectTrigger>
                    <SelectContent>
                      {angleOptions.map(opt => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {/* Access translated label */}
                          {translations.calculator[opt.labelKey as keyof typeof translations.calculator]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Orientation Dropdown */}
                <div className="space-y-2">
                  <Label htmlFor="aspect" className="flex items-center">
                    {translations.calculator.orientationLabel}
                    <InfoTooltip content="The direction your solar panels face. South-facing panels typically generate the most energy in the Northern Hemisphere." />
                  </Label>
                  <Select 
                    onValueChange={handleOrientationChange} 
                    defaultValue={defaultOrientation.value}
                  >
                    <SelectTrigger id="aspect" className="rounded-md">
                      <SelectValue placeholder="Select orientation" />
                    </SelectTrigger>
                    <SelectContent>
                      {orientationOptions.map(opt => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {/* Access translated label */}
                          {translations.calculator[opt.labelKey as keyof typeof translations.calculator]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button 
                onClick={handleCalculate} 
                disabled={loading} 
                size="lg" 
                className="px-10 py-6 text-lg rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all shadow-md"
              >
                {loading ? (
                  <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> {translations.calculator.calculating}</>
                ) : (
                  <>{translations.calculator.calculateButton}</>
                )}
              </Button>

              {error && (
                <Alert variant="destructive" className="mt-6 text-left">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {result && (
                <div className="mt-8">
                  <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-semibold text-green-800 flex items-center justify-center">
                        <Calculator className="mr-2 h-5 w-5" /> {translations.calculator.resultsTitle}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2">
                        <Card className="border-green-200 bg-white">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-green-700 font-medium flex items-center">
                              <Sun className="mr-2 h-4 w-4 text-yellow-500" /> {translations.calculator.productionLabel}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-3xl font-bold text-green-900">{result.production.toLocaleString()} <span className="text-lg font-normal">kWh/{translations.calculator.year}</span></p>
                            <p className="text-xs text-gray-500 mt-1">≈ {(result.production / 365).toFixed(1)} kWh {translations.calculator.perDay}</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="border-green-200 bg-white">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-green-700 font-medium flex items-center">
                              <Euro className="mr-2 h-4 w-4 text-green-600" /> {translations.calculator.savingsLabel}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-3xl font-bold text-green-900">€{result.savings.toLocaleString()} <span className="text-lg font-normal">/{translations.calculator.year}</span></p>
                            <p className="text-xs text-gray-500 mt-1">≈ €{(result.savings / 12).toFixed(0)} {translations.calculator.perMonth}</p>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <div className="mt-4">
                        <div className="text-sm bg-blue-50 p-3 rounded-lg text-blue-700">
                          <p className="font-medium mb-1">{translations.calculator.environmentalImpact}:</p>
                          <p>{translations.calculator.co2Saved}: <strong>{Math.round(result.production * 0.35)} kg</strong> {translations.calculator.co2PerYear}</p>
                          <p className="text-xs mt-2 text-gray-500">{translations.calculator.resultsDisclaimer}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0 justify-center">
                      <Button variant="outline" className="text-green-700 border-green-300" onClick={() => window.print()}>
                        {translations.calculator.printResults}
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
} 