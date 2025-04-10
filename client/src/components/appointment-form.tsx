import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { insertAppointmentSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { Check } from "lucide-react";
import { useTranslations } from "@/contexts/translations";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

// Extend the insert schema with validation
const appointmentFormSchema = insertAppointmentSchema.extend({
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Phone number is too short"),
  postalCode: z.string().min(4, "Postal code must be at least 4 characters")
});

type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;

export default function AppointmentForm() {
  const { toast } = useToast();
  const { translations } = useTranslations();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
      preferredDate: "",
      preferredTime: "",
      notes: ""
    }
  });

  const createAppointment = useMutation({
    mutationFn: async (data: AppointmentFormValues) => {
      const response = await apiRequest("POST", "/api/appointments", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: translations.appointment.thankYou.title,
        description: translations.appointment.thankYou.message,
        variant: "default"
      });
      setIsSubmitted(true);
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to book appointment: ${error.message}`,
        variant: "destructive"
      });
    }
  });

  function onSubmit(data: AppointmentFormValues) {
    createAppointment.mutate(data);
  }

  const cities = ["Nicosia", "Limassol", "Larnaca", "Paphos", "Famagusta", "Other"];
  const timeSlots = [
    { value: "morning", label: "Morning (9:00 - 12:00)" },
    { value: "afternoon", label: "Afternoon (12:00 - 16:00)" },
    { value: "evening", label: "Evening (16:00 - 19:00)" }
  ];

  return (
    <section id="appointment" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
              {translations.appointment.title}
            </h2>
            <p className="text-gray-600 mb-8">
              {translations.appointment.subtitle}
            </p>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{translations.appointment.thankYou.title}</h3>
                  <p className="text-gray-600 mb-6">
                    {translations.appointment.thankYou.message}
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {translations.appointment.thankYou.anotherAppointment}
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{translations.appointment.form.firstName}</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{translations.appointment.form.lastName}</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    {/* Contact fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{translations.appointment.form.email}</FormLabel>
                            <FormControl>
                              <Input type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{translations.appointment.form.phone}</FormLabel>
                            <FormControl>
                              <Input type="tel" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    {/* Address */}
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{translations.appointment.form.address}</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {/* City and Postal Code */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{translations.appointment.form.city}</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a city" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {cities.map(city => (
                                  <SelectItem key={city} value={city}>{city}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="postalCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{translations.appointment.form.postalCode}</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    {/* Date and Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="preferredDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{translations.appointment.form.preferredDate}</FormLabel>
                            <FormControl>
                              <Input type="date" min={new Date().toISOString().split("T")[0]} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="preferredTime"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{translations.appointment.form.preferredTime}</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {timeSlots.map(slot => (
                                  <SelectItem key={slot.value} value={slot.value}>{slot.label}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    {/* Notes */}
                    <FormField
                      control={form.control}
                      name="notes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{translations.appointment.form.notes}</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={4} 
                              {...field} 
                              value={field.value || ''}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      disabled={createAppointment.isPending}
                    >
                      {createAppointment.isPending 
                        ? translations.appointment.form.submitting 
                        : translations.appointment.form.submitButton
                      }
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="sticky top-24">
              <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
                <h3 className="font-semibold text-xl mb-4">{translations.appointment.whyBook.title}</h3>
                <ul className="space-y-3">
                  {translations.appointment.whyBook.reasons.map((reason, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="text-green-600 h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <img 
                src="/images/Setup.webp" 
                alt="Solar panel installation" 
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
