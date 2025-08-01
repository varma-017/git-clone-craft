import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Clock, Users, Building2, Award, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroBackground from '@/assets/hero-background.jpg';

const Home = () => {
  const services = [
    {
      icon: Shield,
      title: "Criminal Background Checks",
      description: "Access criminal records from federal, state, and county databases, including felony and misdemeanor convictions."
    },
    {
      icon: Clock,
      title: "Employment Verification",
      description: "Verify the employment history of your potential candidates to identify any discrepancies by contacting previous employers."
    },
    {
      icon: CheckCircle,
      title: "Education Verification",
      description: "Confirm the educational background of your candidates, including degrees, certifications, and attendance dates."
    },
    {
      icon: Award,
      title: "Driving Record Checks",
      description: "Review driving history and traffic violations for positions that require transportation requirements."
    }
  ];

  const features = [
    {
      title: "Accuracy and Reliability",
      description: "Our rigorous verification processes ensure the highest level of accuracy. We use advanced technology and thorough research to provide reliable information."
    },
    {
      title: "Fast Turnaround Times",
      description: "We understand the importance of timely hiring decisions. Our streamlined processes deliver results quickly without compromising accuracy."
    },
    {
      title: "Compliance and Security",
      description: "We adhere to all relevant laws and regulations, ensuring your background checks are conducted ethically and legally. Your data is protected with the highest security standards."
    }
  ];

  const supportTypes = [
    { icon: Building2, title: "Corporations", description: "Large enterprises requiring comprehensive background checks for numerous employees." },
    { icon: Users, title: "Small Businesses", description: "Growing businesses needing reliable verification for key hires." },
    { icon: Award, title: "Non-Profits", description: "Organizations prioritizing the safety and trustworthiness of their staff and volunteers." },
    { icon: Shield, title: "Government Agencies", description: "Public sector organizations requiring thorough background screening for sensitive roles." }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "HR Manager at Tech Dynamics Inc.",
      content: "SecureHire has been instrumental in ensuring the safety and security of our workplace. Their comprehensive background checks have helped us make informed hiring decisions.",
      rating: 5
    },
    {
      name: "John Clark",
      position: "Director of Operations at Global Solutions",
      content: "The speed and accuracy of SecureHire's services are unmatched. We've been able to streamline our hiring process without compromising on quality.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      position: "Chief Business Head of HR at Future Dynamics",
      content: "We appreciate SecureHire's commitment to compliance and security. Their services have given us peace of mind in our recruitment process.",
      rating: 5
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive Employment Background Checks
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Enable a bias-free and productive workplace without the high background verification costs. 
            We provide documentation verification services to help you make informed hiring decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Get a Quote
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="cta" size="xl">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer a comprehensive suite of background check services tailored to meet your specific needs. 
              Our checks cover various aspects to ensure you have a complete picture of your potential hires.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-elevated transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-brand-dark">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">Why Choose Us?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We are committed to providing reliable and efficient background check services. 
              Our team of experts ensures accuracy and compliance with all relevant regulations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-brand-dark">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Support Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">Who We Support</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportTypes.map((type, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-brand-dark">{type.title}</h3>
                  <p className="text-muted-foreground text-sm">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">Client Testimonials</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-brand-dark">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-dark to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Protect your business and make informed hiring decisions with our comprehensive background check services. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Contact Us
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;